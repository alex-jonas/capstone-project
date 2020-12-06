export default function getHoursFromMinutes(minutes) {
  const hoursDecimal = minutes / 60
  const hoursInteger = Math.floor(hoursDecimal)
  const minutesDecimal = hoursDecimal - hoursInteger
  const minutesInteger = Math.round(minutesDecimal * 60)
  const minutesIntWithLeadingZero =
    (minutesInteger < 10 && '0') + minutesInteger
  return hoursInteger + (minutesInteger && ':' + minutesIntWithLeadingZero)
}
