import { useEffect, useState } from 'react';
import useWindowDimensions from '@/hooks/useWindowDimentions';
import { Link } from 'react-router-dom';

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
        <Link className='navbar-brand' to='/'>
          Tide Pool
        </Link>
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
            <li className='nav-item nav-link mt-2'>
              <a className='nav-link active' href='#'>
                Home
              </a>
            </li>
            <li className='nav-item nav-link mt-2'>
              <a className='nav-link' href='#about'>
                About
              </a>
            </li>
            <li className='nav-item nav-link mt-2'>
              <a className='nav-link' href='#download'>
                Download
              </a>
            </li>
            <li className='nav-item nav-link mt-2'>
              <a className='nav-link' href='#contact'>
                Contact
              </a>
            </li>
            <li className='nav-item nav-link'>
              <Link className='nav-link' to='/login'>
                <button
                  className='btn btn-primary btn-lg btn-default mx-1 text-sm border-0 bg-dashboardGreen text-white'
                  type='button'
                >
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
