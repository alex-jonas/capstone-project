import PropTypes from 'prop-types'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components/macro'
import CloseButton from '../components/CloseButton'
import Map from '../components/Map'
import ResultGrid from '../components/ResultGrid'
import SlideInMenuDefault from '../components/SlideInMenuDefault'
import TrackCard from '../components/TrackCard'
import getFromApi from '../lib/getFromApi'
import getLastSavedPosition from '../lib/getLastSavedPosition'

export default function Details({
  track,
  setSingleTrack,
  bookmarks,
  setBookmarks,
}) {
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
        <CloseButton setStateFunction={setIsDetailMapActive} color="#203d1f" />
        <Map kmlFile={track.kmlFile} singleMode></Map>
      </DetailedMap>
      {!isDetailMapActive && (
        <ResultGrid>
          <TrackCard
            track={track}
            detailedMode
            setIsDetailMapActive={setIsDetailMapActive}
            bookmarks={bookmarks}
            setBookmarks={setBookmarks}
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
Details.propTypes = {
  track: PropTypes.object.isRequired,
}
