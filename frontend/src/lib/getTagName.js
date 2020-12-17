export default function getTagName(id) {
  const index = id - 1
  const tagNames = [
    'Wald',
    'Wiesen',
    'Historisch interessant',
    'Einkehren',
    'Stadt',
    'Hügelig',
    'Alpin',
    'Seen/Flüsse',
    'Meer',
  ]

  return isNaN(index) || index < 0 || index > tagNames.length - 1
    ? null
    : tagNames[index]
}
