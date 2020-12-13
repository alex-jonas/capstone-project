import { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import getFromApi from '../lib/getFromApi'
import PropTypes from 'prop-types'
import Map from '../components/Map'
import TrackCard from '../components/TrackCard'
import { useParams } from 'react-router-dom'
import getLastSavedPosition from '../lib/getLastSavedPosition'
import ResultGrid from '../components/ResultGrid'
import SlideInMenuDefault from '../components/SlideInMenuDefault'
import CloseButton from '../components/CloseButton'

Details.propTypes = {
  track: PropTypes.object.isRequired,
}

export default function Details({ track, setSingleTrack }) {
  const [isDetailMapActive, setIsDetailMapActive] = useState(false)

  let { urlId } = useParams()

  const lastPosition = getLastSavedPosition()

  const lastPositionPair = lastPosition
    ? Object.values(lastPosition).join()
    : ''

  !track.id &&
    getFromApi(`single-track/${urlId}/${lastPositionPair}`)
      .then(({ data }) => setSingleTrack(data))
      .catch((e) => console.error(e))

  return (
    <Wrapper>
      <DetailedMap active={isDetailMapActive}>
        <CloseButton setStateFunction={setIsDetailMapActive} />
        <Map kmlFile={track.kmlFile} singleMode></Map>
      </DetailedMap>

      {!isDetailMapActive && (
        <ResultGrid>
          <TrackCard
            track={track}
            detailedMode
            setIsDetailMapActive={setIsDetailMapActive}
          />
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
`

const DetailedMap = styled(SlideInMenuDefault)`
  right: ${(props) => (props.active ? '0' : '100%')};
`
