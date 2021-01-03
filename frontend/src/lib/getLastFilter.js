export default function getLastFilter() {
  return JSON.parse(localStorage.getItem('filterSettings'))
}
