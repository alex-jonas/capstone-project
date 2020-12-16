import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import controlsSrc from '../assets/controls.svg'
import ButtonDefault from '../components/ButtonDefault'
import FilterMenu from '../components/FilterMenu'
import Map from '../components/Map'
import ResultGrid from '../components/ResultGrid'
import TrackCard from '../components/TrackCard'
import getBooleanFilterResult from '../lib/getBooleanFilterResult'
import getLastSavedPosition from '../lib/getLastSavedPosition'
import updateCenter from '../lib/updateCenter'

export default function Results({
  startingPoint,
  setSingleTrack,
  bookmarks,
  setBookmarks,
}) {
  const lastSearchedPosition = getLastSavedPosition()
  const [filterCriteria, setFilterCriteria] = useState({
    distance: 300000,
  })
  const [tracks, setTracks] = useState([])

  const [centerCoords, setCenterCoords] = useState({
    lat: startingPoint?.latitude || lastSearchedPosition.lat,
    lng: startingPoint?.longitude || lastSearchedPosition.lng,
  })
  const [isFilterActive, setIsFilterActive] = useState(false)

  useEffect(() => {
    updateCenter(centerCoords)
      .then(({ data }) => data)
      .then((tracks) =>
        tracks.map((track) => {
          const bookmarkForTrack = bookmarks.find(
            (bookmark) => bookmark.id === track.id
          )
          return bookmarkForTrack
            ? { ...track, bookmarked: bookmarkForTrack.date }
            : track
        })
      )
      .then((tracksWithBookmarks) => setTracks(tracksWithBookmarks))
      .catch((error) => console.error('Error:', error))
  }, [centerCoords, bookmarks])

  const filteredTracks = tracks.filter((track) =>
    getBooleanFilterResult(track, filterCriteria)
  )

  return (
    <Wrapper>
      <Map
        centerCoords={centerCoords}
        handleCenterChanged={setCenterCoords}
        tracks={filteredTracks}
      />
      <FilterBar>
        <FilterButton onClick={() => setIsFilterActive(true)}>
          <strong>Filter</strong>
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
            <TrackCard
              track={track}
              key={track.id}
              handleClick={setSingleTrack}
              detailedMode={false}
              bookmarks={bookmarks}
              setBookmarks={setBookmarks}
            />
          ))}
        </ResultGrid>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.main`
  background-color: #fff;
  height: 100vh;
  overflow: scroll;
  position: relative;
  padding-top: 46px;
  user-select: none;
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

const FilterButton = styled(ButtonDefault)`
  strong {
    background-color: transparent;
    background-image: url(${controlsSrc});
    background-repeat: no-repeat;
    background-position-x: left;
  }
`

Results.propTypes = {
  startingPoint: PropTypes.object.isRequired,
}
