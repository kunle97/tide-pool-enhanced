import { Map, Marker } from 'react-map-gl';
import DashboardContainer from './DashboardContainer';
import { useParams, useNavigate } from 'react-router';
import pin from '../../assets/pin.png';

const MapViewer = () => {
  const { lat, long, entry_id } = useParams();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <DashboardContainer>
      <div className='container'>
        <button className='btn normal-case text-dashboardGreen' onClick={goBack}>
          ← Go Back
        </button>
        <h2 className='text-white'>{entry_id} Survey Location</h2>
        <p className='text-white'>
          Longitude: {long} Latitude: {lat}
        </p>
        <Map
          mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
          initialViewState={{
            longitude: Number(long),
            latitude: Number(lat),
            zoom: 3,
          }}
          style={{ width: '100%', height: 600 }}
          mapStyle='mapbox://styles/mapbox/streets-v9'
        >
          <Marker longitude={Number(long)} latitude={Number(lat)} anchor='bottom'>
            <img src={pin} width={20} />
          </Marker>
        </Map>
      </div>
    </DashboardContainer>
  );
};

export default MapViewer;
