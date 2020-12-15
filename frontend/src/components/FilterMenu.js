import styled from 'styled-components/macro'
import CloseButton from './CloseButton'
import SlideInMenuDefault from './SlideInMenuDefault'

export default function FilterMenu({
  setFilterCriteria,
  filterCriteria,
  setIsFilterActive,
  allTracks,
  isFilterActive,
  tracksNumber,
  bookmarkIds,
}) {
  const maxDistance = 600000
  const maxLengthM = Math.max(...allTracks.map((track) => track.lengthM))

  const { distance, lengthM, roundtrip, certYear } = filterCriteria

  const distanceStep = 10
  const distanceKm = distance / 1000
  const distanceKmCeil = Math.ceil(distanceKm / distanceStep) * distanceStep
  const distanceKmPresetValue =
    distance > 0 ? distanceKmCeil : maxDistance / 1000

  const lengthStep = 1
  const lengthKm = lengthM / 1000
  const lengthKmCeil = Math.ceil(lengthKm / lengthStep) * lengthStep
  const lengthKmPresetValue = lengthM > 0 ? lengthKmCeil : maxLengthM / 1000

  const roundtripPresetValue = roundtrip ? roundtrip : false
  const certYearPresetValue = certYear ? certYear : false

  return (
    <Wrapper active={isFilterActive}>
      <h2>Finde deine perfekte Tour</h2>
      <CloseButton
        setStateFunction={setIsFilterActive}
        color="#eeeeee"
        size="30"
      />
      <Controls>
        <label>
          <span>Umkreis: {distanceKmPresetValue} km</span>
          <input
            min="0"
            step={distanceStep * 1000}
            max={maxDistance}
            type="range"
            defaultValue={distanceKmPresetValue * 1000}
            name="distance"
            onChange={handleConfigChange}
          />
        </label>

        <label>
          <span>Maximale Länge: {lengthKmPresetValue} km</span>
          <input
            min="1000"
            step={lengthStep * 1000}
            max={maxLengthM}
            defaultValue={lengthKmPresetValue * 1000}
            type="range"
            name="lengthM"
            onChange={handleConfigChange}
          />
        </label>

        <label>
          <span>Nur Rundwege: </span>
          <input
            type="checkbox"
            name="roundtrip"
            defaultChecked={roundtripPresetValue}
            onChange={handleCheckboxChange}
          />
        </label>

        <label>
          <span>Nur Premiumwege: </span>
          <input
            type="checkbox"
            name="certYear"
            defaultChecked={certYearPresetValue}
            onChange={handleCheckboxChange}
          />
        </label>
        <label>
          <span>Nur Bookmarks: </span>
          <input
            type="checkbox"
            name="certYear"
            defaultChecked={certYearPresetValue}
            onChange={handleCheckboxChange}
          />
        </label>
        <ButtonArea>
          <button type="button" onClick={() => setIsFilterActive(false)}>
            <strong>Treffer: {tracksNumber}</strong>
          </button>
          <button
            type="reset"
            onClick={() => {
              setFilterCriteria({})
              setIsFilterActive(false)
            }}
          >
            Zurücksetzen
          </button>
        </ButtonArea>
      </Controls>
    </Wrapper>
  )

  function handleConfigChange(event) {
    const property = event.target.name
    const value =
      property === 'roundtrip' ? event.target.checked : +event.target.value
    setFilterCriteria({
      ...filterCriteria,
      [property]: value,
    })
  }

  function handleCheckboxChange(event) {
    const property = event.target.name
    const value = event.target.checked
    const newFilterCriteria = { ...filterCriteria, [property]: value }
    !value && delete newFilterCriteria[property]
    setFilterCriteria(newFilterCriteria)
  }
}

const Wrapper = styled(SlideInMenuDefault)`
  right: ${(props) => (props.active ? '0' : '100%')};
  padding: 12%;
  font-size: 0.8em;

  h2 {
    font-family: 'Kanit', sans-serif;
    font-weight: 400;
    line-height: 1;
    font-size: 1.7em;
  }
`

const Controls = styled.form`
  label {
    display: flex;
    flex-direction: column;
    margin: 2em 0;
  }
  input {
    width: 100%;
  }
`
const ButtonArea = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
  button {
    display: block;
    border: 1px solid #eee;
    background: none;
    color: #eee;
    padding: 1em;
    font-size: 1em;
    letter-spacing: 1px;
    border-radius: var(--default-border-radius);
  }

  button[type='button'] {
    background: #eee;
    border: none;
    color: var(--primary-color);
  }
`
