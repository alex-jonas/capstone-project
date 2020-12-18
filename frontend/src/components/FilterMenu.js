import styled from 'styled-components/macro'
import CloseButton from './CloseButton'
import SlideInMenuDefault from './SlideInMenuDefault'

export default function FilterMenu({
  setFilterCriteria,
  filterCriteria,
  setIsFilterActive,
  isFilterActive,
  tracksNumber,
  initialFilterState,
}) {
  const { distance, lengthM, roundtrip, certYear, bookmarked } = filterCriteria

  const maxDistance = 600000
  const maxLengthM = 20000
  const distanceInput = distance || maxDistance
  const lengthMInput = lengthM || maxLengthM

  const distanceStep = 10
  const distanceKm = distanceInput / 1000
  const distanceKmCeil = Math.ceil(distanceKm / distanceStep) * distanceStep
  const distanceKmPresetValue = distanceKmCeil

  const lengthStep = 1
  const lengthKm = lengthMInput / 1000
  const lengthKmCeil = Math.ceil(lengthKm / lengthStep) * lengthStep
  const lengthKmPresetValue = lengthKmCeil

  const roundtripPresetValue = roundtrip ? roundtrip : false
  const certYearPresetValue = certYear ? certYear : false
  const bookmarkedPresetValue = bookmarked ? bookmarked : false

  return (
    <Wrapper active={isFilterActive}>
      <h2>Finde deine perfekte Tour</h2>
      <CloseButton
        setStateFunction={setIsFilterActive}
        color="#eee"
        size="30"
      />
      <Controls>
        <label>
          <span>Umkreis: {distanceKmPresetValue} km</span>
          <input
            min={distanceStep * 1000}
            step={distanceStep * 1000}
            max={maxDistance}
            type="range"
            defaultValue={distanceKmPresetValue * 1000}
            name="distance"
            onChange={handleFilterChange}
          />
        </label>

        <label>
          <span>Maximale Länge: {lengthKmPresetValue} km</span>
          <input
            min={lengthStep * 1000}
            step={lengthStep * 1000}
            max={maxLengthM}
            defaultValue={lengthKmPresetValue * 1000}
            type="range"
            name="lengthM"
            onChange={handleFilterChange}
          />
        </label>

        <label>
          <span>Nur Rundwege: </span>
          <input
            type="checkbox"
            name="roundtrip"
            defaultChecked={roundtripPresetValue}
            onChange={handleFilterChange}
          />
        </label>

        <label>
          <span>Nur Premiumwege: </span>
          <input
            type="checkbox"
            name="certYear"
            defaultChecked={certYearPresetValue}
            onChange={handleFilterChange}
          />
        </label>
        <label>
          <span>Nur Bookmarks: </span>
          <input
            type="checkbox"
            name="bookmarked"
            defaultChecked={bookmarkedPresetValue}
            onChange={handleFilterChange}
          />
        </label>
        <ButtonArea>
          <button type="button" onClick={() => setIsFilterActive(false)}>
            <strong>Treffer: {tracksNumber}</strong>
          </button>
          <button
            type="reset"
            onClick={() => {
              setFilterCriteria(initialFilterState)
              setIsFilterActive(false)
            }}
          >
            Zurücksetzen
          </button>
        </ButtonArea>
      </Controls>
    </Wrapper>
  )

  function handleFilterChange(event) {
    const { type, name, value, checked } = event.target
    const filterIsCheckbox = type === 'checkbox'
    const filterProperty = name
    const filterValue = filterIsCheckbox ? checked : +value
    const newFilterCriteria = {
      ...filterCriteria,
      [filterProperty]: filterValue,
    }
    filterIsCheckbox && !filterValue && delete newFilterCriteria[filterProperty]
    console.log(newFilterCriteria)
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
