import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar navbar-light navbar-expand-md fixed-top' id='mainNav'>
      <div className='container'>
        <a className='navbar-brand' href='/'>
          Tide Pool
        </a>
        <button
          data-bs-toggle='collapse'
          className='navbar-toggler navbar-toggler-right'
          data-bs-target='#navbarResponsive'
          type='button'
          aria-controls='navbarResponsive'
          aria-expanded='false'
          aria-label='Toggle navigation'
          value='Menu'
        >
          <i className='fa fa-bars' />
        </button>
        <div className='collapse navbar-collapse' id='navbarResponsive'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item nav-link'>
              <a className='nav-link active' href='/home#header'>
                Home
              </a>
            </li>
            <li className='nav-item nav-link'>
              <a className='nav-link' href='#about'>
                About
              </a>
            </li>
            <li className='nav-item nav-link'>
              <a className='nav-link' href='#download'>
                Download
              </a>
            </li>
            <li className='nav-item nav-link'>
              <a className='nav-link' href='#contact'>
                contact
              </a>
            </li>
            <li className='nav-item nav-link'>
              <a className='nav-link' href='/cruises'>
                Survey Data
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
