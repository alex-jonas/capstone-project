import {
  useLoadScript,
  GoogleMap,
  Marker,
  KmlLayer,
} from '@react-google-maps/api'
import { useRef } from 'react'

export default function Map({
  centerCoords,
  handleCenterChanged,
  tracks,
  singleMode,
  kmlFile,
}) {
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY
  const baseUrlKml = process.env.REACT_APP_BASE_URL_KML
  const containerStyle = {
    width: '100%',
    height: singleMode ? '100vh' : '50vh',
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
        !singleMode && handleCenterChanged({ lat: +lat, lng: +lng })
      }}
      disableDefaultUI
    >
      {singleMode && kmlFile && <KmlLayer url={baseUrlKml + kmlFile} />}
      <Marker position={centerCoords} />
      {!singleMode &&
        tracks.map(({ firstLat, firstLon }, index) => (
          <Marker key={index} position={{ lat: +firstLat, lng: +firstLon }} />
        ))}
    </GoogleMap>
  )
  console.log(mapRef)
  return isLoaded ? map : null
}
