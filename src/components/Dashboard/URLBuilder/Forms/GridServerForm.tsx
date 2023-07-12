import { useEffect, useState } from 'react';
import DashboardContainer from '../../Navigation/DashboardContainer';
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
const GridServerForm = (props: any) => {
  const [fileFormat, setFileFormat] = useState('');
  const [layer, setLayer] = useState('');
  const [resolution, setResolution] = useState('');
  const [finalURL, setFinalURL] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const urlData = {
      north: props.cruise.north,
      west: props.cruise.west,
      east: props.cruise.east,
      south: props.cruise.south,
      format: fileFormat,
      resolution: resolution,
      layer: layer,
    };
    const url = new URL(GRID_SERVER_URL);
    url.search = new URLSearchParams(urlData).toString();
    setFinalURL(url.href);
    console.log(' URL Built: ', finalURL);
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
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

        <div className='form-group mb-3'>
          <label className='text-white'>Layer</label>
          <select className='form-select' value={layer} onChange={(e) => setLayer(e.target.value)}>
            <option value='' selected disabled>
              Select One
            </option>
            <option value='topo'>Topo</option>
            <option value='topo-mask'>Topo-Mask</option>
          </select>
        </div>

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

        <button className='btn bg-dashboardGreen text-white' type='submit'>
          Generate File
        </button>
        {finalURL && (
          <Link className='text-dashboardGreen block mt-3' to={finalURL} target='_blank'>
            Click to View/Download
          </Link>
        )}
      </form>
    </>
  );
};

export default GridServerForm;
