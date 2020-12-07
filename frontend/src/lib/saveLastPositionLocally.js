export default function saveLastPositionLocally(coords) {
  localStorage.setItem('lastSearchedPosition', JSON.stringify(coords))
}
