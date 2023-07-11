import { UNDER_REVIEW_CRUISES_API_URL } from '@/constants';
import DataTable from './DataTable';
import DashboardContainer from '../Navigation/DashboardContainer';

const UnderReviewCruises = () => {
  return (
    <DashboardContainer>
      <DataTable
        title='GMRT SONAR SURVEY Cruises Under Reveiw'
        url={UNDER_REVIEW_CRUISES_API_URL}
      />
    </DashboardContainer>
  );
};

export default UnderReviewCruises;
