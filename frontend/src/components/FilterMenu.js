import styled from 'styled-components/macro'

export default function FilterMenu({
  handleClick,
  filterCriteria,
  setIsFilterActive,
}) {
  return (
    <Wrapper>
      <h2>Filtern Sie auf Ihre gewünschte Tour</h2>
      <form>
        <label>
          <span>Max. Entfernung</span>
          <input min="0" max="5" type="range" name="size" />
        </label>
        <label>
          <span>Länge</span>
          <input min="0" max="5" type="range" name="sdas" />
        </label>
        <label>
          <span>Länge</span>
          <input min="0" max="5" type="range" name="dasdsa" />
        </label>
        <button onClick={() => setIsFilterActive(false)}>Schließen</button>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: var(--primary-color);
  height: 100vh;
  width: 70%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 300;
`
