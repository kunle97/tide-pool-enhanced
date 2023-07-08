import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

const API_URL = 'https://www.gmrt.org/services/GmrtCruises.php';


type Cruise = {
  entry_id: string;
  chief: string;
  created: string;
  total_area: string;
};

function Table() {
  let [cruises, setCruises] = useState<Cruise[]>([]);
  let [totalArea, setTotalArea] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const rerender = React.useReducer(() => ({}), {})[1];

  async function fetchCruises() {
    const response = await fetch(API_URL);
    const json = await response.json();
    console.log('f()', json);
    setCruises(json);
    console.log('fetched cruises', cruises);
  }

  useEffect(() => {
    fetchCruises();
  }, []);
  useEffect(() => {
    calculateTotalArea();
  }, [cruises]);

  const calculateTotalArea = () => {
    const areaSum = cruises.reduce(
      (sum, cruise) => sum + Number(Number.parseInt(cruise.total_area)),
      0,
    );
    setTotalArea(areaSum);
  };

  const data = [
    { entry_id: 1, chief: 'John Doe', created: '2023-01-01', total_area: 100 },
    { entry_id: 2, chief: 'Jane Smith', created: '2023-01-02', total_area: 150 },
    { entry_id: 3, chief: 'Alice Johnson', created: '2023-01-03', total_area: 200 },
    // Add more data as needed
  ];

  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = cruises.filter(
    (item) =>
      (item.entry_id !== null && item.entry_id.toString().includes(searchTerm)) ||
      (item.chief !== null && item.chief.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.created !== null && item.created.includes(searchTerm)) ||
      (item.total_area !== null && item.total_area.toString().includes(searchTerm)),
  );
  return (
    <div className='container'>
      <h1>GMRT Sonar Surveys/Cruises</h1>
      <p>Total Area of Visible Cruises: {totalArea}</p>
      {/* <BootstrapTable
        keyField="entry_id"
        data={cruises}
        columns={columns}
        // filter={filterFactory()}
        striped
        hover
        bootstrap4
      /> */}
      <div className='container mx-auto p-4'>
        <input
          type='text'
          placeholder='Search...'
          value={searchTerm}
          onChange={handleSearch}
          className='w-full p-2 mb-4 rounded-lg shadow-sm border-gray-300 focus:outline-none focus:ring focus:border-blue-300'
        />

        <table className='w-full bg-white divide-y divide-gray-200 shadow-sm rounded-lg overflow-hidden'>
          <thead className='bg-blue-500 text-white'>
            <tr>
              <th className='py-2 px-4 text-blue-500'>Entry ID</th>
              <th className='py-2 px-4 text-blue-500'>Chief</th>
              <th className='py-2 px-4 text-blue-500'>Created</th>
              <th className='py-2 px-4 text-blue-500'>Total Area</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            {filteredData.map((item, index) => (
              <tr key={`${item.entry_id}_${index}`} className='hover:bg-gray-100'>
                <td className='py-2 px-4'>{item.entry_id}</td>
                <td className='py-2 px-4'>{item.chief}</td>
                <td className='py-2 px-4'>{item.created}</td>
                <td className='py-2 px-4'>{item.total_area}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
