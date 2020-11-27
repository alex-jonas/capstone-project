export default function getFromApi(searchedApi) {
  const apiList = [
    { key: 'track', url: 'http://wandergold.local/track' },
    { key: 'autocomplete', url: 'http://wandergold.local/ac' },
  ]
  const requestUrl = apiList.find(({ key }) => key === searchedApi).url
  return fetch(requestUrl).then((res) => res.json())
}
