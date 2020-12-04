import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api'
import { useRef } from 'react'

export default function Map({ centerCoords, handleCenterChanged }) {
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY
  const containerStyle = {
    width: '100%',
    height: '50vh',
  }

  const options = {
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    clickable: true,
    draggable: true,
    editable: true,
    visible: true,
    radius: 30000,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeControl: false,
    mapTypeId: 'terrain',
    paths: [
      { lat: 37.772, lng: -122.214 },
      { lat: 21.291, lng: -157.821 },
      { lat: -18.142, lng: 178.431 },
      { lat: -27.467, lng: 153.027 },
    ],
    zIndex: 1,
  }
  const mapRef = useRef()
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
  })

  const map = (
    <GoogleMap
      ref={mapRef}
      onLoad={(map) => (mapRef.current = map)}
      mapContainerStyle={containerStyle}
      center={centerCoords}
      zoom={10}
      options={options}
      onDragEnd={() => {
        const { lat, lng } = mapRef.current.getCenter().toJSON()
        handleCenterChanged({ lat: +lat, lng: +lng })
      }}
      disableDefaultUI
    >
      {/*<KmlLayer url="http://alexjonas.de/capstone/3_Auf_der_Klosterrunde_von_Heimbach_final.kml" />*/}
      <Marker position={centerCoords} />
    </GoogleMap>
  )

  return isLoaded ? map : null
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
