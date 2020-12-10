export default function getGeolocationOfUser(
  setFunction,
  additionalProperties = {}
) {
  navigator.geolocation.getCurrentPosition((position) => {
    setFunction({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      ...additionalProperties,
    })
  })
}
