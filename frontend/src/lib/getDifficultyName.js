export default function getDifficultyName(id) {
  const levels = ['leicht', 'mittel', 'hoch']
  return levels[id - 1]
}
