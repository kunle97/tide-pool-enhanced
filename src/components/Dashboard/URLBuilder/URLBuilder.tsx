import { useEffect, useState } from 'react';
import DashboardContainer from '../DashboardContainer';
import {
  ATTRIBUTION_GRID_SERVER_URL,
  GRID_SERVER_URL,
  METADATA_GRID_SERVER_URL,
  URLS_GRID_SERVER_URL,
} from '@/constants';
import { MERGED_CRUISES_API_URL } from '@/constants';
import { Cruise } from '@/types';
import { apiClient } from '@/api/apiClient';
import { Link } from 'react-router-dom';
const URLBuilder = () => {
  //1. Select Cruise
  //2. Select Service (services/GridServer, services/GridServer/south, etc.)
  //3. Select options (format, resolution, mresolution, layer,etc/)
  //4. Build URL
  //5. Download/Return Result

  const [GMRTservice, setGMRTService] = useState(GRID_SERVER_URL);
  let [cruises, setCruises] = useState<Cruise[]>([]);
  const [currentCruise, setCurrentCruise] = useState<Cruise>();
  const [minLong, setMinLong] = useState(''); //west
  const [maxLong, setMaxLong] = useState(''); //east
  const [minLat, setMinLat] = useState(''); //south
  const [maxLat, setMaxLat] = useState(''); //north
  const [fileFormat, setFileFormat] = useState('');
  const [metadataFormat, setMetadataFormat] = useState('');
  const [layer, setLayer] = useState('');
  const [resolution, setResolution] = useState('');
  const [intResolution, setIntResolution] = useState(256);
  const [attribution, setAttribution] = useState('');
  const [showAttribution, setShowAttribution] = useState(false);
  const [showMetadataFormat, setShowMetadataFormat] = useState(false);
  const [showLayer, setShowShowLayer] = useState(true);
  const [showResuolution, setShowResolution] = useState(true);
  const [showIntResuolution, setShowIntResolution] = useState(false);
  const [finalURL, setFinalURL] = useState('');

  async function fetchCruises() {
    // Retrieve cruise data from GMRT API using the apiClient
    try {
      const data = await apiClient(MERGED_CRUISES_API_URL, { method: 'GET' });
      setCruises(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchCruises();
  }, []);
  const handleCruiseChange = (e: any) => {
    setCurrentCruise(cruises[e.target.value]);
    setFinalURL('');
    setMinLong(cruises[e.target.value].west);
    setMaxLong(cruises[e.target.value].east);
    setMinLat(cruises[e.target.value].south);
    setMaxLat(cruises[e.target.value].north);
  };

  const handleServiceChange = (e: any) => {
    const currentService = e.target.value;
    setFinalURL('');
    setGMRTService(currentService);
    if (currentService === GRID_SERVER_URL) {
      setShowShowLayer(true);
      setShowResolution(true);
      setShowAttribution(false);
      setShowMetadataFormat(false);
      setShowIntResolution(false);
      setAttribution('');
      setMetadataFormat('');
      setIntResolution(0);
    } else if (currentService === METADATA_GRID_SERVER_URL) {
      setShowMetadataFormat(true);
      setShowAttribution(false);
      setShowShowLayer(false);
      setShowIntResolution(false);
      setAttribution('');
      setLayer('');
      setIntResolution(0);
    } else if (currentService === URLS_GRID_SERVER_URL) {
      setShowMetadataFormat(true);
      setShowIntResolution(true);
      setShowShowLayer(false);
      setShowAttribution(false);
      setShowResolution(false);
      setLayer('');
      setAttribution('');
      setResolution('');
    } else if (currentService === ATTRIBUTION_GRID_SERVER_URL) {
      setShowAttribution(true);
      setShowResolution(true);
      setShowMetadataFormat(false);
      setShowShowLayer(false);
      setShowIntResolution(false);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const urlData = {
      north: maxLat,
      west: minLong,
      east: maxLong,
      south: minLat,
      format: fileFormat,
      resolution: resolution !== '' ? resolution : intResolution,
      layer: layer,
      mformat: metadataFormat,
      attributionType: attribution,
    };
    const url = new URL(GMRTservice);
    url.search = new URLSearchParams(urlData).toString();
    setFinalURL(url.href);
    console.log(' URL Built: ', finalURL);
  };

  return (
    <DashboardContainer>
      <div className='container'>
        <h2 className='text-white'>GMRT Grid Server</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className='form-group mb-3'>
            <label className='text-white'>
              Select a Survey Ship (
              <Link className='text-dashboardGreen' to='/merged-cruises'>
                View Ship Data
              </Link>
              )
            </label>
            <select onChange={handleCruiseChange} className='form-select'>
              <option value='' selected disabled>
                Select One
              </option>
              {cruises.map((item, index) => {
                return <option value={index}>{item.entry_id}</option>;
              })}
            </select>
          </div>
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
              <option value={URLS_GRID_SERVER_URL}>Large Grid (May take longer to download)</option>
              <option value={ATTRIBUTION_GRID_SERVER_URL}>Attribution</option>
            </select>
          </div>
          <div className='form-group mb-3'>
            <label className='text-white'>File Format</label>
            <select
              className='form-select'
              value={fileFormat}
              onChange={(e) => setFileFormat(e.target.value)}
            >
              <option value='' selected disabled>
                Select One
              </option>
              <option value='netcdf'>netcdf (Default)</option>
              <option value='coards'>coards</option>
              <option value='esriascii'>esriascii</option>
              <option value='geotiff'>geotiff</option>
            </select>
          </div>

          {showMetadataFormat && (
            <div className='form-group mb-3'>
              <label className='text-white'>Metadata Format</label>
              <select
                className='form-select'
                value={metadataFormat}
                onChange={(e) => setMetadataFormat(e.target.value)}
              >
                <option value='' selected disabled>
                  Select One
                </option>
                <option value='json'>json </option>
                <option value='xml'>XML</option>
              </select>
            </div>
          )}

          {showLayer && (
            <div className='form-group mb-3'>
              <label className='text-white'>Layer</label>
              <select
                className='form-select'
                value={layer}
                onChange={(e) => setLayer(e.target.value)}
              >
                <option value='' selected disabled>
                  Select One
                </option>
                <option value='topo'>Topo</option>
                <option value='topo-mask'>Topo-Mask</option>
              </select>
            </div>
          )}

          {showAttribution && (
            <div className='form-group mb-3'>
              <label className='text-white'>Attribution Type</label>
              <select
                // value={attribution}
                onChange={(e) => setAttribution(e.target.value)}
                className='form-select'
              >
                <option value='' selected disabled>
                  Select One
                </option>
                <option value=''>Default</option>
                <option value='grids'>Grids</option>
                <option value='cruises'>Cruises</option>
                <option value='files'>Files</option>
              </select>
            </div>
          )}
          {showResuolution && (
            <div className='form-group mb-3'>
              <label className='text-white'>Resolution</label>
              <select
                value={resolution}
                onChange={(e) => setResolution(e.target.value)}
                className='form-select'
              >
                <option value='' selected disabled>
                  Select One
                </option>
                <option value='low'> Low (Default)</option>
                <option value='med'>Medium</option>
                <option value='high'>High</option>
                <option value='max'>Max</option>
              </select>
            </div>
          )}
          {showIntResuolution && (
            <div className='form-group mb-3'>
              <label className='text-white'>
                Resolution (Enter an Integer Less than or equal to 1024)
              </label>
              <input
                value={intResolution}
                onChange={(e) => setIntResolution(Number(e.target.value))}
                className='form-control'
                max={1024}
              />
            </div>
          )}
          <button className='btn bg-dashboardGreen text-white' type='submit'>
            Generate File
          </button>
          {finalURL && (
            <Link className='text-dashboardGreen block mt-3' to={finalURL} target='_blank'>
              Click to View/Download
            </Link>
          )}
        </form>
      </div>
    </DashboardContainer>
  );
};

export default URLBuilder;
