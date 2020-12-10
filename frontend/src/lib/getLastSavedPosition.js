export default function getLastSavedPosition() {
  return JSON.parse(localStorage.getItem('lastSearchedPosition'))
}
