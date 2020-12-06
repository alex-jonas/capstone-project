export default function getDifficultyLevelName(id) {
  const levels = ['leicht', 'mittelschwer', 'schwer']
  return levels[id - 1]
}
