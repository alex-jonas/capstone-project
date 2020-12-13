import getBookmarks from './getBookmarks'

export default function deleteFromBookmarks(trackId) {
  const currentBookmarks = getBookmarks()

  const removeIndex = currentBookmarks.indexOf(({ id }) => id === trackId)

  const newBookmarks =
    removeIndex > -1
      ? currentBookmarks.splice(removeIndex, 1)
      : currentBookmarks

  localStorage.setItem('bookmarks', JSON.stringify(newBookmarks))
}
