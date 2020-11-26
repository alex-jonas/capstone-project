import styled from 'styled-components/macro'
import startscreenJpg from './../assets/startscreen.jpg'
import wandergoldSvg from './../assets/wandergold.svg'
import { useState, useEffect } from 'react'

export default function Start() {
  const [isSearchFocused, setSearchFocus] = useState(false)
  const [coordsToSearch, setCoordsToSearch] = useState({
    latitude: null,
    longitude: null,
    locationName: '',
  })

  useEffect(() =>
    console.log(
      `https://www.google.com/maps/search/link+to+google/@${coordsToSearch.latitude},${coordsToSearch.longitude},14z`
    )
  )
  return (
    <Wrapper>
      <LogoHeading onClick={() => setSearchFocus(false)}>
        <img src={wandergoldSvg} alt="wandergold" />
      </LogoHeading>
      <LocationSearch>
        <input
          onFocus={() => setSearchFocus(true)}
          className={isSearchFocused && 'active'}
          type="text"
          placeholder={!isSearchFocused && 'wo willst du hin?'}
        ></input>
        {isSearchFocused && (
          <SearchSuggestions>
            <ul>
              {navigator.geolocation && (
                <li onClick={() => getGeolocationOfUser()}>Mein Standort</li>
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
          locationName: 'Mein Standort',
        })
      },
      function (error) {
        alert('Fehler')
      }
    )
  }
}

const Wrapper = styled.div`
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-image: url(${startscreenJpg});
  background-size: auto 100vh;
  background-position-x: center;
  background-repeat: no-repeat;
  text-align: center;
  padding: 10%;
`

const LogoHeading = styled.h1`
  margin: 0;
  position: relative;
  top: 16%;
  line-height: 1;

  img {
    width: 100%;
  }
`

const LocationSearch = styled.form`
  position: relative;
  bottom: -53%;
  text-align: left;

  input {
    display: grid;
    place-content: center;
    font-size: 0.8em;
    outline: none;
    border: none;
    background-color: #ffffff75;
    width: 50%;
    min-width: 150px;
    margin: 0 auto;
    padding: 10px;
    padding-left: 15px;
    border-radius: 20px;
    transition: width 0.5s ease-in-out, background-color 0.5s ease-in-out,
      font-size 0.5s ease-in-out, transform 0.5s ease-in-out;
    box-shadow: 0px 0px 25px 0px var(--primary-brown);
  }

  input.active {
    background-color: #ffffff;
    width: 100%;
    font-size: 1.2em;
    transform: translateY(-5px);
  }
`

const SearchSuggestions = styled.div`
  background: #ffffff95;
  border-radius: 5px;
  max-height: 250px;
  overflow: scroll;
  position: relative;
  top: -22px;
  ul {
    list-style: none;
    margin-left: 0;
    padding-left: 0;

    li {
      padding: 10px;
      letter-spacing: 0.3em;
    }
  }
`
