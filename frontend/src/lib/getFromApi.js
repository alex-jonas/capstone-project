import axios from 'axios'

export default function getFromApi(apiRessource) {
  const baseUrlBackend = process.env.REACT_APP_BASE_URL_BACKEND
  const fetchUrl = baseUrlBackend + apiRessource
  return axios(fetchUrl)
}
