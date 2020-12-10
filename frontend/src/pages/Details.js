import { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import getFromApi from '../lib/getFromApi'
import PropTypes from 'prop-types'
import Map from '../components/Map'
import TrackCard from '../components/TrackCard'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import getLastSavedPosition from '../lib/getLastSavedPosition'

Details.propTypes = {
  track: PropTypes.object.isRequired,
}

export default function Details({ track, setSingleTrack }) {
  let { urlId } = useParams()

  const lastPosition = getLastSavedPosition()
  const lastPositionPair = Object.values(lastPosition).join()

  !track.id &&
    getFromApi(`single-track/${urlId}/${lastPositionPair}`)
      .then(({ data }) => setSingleTrack(data))
      .catch((e) => console.error(e))

  return (
    <Wrapper>
      <Map
        centerCoords={{ lat: +track.firstLat, lng: +track.firstLon }}
        kmlFile={track.kmlFile}
        singleMode
      />

      <ResultGrid>
        <TrackCard track={track} key={track.id} detailedMode />
      </ResultGrid>

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

const ResultGrid = styled.div`
  display: grid;
  align-content: start;
  gap: 20px;
  background: #ddd;
  padding: 10px;
  padding-top: 20px;
`
