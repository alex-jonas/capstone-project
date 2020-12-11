export default function getGeolocationOfUser(
  setLocationFn,
  additionalProperties
) {
  navigator.geolocation.getCurrentPosition((position) => {
    setLocationFn({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      ...additionalProperties,
    })
  })
}
