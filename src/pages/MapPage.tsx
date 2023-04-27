import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';
import './MapPage.css';

export interface MapPageProps {}

const MapPage = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'CHAVE AQUI',
        libraries: ['places']
    });

    const position = {
        lat: -27.590824,
        lng: -48.551262,
    };

    const label = {
        text: 'Posição Atual',
        className: 'map-mark'
    }

    if (!isLoaded) {
        return <div>Carregando...</div>;
    }

    return <div>
            {isLoaded ? (
                <div style={{ height: '100vh' }}>
                    <GoogleMap 
                        mapContainerStyle={{ width: '100%', height: '100%' }}
                        center={position}
                        zoom={15}>
                            <Marker position={position} label={label}/>
                        </GoogleMap>
                </div>) : 
                undefined}
        </div>;
};



export default MapPage;