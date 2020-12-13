const { default: getFromApi } = require('./getFromApi')

export default function getCoordsAndSearch(
  description,
  googlePlaceId,
  setFunction
) {
  const path = `geocode/${googlePlaceId}`
  getFromApi(path)
    .then((response) => response.data.results[0].geometry)
    .then((geometry) => {
      const searchObject = {
        locationName: description,
        googlePlaceId: googlePlaceId,
        latitude: geometry.location.lat,
        longitude: geometry.location.lng,
        isReadyToSearch: true,
      }
      setFunction(searchObject)
    })
}
