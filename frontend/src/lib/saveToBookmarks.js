import getBookmarks from './getBookmarks'

export default function saveToBookmarks(trackId) {
  const currentBookmarks = getBookmarks()
  const isIdInBookmarks = Boolean(
    currentBookmarks.find(({ id }) => id === trackId)
  )
  const newBookmarks = isIdInBookmarks
    ? currentBookmarks
    : [...currentBookmarks, { id: trackId, date: new Date() }]

  localStorage.setItem('bookmarks', JSON.stringify(newBookmarks))
}
