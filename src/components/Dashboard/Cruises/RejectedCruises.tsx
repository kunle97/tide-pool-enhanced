import Sidebar from '../Navigation/Sidebar';
import DashboardNavbar from '../Navigation/DashboardNavbar';
import { useState, useEffect } from 'react';
import { Cruise } from '@/types';
import { calculateTotalArea, makeid, numberWithCommas } from '@/helpers/util';
import { REJECTED_CRUISES_API_URL } from '@/constants';
import { apiClient } from '@/api/apiClient';
import DataTable from './DataTable';
const RejectedCruises = () => {
  let [cruises, setCruises] = useState<Cruise[]>([]);
  let [totalArea, setTotalArea] = useState('');

  async function fetchCruises() {
    // Retrieve cruise data from GMRT API using the apiClient
    try {
      const data = await apiClient(REJECTED_CRUISES_API_URL, { method: 'GET' });
      setCruises(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchCruises();
  }, []);

  useEffect(() => {
    setTotalArea(calculateTotalArea(cruises).toString());
  }, [cruises]);

  return (
    <div id='wrapper'>
      <Sidebar />
      <div className='d-flex flex-column' id='content-wrapper'>
        <div id='content'>
          <DashboardNavbar />
          <div className='container-fluid'>
            <h2 className='text-light '>GMRT Rejected Cruises</h2>
            <p className='text-white mb-4'>
              Aggregate Total Area of Visible Cruises: {numberWithCommas(Number(totalArea))}
            </p>
            <div className='card shadow'>
              <div className='card-header py-3'>
                <p className='text-primary m-0 fw-bold text-white'></p>
              </div>
              <div className='card-body'>
                <DataTable cruises={cruises} />
              </div>
            </div>
          </div>
        </div>
        <footer
          className='bg-white sticky-footer'
          //   style={{-bsPrimary: '#364658', -bsPrimaryRgb: '54,70,88', -bsSecondary: '#3aaf5c', -bsSecondaryRgb: '58,175,92', background: '#2c3a4a'}}
        >
          <div className='container my-auto'>
            <div className='text-center my-auto copyright'>
              <span>Copyright © Brand 2023</span>
            </div>
          </div>
        </footer>
      </div>
      <a className='border rounded d-inline scroll-to-top' href='#page-top'>
        <i className='fas fa-angle-up' />
      </a>
    </div>
  );
};

export default RejectedCruises;
