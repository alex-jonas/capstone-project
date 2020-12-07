import { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import getFromApi from '../lib/getFromApi'
import PropTypes from 'prop-types'
import Map from '../components/Map'
import controlsSrc from '../assets/controls.svg'
import FilterMenu from '../components/FilterMenu'
import TrackCard from '../components/TrackCard'
import Footer from '../components/Footer'
import saveLastPositionLocally from '../lib/saveLastPositionLocally'
import getLastSavedPosition from '../lib/getLastSavedPosition'

Results.propTypes = {
  startingPoint: PropTypes.object.isRequired,
}

export default function Results({ startingPoint }) {
  const lastSearchedPosition = getLastSavedPosition()
  const [filterCriteria, setFilterCriteria] = useState({
    distance: 300000,
  })
  const [tracks, setTracks] = useState([])

  const [centerCoords, setCenterCoords] = useState({
    lat: startingPoint.latitude || lastSearchedPosition.lat,
    lng: startingPoint.longitude || lastSearchedPosition.lng,
  })
  const [isFilterActive, setIsFilterActive] = useState(false)

  useEffect(() => {
    saveLastPositionLocally(centerCoords)
    const path = `track/${centerCoords.lat},${centerCoords.lng}`
    getFromApi(path)
      .then(({ data }) => setTracks(data))
      .catch((error) => console.error('Error:', error))
  }, [centerCoords])

  const filteredTracks = tracks.filter((track) => {
    for (const key in filterCriteria) {
      if (track[key] === undefined) {
        return false
      } else if (
        (key === 'distance' || key === 'lengthM') &&
        track[key] > filterCriteria[key]
      ) {
        return false
      } else if (key === 'roundtrip' && track[key] !== filterCriteria[key]) {
        return false
      } else if (key === 'difficulty' && track[key] !== filterCriteria[key]) {
        return false
      } else if (
        key === 'certYear' &&
        Boolean(track[key]) !== filterCriteria[key]
      ) {
        return false
      }
    }
    return true
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
        <div>
          {(filteredTracks.length === 0 ? 'Keine' : filteredTracks.length) +
            ' Tour' +
            (filteredTracks.length !== 1 ? 'en' : '') +
            ' gefunden'}
        </div>
      </FilterBar>

      <FilterMenu
        filterCriteria={filterCriteria}
        setFilterCriteria={setFilterCriteria}
        setIsFilterActive={setIsFilterActive}
        allTracks={tracks}
        isFilterActive={isFilterActive}
        tracksNumber={filteredTracks.length}
      />

      {!isFilterActive && (
        <ResultGrid>
          {filteredTracks.map((track) => (
            <TrackCard track={track} key={track.id} />
          ))}
        </ResultGrid>
      )}
      <Footer />
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
  padding-top: 20px;
`
