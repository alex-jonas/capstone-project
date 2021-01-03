import PropTypes from 'prop-types'
import { useState } from 'react'
import styled from 'styled-components/macro'
import Loader from '../components/Loader'
import getAutocompleteSuggestions from '../lib/getAutocompleteSuggestions'
import getCoordsAndSearch from '../lib/getCoordsAndSearch'
import getGeolocationOfUser from '../lib/getGeolocationOfUser'
import closeSrc from './../assets/close.svg'
import compassSrc from './../assets/compass.svg'
import startscreenJpg from './../assets/startscreen.jpg'
import wandergoldSrc from './../assets/wandergold.svg'
import { v4 as uuidv4 } from 'uuid'

export default function Start({ handleSubmit }) {
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [suggestionList, setSuggestionList] = useState([])

  return (
    <Wrapper>
      <LogoArea onClick={() => setIsSearchFocused(false)}>
        <h1>
          <img src={wandergoldSrc} alt="wandergold" />
        </h1>
      </LogoArea>
      <LocationSearch onSubmit={(event) => event.preventDefault()}>
        <SearchField active={isSearchFocused}>
          {isSearchFocused && (
            <button type="button" onClick={() => setIsSearchFocused(false)}>
              <img src={closeSrc} alt="close" />
            </button>
          )}
          <input
            onChange={(event) => {
              !suggestionList.length && setSuggestionList([{ loading: true }])
              getAutocompleteSuggestions(event.target.value, setSuggestionList)
            }}
            onFocus={() => setIsSearchFocused(true)}
            type="text"
            placeholder={!isSearchFocused ? 'wo willst du hin?' : ''}
          />
        </SearchField>
        {isSearchFocused && (
          <SearchSuggestions>
            <ul>
              <>
                {navigator.geolocation && (
                  <li
                    key={uuidv4()}
                    className="geoLocator"
                    onClick={() =>
                      getGeolocationOfUser(handleSubmit, {
                        locationName: 'Mein Standort',
                        isReadyToSearch: true,
                      })
                    }
                  >
                    Mein Standort
                  </li>
                )}

                {suggestionList.map(
                  ({ loading, description, googlePlaceId }) => (
                    <li
                      key={uuidv4()}
                      onClick={() =>
                        !loading
                          ? getCoordsAndSearch(
                              description,
                              googlePlaceId,
                              handleSubmit
                            )
                          : false
                      }
                    >
                      {loading ? <Loader /> : description}
                    </li>
                  )
                )}
              </>
            </ul>
          </SearchSuggestions>
        )}
      </LocationSearch>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 60% 40%;
  background-image: url(${startscreenJpg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 5%;
  padding-top: 0;
  position: relative;
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
`

const SearchField = styled.div`
  width: ${(props) => (props.active ? '100%' : '50%')};
  min-width: 150px;
  padding: 10px;
  border-radius: 20px;
  background-color: ${(props) => (props.active ? '#fff' : '#ffffff75')};
  box-shadow: 0px 0px 25px 0px var(--secondary-color);
  transition: width 0.5s ease-in-out, background-color 0.5s ease-in-out,
    font-size 0.5s ease-in-out, transform 0.5s ease-in-out;
  font-size: ${(props) => (props.active ? '1.2em' : '0.8em')};
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
      border-bottom: 1px solid var(--separator-color);
      background-image: url(${compassSrc});
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
Start.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}
