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
    lat: startingPoint.latitude || lastSearchedPosition.lat,
    lng: startingPoint.longitude || lastSearchedPosition.lng,
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
      <h1>Wandergold</h1>
      <Map centerCoords={centerCoords} handleCenterChanged={setCenterCoords} />
      {tracks.map(({ id, description, title, distance }, index) => (
        <Track key={id}>
          <h2>
            {index + 1} {title}
          </h2>
          <p>{description}</p>
          <p>{Math.round(distance / 1000)} km</p>
        </Track>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #fff;
`

const Track = styled.section`
  width: 300px;
  background: #eee;

  h2 {
    font-family: 'Kanit', sans-serif;
    font-size: 1.2em;
    line-height: 1;
    color: var(--heading-color);
  }
`
