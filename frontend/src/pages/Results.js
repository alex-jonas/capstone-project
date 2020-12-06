import { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import getFromApi from '../services/getFromApi'
import PropTypes from 'prop-types'
import Map from '../components/Map'
import controlsSrc from '../assets/controls.svg'
import premiumSrc from '../assets/premium.svg'

import starSrc from '../assets/star.svg'

import filterNewSrc from '../assets/filter_new.svg'
import getDifficultyName from '../services/getDifficultyName'
import getHoursFromMinutes from '../services/getHoursFromMinutes'
import getTagName from '../services/getTagName'
import FilterMenu from '../components/FilterMenu'

Results.propTypes = {
  startingPoint: PropTypes.object.isRequired,
}

export default function Results({ startingPoint }) {
  const lastSearchedPosition = JSON.parse(
    localStorage.getItem('lastSearchedPosition')
  )

  const [filterCriteria, setFilterCriteria] = useState({
    // distance: 100000,
    // roundtrip: true,
    // lengthM: { min: 8000, max: 12000 },
  })

  const [tracks, setTracks] = useState([])
  const [centerCoords, setCenterCoords] = useState({
    lat: startingPoint.latitude || lastSearchedPosition.lat,
    lng: startingPoint.longitude || lastSearchedPosition.lng,
  })
  const [isFilterActicve, setIsFilterActive] = useState(false)

  useEffect(() => {
    localStorage.setItem('lastSearchedPosition', JSON.stringify(centerCoords))
    const path = `track/${centerCoords.lat},${centerCoords.lng}`
    getFromApi(path)
      .then(({ data }) => setTracks(data))
      .catch((error) => console.error('Error:', error))
  }, [centerCoords])

  const filteredTracks = tracks.filter((track) => {
    for (const key in filterCriteria) {
      if (track[key] === undefined) return false
    }
    if (track['distance'] > filterCriteria['distance']) {
      return false
    } else if (track['lengthM'] < filterCriteria['lengthM']?.min) {
      return false
    } else if (track['lengthM'] > filterCriteria['lengthM']?.max) {
      return false
    } else if (track['roundtrip'] === filterCriteria['roundtrip']) {
      return false
    } else if (track['difficulty'] === filterCriteria['difficulty']) {
      return false
    } else return true
  })

  return (
    <Wrapper>
      <Map
        centerCoords={centerCoords}
        handleCenterChanged={setCenterCoords}
        tracks={filteredTracks}
      />
      <FilterBar>
        <FilterButton onClick={() => setIsFilterActive(true)}>
          <strong>Filter</strong>{' '}
          {Object.keys(filterCriteria).length > 0 && (
            <span>{Object.keys(filterCriteria).length}</span>
          )}
        </FilterButton>
      </FilterBar>

      {isFilterActicve && (
        <FilterMenu
          handleClick={setFilterCriteria}
          filterCriteria={filterCriteria}
          setIsFilterActive={setIsFilterActive}
        />
      )}

      <ResultGrid>
        {filteredTracks.map(
          (
            {
              id,
              difficulty,
              title,
              distance,
              lengthM,
              certYear,
              durationMin,
              description,
              tags,
            },
            index
          ) => (
            <TrackCard key={id}>
              <ImageHeading
                imgUrl={'https://source.unsplash.com/500x300/?forest,lake'}
              >
                <BookmarkButton>
                  <img src={starSrc} alt="Wanderung bookmarken" />
                </BookmarkButton>
                <h2>{title}</h2>
              </ImageHeading>
              <TrackFacts>
                <ul>
                  <li>
                    <strong>Länge: </strong>
                    {Math.round(lengthM / 100) / 10 + ' km'}
                  </li>
                  <li>
                    <strong>Dauer: </strong>
                    {'etwa ' +
                      getHoursFromMinutes(
                        durationMin
                          ? durationMin
                          : Math.round(lengthM * (2 / 75))
                      ) +
                      ' Std.'}
                  </li>
                  <li>
                    <strong>Entfernung: </strong>{' '}
                    {Math.round(distance / 1000) + ' km'}
                  </li>
                  <li>
                    <strong>Anspruch: </strong>
                    {getDifficultyName(difficulty)}
                  </li>
                  {certYear && (
                    <li className="premium">
                      <img src={premiumSrc} alt="Premiumweg" />
                    </li>
                  )}
                  <li className="one-column">
                    <strong>Tour Tags: </strong>
                    {tags
                      .sort(() => Math.random() - 0.5)
                      .map((tag) => (
                        <span>{getTagName(tag)}</span>
                      ))}
                  </li>
                  <li className="one-column">{description}</li>
                </ul>
              </TrackFacts>
            </TrackCard>
          )
        )}
      </ResultGrid>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  background-color: #fff;
  height: 100vh;
  overflow: scroll;
  position: relative;
  padding-top: 46px;
`

const FilterBar = styled.section`
  background: #fff;
  box-shadow: 0 1px 4px 0 rgba(62, 56, 43, 0.25);
  text-align: center;
  padding: 0;
  position: sticky;
  top: 0;
  margin-top: -30px;
  font-size: 0.8em;
  z-index: 100;
  display: grid;
  grid-template-columns: 1fr 2fr;

  div {
    white-space: nowrap;
    overflow-x: scroll;
    padding-top: 12px;
  }
  span {
    background: #00000020;
    border-radius: var(--default-border-radius);
    padding: 0 5px;
    margin: 0 5px;
    display: inline;
  }
`

const FilterButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: var(--primary-color);
  border: 0;
  box-shadow: 0 1px 4px 0 rgba(62, 56, 43, 0.65);
  color: #eee;
  font-size: 1em;

  strong {
    background-color: transparent;
    background-image: url(${controlsSrc});
    background-repeat: no-repeat;
    background-position-x: left;
    padding-left: 25px;
    letter-spacing: 0.1em;
  }
`

const ResultGrid = styled.div`
  display: grid;
  align-content: start;
  gap: 20px;
  background: #ddd;
`
const TrackCard = styled.section`
  padding: 10px;
  border-radius: var(--default-border-radius);
  box-shadow: 0 1px 4px 0 rgba(62, 56, 43, 0.25);
  background: #fff;
  display: grid;
  grid-template-rows: 1fr 1fr;
`

const BookmarkButton = styled.button`
  position: absolute;
  right: 3px;
  top: 3px;
  padding: 0;
  border: 0;
  background-color: transparent;
`

const ImageHeading = styled.section`
  display: grid;
  background: url(${(props) => props.imgUrl});
  background-size: cover;
  place-items: center;
  padding: 10%;
  position: relative;
  z-index: 50;
  border-radius: var(--default-border-radius);

  h2 {
    font-family: 'Kanit', sans-serif;
    font-size: 1.2em;
    line-height: 1;
    color: #fff;
    margin: 0;
    font-size: 1.3em;
    text-align: center;
    text-shadow: 0px 0px 9px rgba(0, 0, 0, 0.8);
  }
`
const TrackFacts = styled.section`
  font-size: 0.8em;
  letter-spacing: 1px;

  strong {
    text-transform: uppercase;
    font-size: 0.8em;
    color: var(--secondary-color);
  }
  ul {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    li {
      padding: 8px 0;
      border-bottom: 1px solid #eee;
    }

    li.premium {
      position: absolute;
      top: 0;
      right: 0;
      border: none;
      width: 40px;
      img {
        width: 100%;
      }
    }

    li.one-column {
      grid-column: 1 / -1;
    }

    span {
      font-size: 0.9em;
      margin-right: 4px;
      margin-bottom: 4px;
      background-color: #3e382b20;
      border-radius: var(--default-border-radius);
      padding: 2px 4px;
      display: inline-block;
    }
  }
`
