import { MERGED_CRUISES_API_URL } from '@/constants';
import DataTable from './DataTable';
import DashboardContainer from '../DashboardContainer';

const MergedCruises = () => {
  return (
    <DashboardContainer>
      <DataTable title='GMRT SONAR SURVEYS (MERGED CRUISES)' url={MERGED_CRUISES_API_URL} />
    </DashboardContainer>
  );
};

export default MergedCruises;
