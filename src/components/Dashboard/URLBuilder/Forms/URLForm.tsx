import { useState } from 'react';
import { URLS_GRID_SERVER_URL } from '@/constants';
import { Link } from 'react-router-dom';

const URLForm = (props: any) => {
  const [fileFormat, setFileFormat] = useState('');
  const [metadataFormat, setMetadataFormat] = useState('');
  const [intResolution, setIntResolution] = useState(256);
  const [finalURL, setFinalURL] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const urlData = {
      north: props.cruise.north,
      west: props.cruise.west,
      east: props.cruise.east,
      south: props.cruise.south,
      format: fileFormat,
      mformat: metadataFormat,
      resolution: intResolution,
    };

    const url = new URL(URLS_GRID_SERVER_URL);
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

export default URLForm;
