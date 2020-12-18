export default function saveLastFilter(filterCriteria) {
  localStorage.setItem('filterSettings', JSON.stringify(filterCriteria))
}
