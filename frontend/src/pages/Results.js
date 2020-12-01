import { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import getFromApi from '../services/getFromApi'
import PropTypes from 'prop-types'
import Map from '../components/Map'

Results.propTypes = {
  startingPoint: PropTypes.object.isRequired,
}

export default function Results({ startingPoint }) {
  const [tracks, setTracks] = useState([])
  const [centerCoords, setCenterCoords] = useState({
    lat: startingPoint.latitude,
    lng: startingPoint.longitude,
  })
  useEffect(
    () =>
      getFromApi('track')
        .then(({ data }) => setTracks(data))
        .catch((error) => console.error('Error:', error)),
    []
  )

  return (
    <Wrapper>
      <h1>Wandergold</h1>
      <Map centerCoords={centerCoords} />
      {tracks.map(({ id, description, title }, index) => (
        <Track key={id}>
          <h2>
            {index + 1} {title}
          </h2>
          <p>{description}</p>
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
