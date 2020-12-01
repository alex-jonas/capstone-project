import { GoogleMap, LoadScript, Polyline } from '@react-google-maps/api'

export default function Map({ centerCoords }) {
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY

  const containerStyle = {
    width: '100%',
    height: '400px',
  }

  const options = {
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: true,
    visible: true,
    radius: 30000,
    paths: [
      { lat: 37.772, lng: -122.214 },
      { lat: 21.291, lng: -157.821 },
      { lat: -18.142, lng: 178.431 },
      { lat: -27.467, lng: 153.027 },
    ],
    zIndex: 1,
  }

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={centerCoords}
        zoom={10}
        mapTypeId="terrain"
        options={options}
        disableDefaultUI
      >
        {/* Child components, such as markers, info windows, etc.
         */}
      </GoogleMap>
    </LoadScript>
  )
}
/*

 <Polyline
          onLoad={onLoad}
          path={path}
          options={options}
        />

const onLoad = (polyline) => {
  console.log('polyline: ', polyline)
}

const path = [
  { lat: 37.772, lng: -122.214 },
  { lat: 21.291, lng: -157.821 },
  { lat: -18.142, lng: 178.431 },
  { lat: -27.467, lng: 153.027 },
]*/
