export default function getTagName(id) {
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
  return tagNames[id - 1]
}
