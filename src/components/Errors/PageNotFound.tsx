import React from 'react';
import { useNavigate } from 'react-router';
const PageNotFound = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div className='container-fluid bg-dashboardGrey h-screen overflow-auto'>
        <div className='text-center mt-5'>
          <div className='error mx-auto ' data-text={404}>
            <p className='m-0 invisible text-white'>404</p>
          </div>
          <div>
            <p className='text-light mt-5'>Page Not Found</p>
            <p className='text-white mb-0'>It looks like you found a glitch in the matrix...</p>
            <button className='btn normal-case text-dashboardGreen' onClick={goBack}>
              ← Go Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
