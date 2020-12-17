export default function getBookmarks() {
  const savedBookmarks = JSON.parse(localStorage.getItem('bookmarks'))
  return savedBookmarks?.length > 0 ? savedBookmarks : []
}
