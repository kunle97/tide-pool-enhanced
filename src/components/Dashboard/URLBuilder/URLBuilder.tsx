import { useEffect, useState } from 'react';
import DashboardContainer from '../Navigation/DashboardContainer';
import {
  ATTRIBUTION_GRID_SERVER_URL,
  GRID_SERVER_URL,
  METADATA_GRID_SERVER_URL,
  URLS_GRID_SERVER_URL,
  MERGED_CRUISES_API_URL,
} from '@/constants';
import { Cruise } from '@/types';
import { apiClient } from '@/api/apiClient';
import { Link } from 'react-router-dom';
import AttributionForm from './Forms/AttributionForm';
import GridServerForm from './Forms/GridServerForm';
import MetadataForm from './Forms/MetadataForm';
import URLForm from './Forms/URLForm';

const URLBuilder = () => {
  //1. Select Cruise
  //2. Select Service (services/GridServer, services/GridServer/south, etc.)
  //3. Select options (format, resolution, mresolution, layer,etc/)
  //4. Build URL
  //5. Download/Return Result

  const [GMRTservice, setGMRTService] = useState(GRID_SERVER_URL);
  let [cruises, setCruises] = useState<Cruise[]>([]);
  const [currentCruise, setCurrentCruise] = useState<Cruise>();
  const [currentForm, setCurrentForm] = useState(<GridServerForm />);
  const [isLoading, setIsLoading] = useState(true);
  async function fetchCruises() {
    // Retrieve cruise data from GMRT API using the apiClient
    try {
      const data = await apiClient(MERGED_CRUISES_API_URL, { method: 'GET' });
      setCruises(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchCruises();
  }, []);
  const handleCruiseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const cruiseIndex = Number(e.target.value);
    setCurrentCruise(cruises[cruiseIndex]);
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const currentService = e.target.value;
    setGMRTService(currentService);
    if (currentService === GRID_SERVER_URL) {
      setCurrentForm(<GridServerForm cruise={currentCruise} />);
    } else if (currentService === METADATA_GRID_SERVER_URL) {
      setCurrentForm(<MetadataForm cruise={currentCruise} />);
    } else if (currentService === URLS_GRID_SERVER_URL) {
      setCurrentForm(<URLForm cruise={currentCruise} />);
    } else if (currentService === ATTRIBUTION_GRID_SERVER_URL) {
      setCurrentForm(<AttributionForm cruise={currentCruise} />);
    }
  };

  return (
    <DashboardContainer>
      <div className='container'>
        <h1 className='text-white'>URL Builder</h1>
        <div className='form-group mb-3'>
          <label className='text-white mb-1'>
            Select a Survey Ship (
            <Link className='text-dashboardGreen' to='/merged-cruises'>
              View Ship Data
            </Link>
            )
          </label>
          <select onChange={handleCruiseChange} className='form-select'>
            {isLoading ? (
              <option value='' selected disabled>
                Loading ships...
              </option>
            ) : (
              <>
                <option value='' selected disabled>
                  Select One
                </option>
                {cruises.map((item, index) => {
                  return <option value={index}>{item.entry_id}</option>;
                })}
              </>
            )}
          </select>
        </div>

        {currentCruise && (
          <>
            <div className='form-group mb-3'>
              <label className='text-white'>GMRT Service</label>
              <select className='form-select' value={GMRTservice} onChange={handleServiceChange}>
                <option value='' disabled>
                  Select One
                </option>
                <option value={GRID_SERVER_URL} selected>
                  GRD File (2GB max.)
                </option>
                <option value={METADATA_GRID_SERVER_URL}>Metadata</option>
                <option value={URLS_GRID_SERVER_URL}>
                  Large Grid (May take longer to download)
                </option>
                <option value={ATTRIBUTION_GRID_SERVER_URL}>Attribution</option>
              </select>
            </div>
            {currentForm}
          </>
        )}
      </div>
    </DashboardContainer>
  );
};

export default URLBuilder;
