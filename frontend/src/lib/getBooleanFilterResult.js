export default function getBooleanFilterResult(track, filterCriteria) {
  for (const key in filterCriteria) {
    if (!track[key]) {
      return false
    } else if (
      key === ('distance' || 'lengthM') &&
      track[key] > filterCriteria[key]
    ) {
      return false
    } else if (key === 'difficulty' && track[key] !== filterCriteria[key]) {
      return false
    } else if (
      key === ('certYear' || 'bookmarked' || 'roundtrip') &&
      Boolean(track[key]) !== filterCriteria[key]
    ) {
      return false
    }
  }
  return true
}
