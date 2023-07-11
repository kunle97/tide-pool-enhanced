import { useState, useEffect } from 'react';
import { makeid, calculateTotalArea, numberWithCommas } from '@/helpers/util';
import { Link } from 'react-router-dom';
import { Cruise, DataTableProps } from '@/types';
import { apiClient } from '@/api/apiClient';

const DataTable = (props: DataTableProps) => {
  let [cruises, setCruises] = useState<Cruise[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  async function fetchCruises() {
    // Retrieve cruise data from GMRT API using the apiClient
    try {
      const data = await apiClient(props.url, { method: 'GET' });
      setCruises(data);
    } catch (error) {
      console.error(error);
    }
  }

  let [totalArea, setTotalArea] = useState('');

  useEffect(() => {
    fetchCruises();
  }, []);

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

  const handleResultsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentPage(1);
    setItemsPerPage(Number(event.target.value));
  };

  const filteredData = cruises.filter(
    (item) => item.entry_id !== null && item.entry_id.toString().includes(searchTerm),
  );

  const sortedData = filteredData.sort((a, b) => {
    if (sortOrder === 'asc') {
      return new Date(a.created) - new Date(b.created);
    } else if (sortOrder === 'desc') {
      return new Date(b.created) - new Date(a.created);
    }
    setTotalArea(calculateTotalArea(currentItems).toString());
    return 0;
  });

  // Pagination calculation
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);
  const prev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const next = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  useEffect(() => {
    setTotalArea(calculateTotalArea(currentItems).toString());
  }, [currentItems]);
  return (
    <>
      <div className='container-fluid'>
        <h2 className='text-light '>{props.title}</h2>
        <p className='text-white mb-4'>
          Aggregate Total Area of Visible Cruises: {numberWithCommas(Number(totalArea))}
        </p>
        <div className='card shadow'>
          <div className='card-header py-3'>
            <p className='text-primary m-0 fw-bold text-white'></p>
          </div>
          <div className='card-body'>
            <div className='row'>
              <div className='col-md-6 text-nowrap'>
                <div id='dataTable_length' className='dataTables_length' aria-controls='dataTable'>
                  <label className='form-label text-white'>
                    Show&nbsp;
                    <select
                      className='d-inline-block form-select form-select-sm'
                      value={itemsPerPage}
                      onChange={handleResultsPerPageChange}
                    >
                      <option value={cruises.length} selected>
                        All
                      </option>
                      <option value={10}>10</option>
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
                      placeholder='Filter by Entry ID'
                      value={searchTerm}
                      onChange={handleSearch}
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className='table-responsive table mt-2' id='dataTable'>
              <table className='table my-0' id='dataTable'>
                <thead>
                  <tr className='text-white'>
                    <th className='py-2 px-4'>Entry ID</th>
                    <th className='py-2 px-4'>Chief</th>
                    <th className='py-2 px-4 cursor-pointer' onClick={handleSort}>
                      Created <span className='text-xs'>{sortOrder === 'asc' ? '▲' : '▼'}</span>
                    </th>
                    <th className='py-2 px-4'>Total Area</th>
                    <th className='py-2 px-4'></th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((item: Cruise) => (
                    <>
                      <tr key={item.entry_id + '_' + makeid(10)} className='hover:bg-gray-100'>
                        <td className='py-2 px-4 text-center'>
                          <Link className='text-uiGreen' target='_blank' to={item.url}>
                            {item.entry_id}
                          </Link>
                        </td>
                        <td className='py-2 px-4 text-center text-white'>{item.chief}</td>
                        <td className='py-2 px-4 text-center text-white'>{item.created}</td>
                        <td className='py-2 px-4 text-center text-white'>{item.total_area}</td>
                        <td className='py-2 px-4 text-center text-white'>
                          {item.center_x &&
                            item.center_y &&
                            Number(item.center_x) >= -180 &&
                            Number(item.center_x) <= 180 &&
                            Number(item.center_y) >= -90 &&
                            Number(item.center_y) <= 90 && (
                              <Link
                                to={`/map-viewer/${item.center_y}/${item.center_x}/${item.entry_id}`}
                                className='text-dashboardGreen'
                              >
                                View On Map
                              </Link>
                            )}
                        </td>
                      </tr>
                    </>
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
            <p className='m-0 text-white'>
              Page {currentPage} of {totalPages}
            </p>
            <div className='flex my-3 '>
              <div className='flex-1'>
                <button
                  onClick={prev}
                  className=' text-white bg-dashboardGreen rounded-md py-2 w-32'
                >
                  Back
                </button>
              </div>
              <div className=' flex overflow-auto w-4/5'>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                  <button
                    key={pageNumber}
                    className={`pagination-btn mx-1 px-3 py-1 rounded-lg focus:outline-none ${
                      pageNumber === currentPage
                        ? 'bg-uiGreen text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                    onClick={() => handlePageChange(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                ))}
              </div>
              <div className='flex-1'>
                <button
                  onClick={next}
                  className='float-right text-white bg-dashboardGreen rounded-md py-2 w-32'
                >
                  Next
                </button>
              </div>
            </div>

            <p className='mt-3 text-white'>* Scroll horiontally on buttons to see more pages</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataTable;
