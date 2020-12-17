import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import premiumSrc from '../assets/premium.svg'
import starSrc from '../assets/star.svg'
import starActiveSrc from '../assets/star_active.svg'
import getDifficultyName from '../lib/getDifficultyName'
import getFormattedDate from '../lib/getFormattedDate'
import getHoursFromMinutes from '../lib/getHoursFromMinutes'
import openExternalLink from '../lib/openExternalLink'
import ButtonDefault from './ButtonDefault'
import StarButton from './StarButton'
import TourTags from './TourTags'
import WayTypesBar from './WayTypesBar'

/**
 * Central component for showing track data
 */
export default function TrackCard({
  track,
  handleClick,
  detailedMode,
  setIsDetailMapActive,
  bookmarks,
  setBookmarks,
}) {
  const {
    id,
    difficulty,
    title,
    distance,
    lengthM,
    certYear,
    durationMin,
    description,
    tags,
    dateCreated,
    surface,
    elevation,
    region,
    firstLat,
    firstLon,
  } = track

  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY
  const trackPhotoSrc = process.env.REACT_APP_BASE_URL_IMAGE + id + '.jpg'

  const staticMapImgSrc = `https://maps.googleapis.com/maps/api/staticmap?center=${firstLat},${firstLon}&zoom=10&size=400x200&key=${apiKey}&maptype=terrain&scale=2&markers=color:0x4C6A28|${firstLat},${firstLon}`
  const googleRouteHref = `https://google.com/maps/?daddr=${firstLat},${firstLon}`

  const bookmarkIndexInArray = bookmarks?.findIndex(
    (bookmark) => bookmark.id === id
  )
  const isBookmarked = bookmarkIndexInArray > -1

  return (
    <>
      <Wrapper detailedMode={detailedMode}>
        {detailedMode && (
          <>
            <h2>{title}</h2>
          </>
        )}
        <ImageHeading big={detailedMode} photoSrc={trackPhotoSrc}>
          {!detailedMode && <h2 onClick={() => handleClick(track)}>{title}</h2>}
          <BookmarkButton
            onClick={() => {
              setBookmarks(toggleBookmarkArray())
            }}
          >
            <StarButton active={isBookmarked} />
          </BookmarkButton>
        </ImageHeading>

        <TrackFacts
          staticMapUrl={staticMapImgSrc}
          onClick={() => (!detailedMode ? handleClick(track) : false)}
        >
          <ul>
            {detailedMode && (
              <>
                <li className="one-column description">{description}</li>
                <li
                  className="one-column static-map"
                  onClick={() => setIsDetailMapActive(true)}
                ></li>
                <li className="one-column static-map-menu">
                  <MapMenuButton onClick={() => setIsDetailMapActive(true)}>
                    Wanderkarte
                  </MapMenuButton>
                  <MapMenuButton
                    onClick={() => {
                      setBookmarks(toggleBookmarkArray())
                    }}
                  >
                    {!isBookmarked ? 'Like' : 'Unlike'}
                  </MapMenuButton>
                  <MapMenuButton
                    onClick={() => openExternalLink(googleRouteHref)}
                  >
                    Anfahrt
                  </MapMenuButton>
                </li>
              </>
            )}

            <li>
              <strong>Länge: </strong>
              {Math.round(lengthM / 100) / 10 + ' km'}
            </li>
            <li>
              <strong>Dauer: </strong>
              {'ca. ' +
                getHoursFromMinutes({
                  minutes: durationMin,
                  length: lengthM,
                }) +
                ' Std'}
            </li>
            <li>
              <strong>Entfernung: </strong>
              {distance ? Math.round(distance / 1000) + ' km' : '-'}
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

            {detailedMode && (
              <>
                <li className="one-column">
                  <strong>Region:</strong>
                  {region}
                </li>
                {certYear && (
                  <li className="one-column">
                    <strong>Premiumweg seit:</strong>
                    {certYear}
                  </li>
                )}

                {elevation && (
                  <li className="one-column">
                    <strong>Höhenunterschied: </strong> {elevation} m
                  </li>
                )}

                {surface && (
                  <li className="one-column">
                    <strong>Wegbeschaffenheit</strong>
                    <WayTypesBar surfaceValues={surface} />
                  </li>
                )}
              </>
            )}

            <li className="one-column">
              <strong>Tour Tags: </strong>
              <TourTags tagIds={tags} />
            </li>
            {detailedMode && (
              <li className="one-column">
                <strong>Stand:</strong>
                {getFormattedDate(dateCreated)}
              </li>
            )}
          </ul>
        </TrackFacts>
      </Wrapper>
    </>
  )

  function toggleBookmarkArray() {
    return !isBookmarked
      ? [...bookmarks, { id: id, date: new Date() }]
      : [
          ...bookmarks.slice(0, bookmarkIndexInArray),
          ...bookmarks.slice(bookmarkIndexInArray + 1),
        ]
  }
}

const Wrapper = styled.section`
  padding: 10px;
  border-radius: var(--default-border-radius);
  box-shadow: 0 1px 4px 0 rgba(62, 56, 43, 0.25);
  background: #fff;
  display: grid;
  grid-template-rows: ${(props) => (props.detailedMode ? 'none' : '1fr 1fr')};

  h2 {
    font-family: 'Kanit', sans-serif;
    line-height: 1;
    margin: ${(props) => (props.detailedMode ? '15px 0' : '0')};
    font-size: ${(props) => (props.detailedMode ? '1.7em' : '1.3em')};
    color: ${(props) => (props.detailedMode ? '#3F4F2C' : '#fff')};
    text-align: ${(props) => (props.detailedMode ? 'left' : 'center')};
    text-shadow: ${(props) =>
      props.detailedMode ? 'none' : '0px 0px 9px rgba(0, 0, 0, 0.8)'};
  }
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
  background: ${(props) =>
      !props.big &&
      'linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),'}
    url(${(props) => props.photoSrc});
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  place-items: center;
  padding: 10%;
  position: relative;
  z-index: 50;
  border-radius: var(--default-border-radius);
  height: ${(props) => (props.big ? '50vh' : 'unset')};
`

const TrackFacts = styled.section`
  font-size: 0.85em;

  strong {
    text-transform: uppercase;
    font-size: 0.8em;
    font-weight: 400;
    color: var(--secondary-color);
    letter-spacing: 1px;
    margin-right: 8px;
  }
  ul {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    column-gap: 5px;
    li {
      padding: 13px 0;
      align-items: baseline;
    }

    li.premium {
      position: absolute;
      display: none;
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
      display: block;
      justify-content: unset;
    }
    li.description {
      font-size: 1.2em;
      line-height: 1.5;
    }

    li.static-map {
      height: 170px;
      background-image: url(${(props) => props.staticMapUrl});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    li.static-map-menu {
      display: flex;
      margin-top: -15px;
    }
  }
`

const MapMenuButton = styled(ButtonDefault)`
  font-size: 0.8em;
  color: #fff;
  white-space: nowrap;
`

TrackCard.propTypes = {
  track: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
  detailedMode: PropTypes.bool,
  setIsDetailMapActive: PropTypes.func.isRequired,
}
