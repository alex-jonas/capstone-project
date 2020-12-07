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

  const { distance, lengthM } = filterCriteria

  const distanceStep = 10
  const distanceKm = distance / 1000
  const distanceKmPresetValue =
    Math.ceil(distanceKm / distanceStep) * distanceStep

  /* const lengthStep = 1
  const lengthKm = presetLengthM?.max / 1000
  const lengthNextHigherStep = Math.ceil(lengthKm / lengthStep) * lengthStep*/

  function handleConfigChange(event) {
    setFilterCriteria({
      ...filterCriteria,
      [event.target.name]: +event.target.value,
    })
  }

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

        {/*<label>
          <span>Maximale Länge: {lengthNextHigherStep} km</span>
          <input
            min="1000"
            step={lengthStep * 1000}
            max={maxLengthM}
            defaultValue={lengthNextHigherStep * 1000}
            type="range"
            name="lengthM"
            onChange={handleConfigChange}
          />
        </label>*/}

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
