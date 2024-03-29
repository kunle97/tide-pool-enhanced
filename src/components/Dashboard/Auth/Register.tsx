import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='container-fluid bg-dashboardGrey h-screen overflow-auto'>
      <div className='card shadow-lg o-hidden border-0 my-5'>
        <div className='card-body p-0'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='p-5'>
                <div className='text-center'>
                  <h4 className='text-light mb-4'>Create an Account</h4>
                </div>
                <form className='user'>
                  <div className='row mb-3'>
                    <div className='col-sm-6 mb-3 mb-sm-0'>
                      <input
                        className='form-control form-control-user'
                        type='text'
                        id='exampleFirstName'
                        placeholder='First Name'
                        name='first_name'
                      />
                    </div>
                    <div className='col-sm-6'>
                      <input
                        className='form-control form-control-user'
                        type='text'
                        id='exampleLastName'
                        placeholder='Last Name'
                        name='last_name'
                      />
                    </div>
                  </div>
                  <div className='mb-3'>
                    <input
                      className='form-control form-control-user'
                      type='email'
                      id='exampleInputEmail'
                      aria-describedby='emailHelp'
                      placeholder='Email Address'
                      name='email'
                    />
                  </div>
                  <div className='row mb-3'>
                    <div className='col-sm-6 mb-3 mb-sm-0'>
                      <input
                        className='form-control form-control-user'
                        type='password'
                        id='examplePasswordInput'
                        placeholder='Password'
                        name='password'
                      />
                    </div>
                    <div className='col-sm-6'>
                      <input
                        className='form-control form-control-user'
                        type='password'
                        id='exampleRepeatPasswordInput'
                        placeholder='Repeat Password'
                        name='password_repeat'
                      />
                    </div>
                  </div>
                  <button
                    className='btn btn-primary d-block btn-user w-100 border-0 bg-dashboardGreen'
                    type='submit'
                  >
                    Register Account
                  </button>
                </form>
                <div className='text-center'>
                  <Link className='small text-dashboardGreen' to='#'>
                    Forgot Password?
                  </Link>
                </div>
                <div className='text-center'>
                  <Link className='small text-dashboardGreen' to='/login'>
                    Already have an account? Login!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
