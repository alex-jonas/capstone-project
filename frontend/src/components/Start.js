import styled from 'styled-components/macro'
import startscreenJpg from './../assets/startscreen.jpg'
import wandergoldSvg from './../assets/wandergold.svg'
import closeSvg from './../assets/close.svg'
import compassSvg from './../assets/compass.svg'

import { useState, useEffect } from 'react'
import Geocode from 'react-geocode'

export default function Start() {
  Geocode.setApiKey('AIzaSyDZJTQ_zk-aXNr5gH8Si82_AOHiUmVXDJg')
  Geocode.setLanguage('de')
  Geocode.setRegion('de')
  Geocode.enableDebug()

  Geocode.fromAddress('Eiffel Tower').then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location
      console.log('shabba', lat, lng)
    },
    (error) => {
      console.error(error)
    }
  )

  const [isSearchFocused, setSearchFocus] = useState(false)
  const [coordsToSearch, setCoordsToSearch] = useState({
    latitude: null,
    longitude: null,
    locationName: '',
  })
  const [suggestionList, setSuggestionList] = useState([])

  function getSuggestions(placeString) {
    const place = placeString.trim()
    if (place.length > 3) {
      const url = `https://alexjonas.de/gc/?p=${place}`
      fetch(url)
        .then((res) => res.json())
        .then(({ predictions }) => setSuggestionList(predictions))
        .catch((error) => console.error('Error:', error))
    } else {
      setSuggestionList([])
    }
  }

  return (
    <Wrapper>
      <LogoArea onClick={() => setSearchFocus(false)}>
        <img src={wandergoldSvg} alt="wandergold" />
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
              {navigator.geolocation && (
                <>
                  <li
                    className="geoLocator"
                    onClick={() => getGeolocationOfUser()}
                  >
                    Mein Standort
                  </li>

                  {suggestionList.map(({ description }) => (
                    <li>{description}</li>
                  ))}
                </>
              )}
            </ul>
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
          locationName: 'Nimm meinen Standort',
        })
      },
      function (error) {
        alert('Fehler')
      }
    )
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
  place-items: center;

  h1 {
    line-height: 1;
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
    background: white;
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
  background: #ffffff95;
  border-radius: 5px;
  width: 100%;
  max-height: 250px;
  overflow: scroll;
  overflow-x: hidden;
  font-size: 0.9em;

  ul {
    list-style: none;
    margin: 0;
    padding: 5px;
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
      background-color: white;
    }
  }
`
