export default function getBooleanFilterResult(track, filterCriteria) {
  for (const filterProperty in filterCriteria) {
    if (!track[filterProperty]) {
      return false
    } else if (
      filterProperty === 'distance' &&
      track[filterProperty] > filterCriteria[filterProperty]
    ) {
      return false
    } else if (
      filterProperty === 'lengthM' &&
      track[filterProperty] > filterCriteria[filterProperty]
    ) {
      return false
    } else if (
      filterProperty === 'difficulty' &&
      track[filterProperty] !== filterCriteria[filterProperty]
    ) {
      return false
    } else if (
      filterProperty === ('certYear' || 'bookmarked' || 'roundtrip') &&
      Boolean(track[filterProperty]) !== filterCriteria[filterProperty]
    ) {
      return false
    }
  }
  return true
}
