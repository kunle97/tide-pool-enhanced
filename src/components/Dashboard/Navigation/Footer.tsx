const Footer = () => {
  return (
    <footer className='bg-white sticky-footer'>
      <div className='container my-auto'>
        <div className='text-center my-auto copyright'>
          <span>© Tide Pool {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
