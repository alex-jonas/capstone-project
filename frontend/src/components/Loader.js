import loadSrc from './../assets/load.svg'
import styled from 'styled-components/macro'

export default function Loader() {
  return (
    <LoaderStyled>
      <img src={loadSrc} alt="Daten werden geladen" />
    </LoaderStyled>
  )
}

const LoaderStyled = styled.div`
  display: inline;
`
