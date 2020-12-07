import axios from 'axios'

export default function getFromApi(apiRessource) {
  const baseUrl = `http://wandergold.local/${apiRessource}`
  return axios(baseUrl)
}
