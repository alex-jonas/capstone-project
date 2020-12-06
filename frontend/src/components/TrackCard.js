import styled from 'styled-components/macro'
import starSrc from '../assets/star.svg'
import premiumSrc from '../assets/premium.svg'
import getDifficultyName from '../services/getDifficultyName'
import getHoursFromMinutes from '../services/getHoursFromMinutes'
import getTagName from '../services/getTagName'
import PropTypes from 'prop-types'

TrackCard.propTypes = {
  track: PropTypes.object.isRequired,
}

export default function TrackCard({ track }) {
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
  } = track

  return (
    <>
      <Wrapper>
        <ImageHeading
          imgUrl={'https://source.unsplash.com/500x300/?forest,lake'}
        >
          <BookmarkButton>
            <img src={starSrc} alt={`Wanderung Nr. ${id} bookmarken`} />
          </BookmarkButton>
          <h2>{title}</h2>
        </ImageHeading>
        <TrackFacts>
          <ul>
            <li>
              <strong>Länge: </strong>
              {Math.round(lengthM / 100) / 10 + ' km'}
            </li>
            <li>
              <strong>Dauer: </strong>
              {'etwa ' +
                getHoursFromMinutes({
                  minutes: durationMin,
                  length: lengthM,
                }) +
                ' Std.'}
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
                  <span key={tag}>{getTagName(tag)}</span>
                ))}
            </li>
            <li className="one-column">{description}</li>
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
  background: url(${(props) => props.imgUrl});
  background-size: cover;
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
  font-size: 0.8em;

  strong {
    text-transform: uppercase;
    font-size: 0.8em;
    color: var(--secondary-color);
  }
  ul {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    li {
      padding: 8px 0;
      border-bottom: 1px solid #eee;
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
    }

    span {
      font-size: 0.9em;
      margin-right: 4px;
      margin-bottom: 4px;
      background-color: #3e382b20;
      border-radius: var(--default-border-radius);
      padding: 2px 4px;
      display: inline-block;
    }
  }
`
