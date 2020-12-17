export default function storeBookmarks(bookmarks) {
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
}
