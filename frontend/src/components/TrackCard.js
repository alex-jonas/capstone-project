import styled from 'styled-components/macro'
import starSrc from '../assets/star.svg'
import premiumSrc from '../assets/premium.svg'
import getDifficultyName from '../lib/getDifficultyName'
import getHoursFromMinutes from '../lib/getHoursFromMinutes'
import getTagName from '../lib/getTagName'
import PropTypes from 'prop-types'
import getFormattedDate from '../lib/getFormattedDate'
import WayTypesBar from './WayTypesBar'

TrackCard.propTypes = {
  track: PropTypes.object.isRequired,
}

export default function TrackCard({ track, handleClick, detailedMode }) {
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
  } = track

  return (
    <>
      <Wrapper onClick={() => (!detailedMode ? handleClick(track) : false)}>
        <ImageHeading
          imgUrl={'https://source.unsplash.com/500x300/?forest,lake'}
        >
          <h2>{title}</h2>
          <BookmarkButton>
            <img src={starSrc} alt={`Wanderung Nr. ${id} bookmarken`} />
          </BookmarkButton>
        </ImageHeading>
        <TrackFacts>
          <ul>
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
              <strong>Entfernung: </strong>{' '}
              {Math.round(distance / 1000) + ' km'}
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
            <li className="one-column">
              <strong>Tour Tags: </strong>

              {tags
                .sort(() => Math.random() - 0.5)
                .map((tag) => (
                  <span className="tourtag" key={tag}>
                    {getTagName(tag)}
                  </span>
                ))}
            </li>
            {detailedMode && (
              <>
                {certYear && (
                  <li>
                    <strong>Zertifizierung:</strong>
                    {certYear}
                  </li>
                )}
                <li>
                  <strong>Bearbeitet:</strong>
                  {getFormattedDate(dateCreated)}
                </li>
                {surface && (
                  <li className="one-column">
                    <strong>Wegbeschaffenheit</strong>
                    <WayTypesBar surfaceValues={surface} />
                  </li>
                )}

                <li className="one-column description">{description}</li>
              </>
            )}
          </ul>
        </TrackFacts>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  padding: 10px;
  border-radius: var(--default-border-radius);
  box-shadow: 0 1px 4px 0 rgba(62, 56, 43, 0.25);
  background: #fff;
  display: grid;
  grid-template-rows: 1fr 1fr;
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
  background: url('https://images.unsplash.com/photo-1507041957456-9c397ce39c97?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  place-items: center;
  padding: 10%;
  position: relative;
  z-index: 50;
  border-radius: var(--default-border-radius);

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
    column-gap: 10%;
    li {
      padding: 13px 0;
      align-items: baseline;
    }

    li.premium {
      position: absolute;
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

    span.tourtag {
      font-size: 0.9em;
      margin-right: 5px;
      margin-bottom: 4px;
      background-color: #3e382b30;
      border-radius: var(--default-border-radius);
      padding: 8px;
      display: inline-block;
      white-space: nowrap;
      letter-spacing: 1px;
    }
  }
`
