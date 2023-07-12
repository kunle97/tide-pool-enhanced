import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '@/features/userSlice';
import { useNavigate } from 'react-router';
import avatar from '../../../assets/avatar1.jpeg';
const DashboardNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <nav
      className='navbar navbar-light navbar-expand shadow mb-4 topbar static-top bg-dashboardGrey'
      style={{
        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23) !important',
      }}
    >
      <div className='container-fluid'>
        <button
          className='btn btn-link d-md-none rounded-circle me-3'
          id='sidebarToggleTop'
          type='button'
        >
          <i className='fas fa-bars text-dashboardGreen' />
        </button>
        <form className='d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search'>
          <div className='input-group'>
            <input
              className='bg-light form-control border-0 small'
              type='text'
              placeholder='Search for ...'
            />
            <button className='btn btn-primary py-0 bg-dashboardGreen border-none' type='button'>
              <i className='fas fa-search' />
            </button>
          </div>
        </form>
        <ul className='navbar-nav flex-nowrap ms-auto'>
          <li className='nav-item dropdown d-sm-none no-arrow'>
            <a
              className='dropdown-toggle nav-link'
              aria-expanded='false'
              data-bs-toggle='dropdown'
              href='#'
            >
              <i className='fas fa-search' />
            </a>
            <div
              className='dropdown-menu dropdown-menu-end p-3 animated--grow-in'
              aria-labelledby='searchDropdown'
            >
              <form className='me-auto navbar-search w-100'>
                <div className='input-group'>
                  <input
                    className='bg-light form-control border-0 small'
                    type='text'
                    placeholder='Search for ...'
                  />
                  <div className='input-group-append'>
                    <button className='btn btn-primary py-0' type='button'>
                      <i className='fas fa-search' />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>

          <li className='nav-item dropdown no-arrow'>
            <div className='nav-item dropdown no-arrow'>
              <a
                className='dropdown-toggle nav-link'
                aria-expanded='false'
                data-bs-toggle='dropdown'
                href='#'
              >
                <span className='d-none d-lg-inline me-2 text-white small'>Jane Doe</span>
                <img className='border rounded-circle img-profile' src={avatar} />
              </a>
              <div className='dropdown-menu shadow dropdown-menu-end animated--grow-in'>
                <a className='dropdown-item active:bg-dashboardGreen' href='#'>
                  <i className='fas fa-user fa-sm fa-fw me-2 text-gray-400' />
                  &nbsp;Account Settings
                </a>
                <div className='dropdown-divider' />
                <a className='dropdown-item active:bg-dashboardGreen' href='#'>
                  <i className='fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400' />
                  <button
                    type='button'
                    onClick={(e) => handleLogout(e)}
                    className='btn text-sm normal-case w-full px-0'
                  >
                    Logout
                  </button>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
