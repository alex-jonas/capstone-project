import styled from 'styled-components/macro'
import closeSrc from '../assets/close.svg'

export default function FilterMenu({
  setFilterCriteria,
  filterCriteria,
  setIsFilterActive,
  allTracks,
  isFilterActive,
  tracksNumber,
}) {
  const maxDistance = 600000
  const maxLengthM = Math.max(...allTracks.map((track) => track.lengthM))
  const maxDurationMin = Math.max(
    ...allTracks.map((track) => track.durationMin)
  )

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

  return (
    <Wrapper active={isFilterActive}>
      <h2>Finde deine perfekte Tour</h2>
      <CloseButton type="button" onClick={() => setIsFilterActive(false)}>
        <img src={closeSrc} alt="Schließen" />
      </CloseButton>
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
        <p>Ergebnisse: {tracksNumber}</p>
        <button
          type="reset"
          onClick={(event) => {
            setFilterCriteria({})
            setIsFilterActive(false)
          }}
        >
          Filter zurücksetzen
        </button>
      </Controls>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: linear-gradient(
    180deg,
    rgba(66, 99, 26, 1) 0%,
    rgba(62, 97, 19, 1) 100%
  );
  height: 100vh;
  width: 100%;
  top: 0;
  right: ${(props) => (props.active ? '0' : '100%')};
  z-index: 300;
  position: absolute;
  padding: 12%;
  font-size: 1em;
  color: #eeeeee;
  transition: right 0.2s ease-out;

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
const CloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  border: none;
  background: none;
`
