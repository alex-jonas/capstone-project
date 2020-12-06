export default function getDifficultyName(id) {
  const levels = ['leicht', 'mittelschwer', 'schwer']
  return levels[id - 1]
}
