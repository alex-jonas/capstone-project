import getFromApi from './getFromApi'
import saveLastPositionLocally from './saveLastPositionLocally'

export default function updateCenter(centerCoords) {
  saveLastPositionLocally(centerCoords)
  const path = `track/${centerCoords.lat},${centerCoords.lng}`
  return getFromApi(path)
}
