import Navbar from './Navbar';

const Home = () => {
  return (
    <div className='container-fluid '>
      <Navbar />
      <div>
        <div id='header' className='parallax'>
          <div
            className='container d-flex justify-content-center align-items-center parallax-content my-auto'
            style={{ height: '100vh' }}
          >
            <div className='col-12 col-md-10 col-lg-8 d-flex justify-content-center flex-column'>
              <h1 className='brand-heading'>Tide Pool</h1>
              <p className='intro-text my-2'>
                Providing the most accurate research ship sonar and survey data since 1982. Learn
                more about our new and improve AI powered survey tool.
              </p>
              <a
                className='btn btn-link btn-circle mx-auto'
                role='button'
                href='#about'
                style={{ width: '55px' }}
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
                  Grayscale is a free Bootstrap theme. It can be yours right now, simply download
                  the template on&nbsp;<a href='#'>the preview page</a>. The theme is open source,
                  and you can use it for any purpose, personal or commercial.
                </p>
                <p>
                  This theme features stock photos by&nbsp;<a href='#'>Gratisography</a>&nbsp;along
                  with a custom Google Maps skin courtesy of&nbsp;<a href='#'>Snazzy Maps</a>.
                </p>
                <p>
                  Grayscale includes full HTML, CSS, and custom JavaScript files along with SASS and
                  LESS files for easy customization!
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
              <p>You can download the Tide Pool desktop app for free.</p>
              <button className='btn btn-primary btn-lg mx-3 ui-btn' type='button'>
                &nbsp;download For Windows&nbsp;
                <i className='fab fa-windows' />
              </button>
              <button className='btn btn-primary btn-lg btn-default mx-3' type='button'>
                &nbsp;download For Mac&nbsp;
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
                <p>
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
