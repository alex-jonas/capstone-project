import getFromApi from './getFromApi'

export default function getAutocompleteSuggestions(placeString, setFunction) {
  const place = placeString.trim()
  if (place.length > 2) {
    const path = `autocomplete/${place}`
    getFromApi(path)
      .then((response) => response.data.predictions)
      .then((suggestions) =>
        suggestions.map(({ description, place_id }) => ({
          description: description,
          googlePlaceId: place_id,
        }))
      )
      .then((suggestions) => setFunction(suggestions.slice(0, 4)))
      .catch(() => setFunction([{ description: 'Service nicht verfügbar' }]))
  } else {
    setFunction([])
  }
}
