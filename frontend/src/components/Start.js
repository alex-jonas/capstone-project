import styled from 'styled-components/macro'
import startscreenJpg from './../assets/startscreen.jpg'
import wandergoldSvg from './../assets/wandergold.svg'
import closeSvg from './../assets/close.svg'
import compassSvg from './../assets/compass.svg'
import { useState, useEffect } from 'react'

export default function Start() {
  const [isSearchFocused, setSearchFocus] = useState(false)
  const [coordsToSearch, setCoordsToSearch] = useState({
    latitude: null,
    longitude: null,
    locationName: '',
    googlePlaceId: '',
  })
  const [suggestionList, setSuggestionList] = useState([])

  useEffect(() => console.log(coordsToSearch))

  return (
    <Wrapper>
      <LogoArea onClick={() => setSearchFocus(false)}>
        <h1>
          <img src={wandergoldSvg} alt="wandergold" />
        </h1>
      </LogoArea>
      <LocationSearch>
        <SearchField className={isSearchFocused && 'active'}>
          {isSearchFocused && (
            <button type="button" onClick={() => setSearchFocus(false)}>
              <img src={closeSvg} alt="close" />
            </button>
          )}
          <input
            onChange={(event) => getSuggestions(event.target.value)}
            onFocus={() => setSearchFocus(true)}
            type="text"
            placeholder={!isSearchFocused && 'wo willst du hin?'}
          ></input>
        </SearchField>
        {isSearchFocused && (
          <SearchSuggestions>
            <ul>
              <>
                {navigator.geolocation && (
                  <li
                    className="geoLocator"
                    onClick={() => getGeolocationOfUser()}
                  >
                    Mein Standort
                  </li>
                )}

                {suggestionList.map(({ description, place_id }) => (
                  <li
                    onClick={() =>
                      setCoordsToSearch({
                        latitude: 51.111,
                        longitude: 12.22323,
                        description: description,
                        googlePlaceId: place_id,
                      })
                    }
                    key={place_id}
                  >
                    {description}
                  </li>
                ))}
              </>
            </ul>
            <button>Tour finden</button>
          </SearchSuggestions>
        )}
      </LocationSearch>
    </Wrapper>
  )

  function getGeolocationOfUser() {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setCoordsToSearch({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          locationName: 'Mein Standort',
        })
      },
      function (error) {
        console.error(error)
      }
    )
  }

  function getSuggestions(placeString) {
    const place = placeString.trim()
    if (place.length > 3) {
      const url = `http://wandergold.local/ac/${place}`
      fetch(url)
        .then((res) => res.json())
        .then(({ predictions }) => setSuggestionList(predictions.slice(0, 4)))
        .catch((error) => console.error('Error:', error))
    } else {
      setSuggestionList([])
    }
  }
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 60% 40%;
  background-image: url(${startscreenJpg});
  background-size: auto 100vh;
  background-position-x: center;
  background-repeat: no-repeat;
  padding: 5%;
  padding-top: 0;
`

const LogoArea = styled.div`
  display: grid;
  place-items: center stretch;

  h1 {
    line-height: 1;
    text-align: center;
  }

  img {
    width: 90%;
  }
`

const LocationSearch = styled.form`
  display: grid;
  grid-template-rows: 45px auto;
  place-items: start center;
  gap: 10px;
  text-align: left;

  .active {
    font-size: 1.2em;
    width: 100%;
    background: #fff;
  }
`

const SearchField = styled.div`
  width: 50%;
  min-width: 150px;
  padding: 10px;
  border-radius: 20px;
  background-color: #ffffff75;
  box-shadow: 0px 0px 25px 0px var(--primary-brown);
  transition: width 0.5s ease-in-out, background-color 0.5s ease-in-out,
    font-size 0.5s ease-in-out, transform 0.5s ease-in-out;
  font-size: 0.8em;
  line-height: 1;
  white-space: nowrap;
  button {
    background: transparent;
    border: none;
    padding: 0;

    img {
      margin-right: 5px;
      width: 20px;
      height: 20px;
    }
  }

  input {
    font-size: 1em;
    outline: none;
    border: none;
    background: transparent;
    width: calc(90%-20px);
  }
`

const SearchSuggestions = styled.div`
  background: #ffffff97;
  border-radius: 5px;
  width: 100%;
  max-height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  font-size: 0.9em;
  padding: 5px;

  button {
    width: 100%;
    background: var(--primary-green);
    border: none;
    border-radius: 5px;
    font-size: 1em;
    color: white;
    padding: 5px;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    overflow-x: hidden;

    li {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow-x: hidden;
      padding: 8px;
      border-radius: 5px;
    }

    li.geoLocator {
      border-bottom: 1px solid grey;
      background-image: url(${compassSvg});
      background-repeat: no-repeat;
      background-size: 15px;
      background-position-y: center;
      background-position-x: 2px;
      padding-left: 25px;
    }

    li:hover {
      background-color: #fff;
    }
  }
`
