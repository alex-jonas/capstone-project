import styled from 'styled-components/macro'
import closeSrc from '../assets/close.svg'
export default function CloseButton({ setStateFunction }) {
  return (
    <CloseButtonStyled type="button" onClick={() => setStateFunction(false)}>
      <img src={closeSrc} alt="Schließen" />
    </CloseButtonStyled>
  )
}

const CloseButtonStyled = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  border: none;
  background: none;
  z-index: 100;
`
