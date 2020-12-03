import { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import getFromApi from '../services/getFromApi'
import PropTypes from 'prop-types'
import Map from '../components/Map'

Results.propTypes = {
  startingPoint: PropTypes.object.isRequired,
}

export default function Results({ startingPoint }) {
  const lastSearchedPosition = JSON.parse(
    localStorage.getItem('lastSearchedPosition')
  )

  const [tracks, setTracks] = useState([])
  const [centerCoords, setCenterCoords] = useState({
    lat: startingPoint.latitude || lastSearchedPosition.lat || 54.3,
    lng: startingPoint.longitude || lastSearchedPosition.lng || 12.2,
  })

  useEffect(() => {
    localStorage.setItem('lastSearchedPosition', JSON.stringify(centerCoords))
    const path = `track/${centerCoords.lat},${centerCoords.lng}`
    getFromApi(path)
      .then(({ data }) => setTracks(data))
      .catch((error) => console.error('Error:', error))
  }, [centerCoords])

  return (
    <Wrapper>
      <Map centerCoords={centerCoords} handleCenterChanged={setCenterCoords} />
      {/*<FilterBar>Filter</FilterBar>*/}
      <ResultGrid>
        {tracks.map(({ id, description, title, distance }, index) => (
          <TrackCard key={id}>
            <h2>
              {index + 1} {title}
            </h2>
            <p>{description}</p>
            <p>{Math.round(distance / 1000)} km</p>
          </TrackCard>
        ))}
      </ResultGrid>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  background-color: #fff;
  height: 100vh;
  overflow: scroll;
`

const FilterBar = styled.section`
  background: brown;
  padding: 5px;
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
  box-shadow: 0px 0px 7px 2px rgba(62, 56, 43, 0.25);
  background: #fff;

  h2 {
    font-family: 'Kanit', sans-serif;
    font-size: 1.2em;
    line-height: 1;
    color: var(--heading-color);
    margin: 0;
  }
`
