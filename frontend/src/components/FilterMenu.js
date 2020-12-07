import styled from 'styled-components/macro'

export default function FilterMenu({
  setFilterCriteria,
  filterCriteria,
  setIsFilterActive,
  allTracks,
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
    const obj = { ...filterCriteria, [property]: value }
    !value && delete obj[property]
    setFilterCriteria(obj)
  }

  console.log(filterCriteria)
  return (
    <Wrapper>
      <h2>Finde deine perfekte Tour</h2>
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

        <button onClick={() => setIsFilterActive(false)}>Schließen</button>
      </Controls>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: var(--primary-color);
  height: 100vh;
  width: 50%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 300;
  padding: 5%;
  font-size: 1em;
  color: #eee;

  h2 {
    font-family: 'Kanit', sans-serif;
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

  button {
    width: 100%;
    font-size: 1em;
    background: var(--secondary-color);
    color: #fff;
    border: none;
    padding: 10px;
  }
`
