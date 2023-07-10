import React, { useState } from 'react';
import { makeid } from '@/helpers/util';

const DataTable = (props: any) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

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

  const filteredData = props.cruises.filter(
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
    <>
      <div className='row'>
        <div className='col-md-6 text-nowrap'>
          <div id='dataTable_length' className='dataTables_length' aria-controls='dataTable'>
            <label className='form-label'>
              Show&nbsp;
              <select
                className='d-inline-block form-select form-select-sm'
                value={itemsPerPage}
                onChange={handleResultsPerPageChange}
              >
                <option value={10} selected>
                  10
                </option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
            </label>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='text-md-end dataTables_filter' id='dataTable_filter'>
            <label className='form-label'>
              <input
                type='search'
                className='form-control form-control-sm'
                aria-controls='dataTable'
                placeholder='Search'
                value={searchTerm}
                onChange={handleSearch}
              />
            </label>
          </div>
        </div>
      </div>
      <div
        className='table-responsive table mt-2'
        id='dataTable'
        role='grid'
        aria-describedby='dataTable_info'
      >
        <table className='table my-0' id='dataTable'>
          <thead>
            <tr className='text-white'>
              <th className='py-2 px-4'>Entry ID</th>
              <th className='py-2 px-4'>Chief</th>
              <th className='py-2 px-4 cursor-pointer' onClick={handleSort}>
                Created <span className='text-xs'>{sortOrder === 'asc' ? '▲' : '▼'}</span>
              </th>
              <th className='py-2 px-4'>Total Area</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.entry_id + '_' + makeid(10)} className='hover:bg-gray-100'>
                <td className='py-2 px-4 text-center'>
                  <a className='text-uiGreen' target='_blank' href={item.url}>
                    {item.entry_id}
                  </a>
                </td>
                <td className='py-2 px-4 text-center text-white'>{item.chief}</td>
                <td className='py-2 px-4 text-center text-white'>{item.created}</td>
                <td className='py-2 px-4 text-center text-white'>{item.total_area}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className='text-white'>
              <th className='py-2 px-4'>Entry ID</th>
              <th className='py-2 px-4'>Chief</th>
              <th className='py-2 px-4 cursor-pointer' onClick={handleSort}>
                Created <span className='text-xs'>{sortOrder === 'asc' ? '▲' : '▼'}</span>
              </th>
              <th className='py-2 px-4'>Total Area</th>
            </tr>
          </tfoot>
        </table>
      </div>
      {/* Pagination */}
      <div className='mt-4 flex overflow-auto'>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            className={`pagination-btn mx-1 px-3 py-1 rounded-lg focus:outline-none ${
              pageNumber === currentPage ? 'bg-uiGreen text-white' : 'bg-gray-200 text-gray-600'
            }`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
      <p className='mt-3 text-white'>* Scroll horiontally on buttons to see more pages</p>
      {/* <div className='row'>
                  <div className='col-md-6 align-self-center'>
                    <p
                      className='text-light dataTables_info'
                      id='dataTable_info'
                      role='status'
                      aria-live='polite'
                    >
                      Showing 1 to 10 of 27
                    </p>
                  </div>
                  <div className='col-md-6'>
                    <nav className='d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers'>
                      <ul className='pagination'>
                        <li className='page-item disabled'>
                          <a className='page-link' aria-label='Previous' href='#'>
                            <span aria-hidden='true'>«</span>
                          </a>
                        </li>
                        <li className='page-item active'>
                          <a className='page-link' href='#'>
                            1
                          </a>
                        </li>
                        <li className='page-item'>
                          <a className='page-link' href='#'>
                            2
                          </a>
                        </li>
                        <li className='page-item'>
                          <a className='page-link' href='#'>
                            3
                          </a>
                        </li>
                        <li className='page-item'>
                          <a className='page-link' aria-label='Next' href='#'>
                            <span aria-hidden='true'>»</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div> */}
    </>
  );
};

export default DataTable;
