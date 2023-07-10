import { REJECTED_CRUISES_API_URL } from '@/constants';
import DataTable from './DataTable';
import DashboardContainer from '../DashboardContainer';
const RejectedCruises = () => {
  return (
    <DashboardContainer>
      <DataTable title='Rejected Cruises' url={REJECTED_CRUISES_API_URL} />
    </DashboardContainer>
  );
};

export default RejectedCruises;
