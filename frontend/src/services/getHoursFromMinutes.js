export default function getHoursFromMinutes({ minutes, length }) {
  const walkingSpeed = 2 / 75
  const minutesAssumed = minutes ? minutes : Math.round(length * walkingSpeed)
  const hoursDecimal = minutesAssumed / 60
  const hoursInteger = Math.floor(hoursDecimal)
  const minutesDecimal = hoursDecimal - hoursInteger
  const minutesInteger = Math.round(minutesDecimal * 60)
  const minutesIntWithLeadingZero =
    (minutesInteger < 10 && '0') + minutesInteger
  return hoursInteger + (minutesInteger && ':' + minutesIntWithLeadingZero)
}
