import { useState } from 'react';
import { post } from '@/api/apiClient';
import { useDispatch } from 'react-redux';
import { login } from '@/features/userSlice';
import { useNavigate } from 'react-router';

const Login = () => {
  const [email, setEmail] = useState('test@email.com');
  const [password, setPassword] = useState('password');
  const [errMsg, setErrMsg] = useState<string>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const data = await post(
        '/login',
        JSON.stringify({
          email: email,
          password: password,
        }),
        {
          method: 'POST',
        },
      );
      console.log('Handle Submit data', data);
      if (data.statusCode === 200 && email !== '' && password !== '') {
        //Check for response code before dispatch
        dispatch(
          login({
            name: 'Jane Doe',
            email: email,
            password: password,
            isAuthenticated: true,
            accessToken: data.accessToken,
          }),
        );
        setErrMsg('');
        //Redirect to dashboard
        navigate('/dashboard');
      } else {
        setErrMsg('Incorrect email or password');
      }
    } catch (error) {
      console.error(error);
      setErrMsg('Error logging you in');
    }
  };

  return (
    <div className='container-fluid bg-dashboardGrey  h-screen'>
      <div className='row justify-content-center'>
        <div className='col-md-6 col-lg-6 col-xl-10'>
          <div className='card shadow-lg o-hidden border-0 my-5'>
            <div className='card-body p-0'>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='p-5'>
                    <div className='text-center'>
                      <h3 className='text-light mb-4' style={{ color: 'rgb(255,255,255)' }}>
                        Login
                      </h3>
                    </div>
                    <form className='user' onSubmit={(e) => handleSubmit(e)}>
                      <div className='mb-3'>
                        <input
                          className='form-control form-control-user'
                          type='text'
                          id='exampleInputUsername'
                          aria-describedby='usernameHelp'
                          placeholder='Email'
                          name='email'
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className='mb-3'>
                        <input
                          className='form-control form-control-user'
                          type='password'
                          id='exampleInputPassword'
                          placeholder='Password'
                          name='password'
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className='mb-3'>
                        <div className='custom-control custom-checkbox small'>
                          <div className='form-check'>
                            <input
                              className='form-check-input custom-control-input'
                              type='checkbox'
                              id='formCheck-1'
                            />
                            <label
                              className='form-check-label custom-control-label'
                              htmlFor='formCheck-1'
                            >
                              Remember Me
                            </label>
                          </div>
                        </div>
                      </div>

                      {errMsg && <p className='mb-2 text-error w-full text-center'>{errMsg}</p>}

                      <button
                        className='btn btn-primary d-block btn-user w-100 ui-btn bg-dashboardGreen border-0 text-white'
                        type='submit'
                      >
                        Login
                      </button>
                    </form>
                    <div className='text-center'>
                      <a className='small text-dashboardGreen' href='/forgot-password'>
                        Forgot Password?
                      </a>
                    </div>
                    <div className='text-center'>
                      <a className='small text-dashboardGreen' href='/register'>
                        Create an Account!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
