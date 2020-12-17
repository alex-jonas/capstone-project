export default function getFormattedDate(dateString) {
  const date = new Date(dateString)
  const formattedDay = date.getDate()
  const formattedMonth = date.getMonth() + 1
  const formattedDate =
    formattedDay + '.' + formattedMonth + '.' + date.getFullYear()

  return formattedDate
}
