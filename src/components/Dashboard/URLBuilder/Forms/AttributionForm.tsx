import { useEffect, useState } from 'react';
import DashboardContainer from '../../Navigation/DashboardContainer';
import { ATTRIBUTION_GRID_SERVER_URL } from '@/constants';
import { MERGED_CRUISES_API_URL } from '@/constants';
import { Cruise } from '@/types';
import { Link } from 'react-router-dom';

const AttributionForm = (props: any) => {
  const [fileFormat, setFileFormat] = useState('');
  const [intResolution, setIntResolution] = useState(256);
  const [attribution, setAttribution] = useState('');
  const [finalURL, setFinalURL] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const urlData = {
      north: props.cruise.north,
      west: props.cruise.west,
      east: props.cruise.east,
      south: props.cruise.south,
      format: fileFormat,
      resolution: intResolution,
      attributionType: attribution,
    };
    const url = new URL(ATTRIBUTION_GRID_SERVER_URL);
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

export default AttributionForm;
