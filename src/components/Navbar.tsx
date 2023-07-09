import React, { useEffect, useState } from 'react';
import { getWindowDimensions } from '@/helpers/util';
import useWindowDimensions from '@/hooks/useWindowDimentions';

const Navbar = () => {
  const { width } = useWindowDimensions();
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    if (width <= 768) {
      setCollapse(true);
    } else {
      setCollapse(false);
    }
  }, [width]);

  return (
    <nav className='navbar navbar-light navbar-expand-md fixed-top bg-black' id='mainNav'>
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
        <div className={`${collapse && 'collapse'} navbar-collapse visible`} id='navbarResponsive'>
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
              {/*               
              <a className='nav-link' href='/cruises'>
                Survey Data
              </a> */}
              <a className='nav-link' href='/cruises'>
                <button className='btn btn-primary btn-lg btn-default mx-1 text-sm' type='button'>
                  Login
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
