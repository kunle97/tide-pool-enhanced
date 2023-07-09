import Navbar from './Navbar';

const Home = () => {
  return (
    <div className='container-fluid '>
      <Navbar />
      <div>
        <div id='header' className='parallax'>
          <div className='container custom-hero d-flex justify-content-center align-items-center parallax-content my-auto container-reset'>
            <div className='col-12 col-md-10 col-lg-8 d-flex justify-content-center flex-column'>
              <h1 className='brand-heading'>Tide Pool</h1>
              <p className='intro-text my-2'>
                Providing the most accurate research ship sonar and survey data since 1982. Learn
                more about our new and improve AI powered survey tool.
              </p>
              <a
                className='btn btn-link btn-circle mx-auto w-14'
                role='button'
                href='#about'
                title='To about section'
              >
                <i className='fa fa-angle-double-down animated' />
              </a>
            </div>
          </div>
          <div
            className='parallax-placeholder'
            style={{ backgroundImage: 'url("assets/img/sting-rays.jpg")' }}
          />
        </div>
        <section className='text-center content-section' id='about'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8 mx-auto'>
                <h2>Tide Pool</h2>
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

                <a href='/cruises'>
                  <button className='btn btn-primary btn-lg btn-default mx-3 my-4' type='button'>
                    Launch App
                  </button>
                </a>
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
              <button className='btn btn-primary btn-lg btn-default mx-3' type='button'>
                &nbsp;Download For Windows&nbsp;
                <i className='fab fa-windows' />
              </button>
              <button className='btn btn-primary btn-lg btn-default mx-3' type='button'>
                &nbsp;Download For Mac&nbsp;
                <i className='fab fa-apple' />
              </button>
            </div>
          </div>
        </section>
        <section className='text-center content-section' id='contact'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8 mx-auto'>
                <h2>Contact us</h2>
                <p className='my-3'>
                  Feel free to leave us a comment on the
                  <a href='#'>&nbsp;Grayscale template overview page</a>&nbsp;to give some feedback
                  about this theme!
                </p>
                <ul className='list-inline banner-social-buttons'>
                  <li className='list-inline-item'>
                    &nbsp;
                    <button className='btn btn-primary btn-lg btn-default' type='button'>
                      <i className='fa fa-youtube-play fa-fw' />
                      <span className='network-name'>YOutube</span>
                    </button>
                  </li>
                  <li className='list-inline-item'>
                    &nbsp;
                    <button className='btn btn-primary btn-lg btn-default' type='button'>
                      <i className='fa fa-twitter fa-fw' />
                      <span className='network-name'>&nbsp;Twitter</span>
                    </button>
                  </li>
                  <li className='list-inline-item'>
                    &nbsp;
                    <button className='btn btn-primary btn-lg btn-default' type='button'>
                      <i className='fa fa-github fa-fw' />
                      <span className='network-name'>&nbsp;github</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className='container text-center'>
            <p>Copyright ©&nbsp;Tide Pool 2023</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;