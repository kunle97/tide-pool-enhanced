import { useState, useEffect } from 'react';
import { Cruise } from '@/types';
import { calculateTotalArea, makeid } from '@/helpers/util';
import { API_URL } from '@/constants';
import { apiClient } from '@/api/apiClient';
import Navbar from './Navbar';

function Table() {
  let [cruises, setCruises] = useState<Cruise[]>([]);
  let [totalArea, setTotalArea] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  async function fetchCruises() {
    // Retrieve cruise data from GMRT API using the apiClient
    try {
      const data = await apiClient(API_URL, { method: 'GET' });
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

  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  const handleSort = () => {
    if (sortOrder === 'asc') {
      setSortOrder('desc');
    } else {
      setSortOrder('asc');
    }
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleResultsPerPageChange = (event: any) => {
    setItemsPerPage(event.target.value);
  };

  const filteredData = cruises.filter(
    (item) =>
      (item.entry_id !== null && item.entry_id.toString().includes(searchTerm)) ||
      (item.created !== null && item.created.includes(searchTerm)),
  );

  const sortedData = filteredData.sort((a, b) => {
    if (sortOrder === 'asc') {
      return new Date(a.created) - new Date(b.created);
    } else if (sortOrder === 'desc') {
      return new Date(b.created) - new Date(a.created);
    }
    return 0;
  });

  // Pagination calculation
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <div className='container mx-auto p-4 mt-5'>
        <h1 className='text-xl'>GMRT Sonar Surveys/Filter</h1>
        <p>Aggregate Total Area of Visible Cruises: {totalArea}</p>
      </div>
      <div className='container mx-auto p-4'>
        <div className='overflow-auto p-1'>
          <input
            type='text'
            placeholder='Search...'
            value={searchTerm}
            onChange={handleSearch}
            className='float-left w-[250px] p-2 mb-4 rounded-lg shadow-sm border-gray-500 focus:outline-none focus:ring focus:border-blue-300 text-black'
          />
          <select
            className='float-right p-2 mb-4  rounded-lg shadow-sm border-gray-500 focus:outline-none focus:ring focus:border-blue-300'
            value={itemsPerPage}
            onChange={handleResultsPerPageChange}
            aria-label='Items per page'
          >
            <option value={10} disabled>
              Results Per Page
            </option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>

        <table className='w-full bg-white divide-y divide-gray-200 shadow-sm rounded-lg overflow-hidden'>
          <thead className='bg-uiGreen text-white'>
            <tr>
              <th className='py-2 px-4'>Entry ID</th>
              <th className='py-2 px-4'>Chief</th>
              <th className='py-2 px-4 cursor-pointer' onClick={handleSort}>
                Created <span className='text-xs'>{sortOrder === 'asc' ? '▲' : '▼'}</span>
              </th>
              <th className='py-2 px-4'>Total Area</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            {currentItems.map((item) => (
              <tr key={item.entry_id + '_' + makeid(10)} className='hover:bg-gray-100'>
                <td className='py-2 px-4 text-center'>
                  <a className='text-uiGreen' target='_blank' href={item.url}>
                    {item.entry_id}
                  </a>
                </td>
                <td className='py-2 px-4 text-center'>{item.chief}</td>
                <td className='py-2 px-4 text-center'>{item.created}</td>
                <td className='py-2 px-4 text-center'>{item.total_area}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className=' mt-4 flex overflow-auto'>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
            <button
              key={pageNumber}
              className={`mx-1 px-3 py-1 rounded-lg focus:outline-none ${
                pageNumber === currentPage ? 'bg-uiGreen text-white' : 'bg-gray-200 text-gray-600'
              }`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
        </div>
        <p className='mt-3'>* Scroll horiontally on buttons to see more pages</p>
      </div>
    </div>
  );
}

export default Table;
