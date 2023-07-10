import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div className='container-fluid p-0'>
      <Navbar />
      <div>
        <div id='header' className='parallax'>
          <div className='container custom-hero d-flex justify-content-center align-items-center parallax-content my-auto container-reset'>
            <div className='col-12 col-md-10 col-lg-8 d-flex justify-content-center flex-column'>
              <h1 className='brand-heading'>Tide Pool</h1>
              <p className='intro-text my-3'>
                Providing the most accurate research ship sonar and survey data since 2002. Learn
                more about our new and improve survey tool.
              </p>
              <a
                className='btn btn-link btn-circle mx-auto '
                role='button'
                href='#about'
                title='To about section'
              >
                <button
                  className='btn btn-primary btn-lg btn-default mx-3 border-0 text-sm bg-dashboardGreen'
                  type='button'
                >
                  Explore
                </button>
              </a>
            </div>
          </div>
          <div
            className='parallax-placeholder'
            style={{ backgroundImage: 'url("assets/img/sting-rays.jpg")' }}
          />
        </div>
        <section className='text-center content-section bg-black text-white' id='about'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8 mx-auto'>
                <h2>About</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis orci
                  blandit nisl vestibulum, ut ultricies massa pulvinar. Curabitur auctor quam nibh,
                  a euismod lacus tincidunt ut. Aliquam ac urna neque. Donec pellentesque vel ex ac
                  pharetra. Sed porta dolor ut velit rutrum vestibulum. Cras molestie lorem nec ante
                  ullamcorper lobortis. Nullam accumsan urna a metus ornare lacinia. Suspendisse
                  potenti. Morbi scelerisque, eros eget sagittis tempus, turpis arcu elementum mi,
                  eu tristique metus justo ac velit. Mauris pellentesque ante sapien, egestas semper
                  augue fringilla sed. Morbi eget porttitor velit.
                </p>

                <Link to='/login'>
                  <button
                    className='btn btn-primary btn-lg btn-default mx-3 my-4  border-0 text-sm bg-dashboardGreen'
                    type='button'
                  >
                    Launch App
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          className='text-center download-section content-section'
          id='download'
          style={{
            background:
              'linear-gradient(rgba(0, 0, 0, 0.63), rgba(0, 0, 0, 0.3)), url("assets/img/coral_reef.jpg")',
            backgroundSize: 'auto, cover',
          }}
        >
          <div className='container'>
            <div className='col-lg-8 mx-auto'>
              <h2>Desktop app</h2>
              <p className='my-2'>You can download the Tide Pool desktop app for free.</p>
              <button
                className='btn btn-primary btn-lg btn-default mx-3 border-0 text-sm bg-dashboardGreen'
                type='button'
              >
                &nbsp;Download For Windows&nbsp;
                <i className='fab fa-windows' />
              </button>
              <button
                className='btn btn-primary btn-lg btn-default mx-3 border-0 text-sm bg-dashboardGreen'
                type='button'
              >
                &nbsp;Download For Mac&nbsp;
                <i className='fab fa-apple' />
              </button>
            </div>
          </div>
        </section>
        <section className='text-center content-section bg-black text-white' id='contact'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8 mx-auto'>
                <h2>Contact us</h2>
                <p className='my-3'>
                  Feel free to visit our social media or GitHub repo to see what we are working on
                  next!
                </p>
                <ul className='list-inline banner-social-buttons'>
                  <li className='list-inline-item'>
                    &nbsp;
                    <button
                      className='btn btn-primary btn-lg btn-default border-0 text-sm bg-dashboardGreen'
                      type='button'
                    >
                      <i className='fa fa-youtube-play fa-fw' />
                      <span className='network-name'>Youtube</span>
                    </button>
                  </li>
                  <li className='list-inline-item'>
                    &nbsp;
                    <button
                      className='btn btn-primary btn-lg btn-default border-0 text-sm bg-dashboardGreen'
                      type='button'
                    >
                      <i className='fa fa-twitter fa-fw' />
                      <span className='network-name'>&nbsp;Twitter</span>
                    </button>
                  </li>
                  <li className='list-inline-item'>
                    &nbsp;
                    <button
                      className='btn btn-primary btn-lg btn-default border-0 text-sm bg-dashboardGreen'
                      type='button'
                    >
                      <i className='fa fa-github fa-fw' />
                      <span className='network-name'>&nbsp;github</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <footer className='bg-black text-white'>
          <div className='container text-center '>
            <p>Copyright ©&nbsp;Tide Pool 2023</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
