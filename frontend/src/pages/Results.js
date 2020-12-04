import { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import getFromApi from '../services/getFromApi'
import PropTypes from 'prop-types'
import Map from '../components/Map'
import filterSrc from '../assets/filter.svg'

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
      <Map centerCoords={centerCoords} handleCenterChanged={setCenterCoords} />

      <ResultGrid>
        <FilterBar>
          <h2>Filter</h2>
        </FilterBar>
        {tracks.map(({ id, description, title, distance, lengthM }, index) => (
          <TrackCard key={id}>
            <ImageHeading
              imgUrl={'https://source.unsplash.com/500x300/?forest,lake'}
            >
              <h2>{title}</h2>
            </ImageHeading>
            <div>
              <p></p>
              <p>{description}</p>
              <ul>
                <li>
                  <strong>Entfernung</strong> {Math.round(distance / 1000)} km
                </li>
                <li>
                  <strong>Länge</strong> {Math.round(lengthM / 100) / 10} km
                </li>
              </ul>
            </div>
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
  position: relative;
`

const FilterBar = styled.section`
  background: var(--primary-color);
  box-shadow: 0 1px 4px 0 rgba(62, 56, 43, 0.25);
  color: #eee;
  text-align: center;
  padding: 5px;
  z-index: 50px;
  position: sticky;
  top: 0;
  margin-top: -30px;
  font-size: 0.8em;

  h2 {
    display: inline;
    background-image: url(${filterSrc});
    background-size: 14px;
    background-repeat: no-repeat;
    background-position: left center;
    padding-left: 19px;
    line-height: 1;
    font-size: 1em;
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

const ImageHeading = styled.section`
  display: grid;
  background: url(${(props) => props.imgUrl});
  background-size: cover;
  place-items: center;
  padding: 10%;

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
