export default function toggleBookmark(trackId, bookmarks, setBookmarks) {
  const bookmarkIndexInArray = bookmarks?.findIndex(
    (bookmark) => bookmark.id === trackId
  )
  const isBookmarked = bookmarkIndexInArray > -1

  setBookmarks(
    !isBookmarked
      ? [...bookmarks, { id: id, date: new Date() }]
      : [
          ...bookmarks.slice(0, bookmarkIndexInArray),
          ...bookmarks.slice(bookmarkIndexInArray + 1),
        ]
  )
}
