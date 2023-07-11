import Sidebar from './Sidebar';
import DashboardNavbar from './DashboardNavbar';
import Footer from './Footer';
const DashboardContainer = ({ children }: any) => {
  return (
    <div id='wrapper'>
      <Sidebar />
      <div className='d-flex flex-column' id='content-wrapper'>
        <div id='content' className='bg-dashboardGrey'>
          <DashboardNavbar />
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardContainer;
