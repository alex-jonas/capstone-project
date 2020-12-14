import styled from 'styled-components/macro'
export default function CloseButton({
  setStateFunction,
  color = '#7b7b7b',
  size = '40',
}) {
  return (
    <CloseButtonStyled type="button" onClick={() => setStateFunction(false)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 29.25 29.25"
      >
        <title>Schließen</title>
        <g transform="translate(-3.375 -3.375)">
          <path
            d="M23.295,21.705,19.589,18l3.705-3.705a1.124,1.124,0,0,0-1.589-1.589L18,16.411l-3.705-3.705a1.124,1.124,0,0,0-1.589,1.589L16.411,18l-3.705,3.705a1.086,1.086,0,0,0,0,1.589,1.116,1.116,0,0,0,1.589,0L18,19.589l3.705,3.705a1.129,1.129,0,0,0,1.589,0A1.116,1.116,0,0,0,23.295,21.705Z"
            fill={color}
          />
          <path
            d="M18,5.344A12.651,12.651,0,1,1,9.049,9.049,12.573,12.573,0,0,1,18,5.344m0-1.969A14.625,14.625,0,1,0,32.625,18,14.623,14.623,0,0,0,18,3.375Z"
            fill={color}
          />
        </g>
      </svg>
    </CloseButtonStyled>
  )
}

const CloseButtonStyled = styled.button`
  position: absolute;
  right: 10px;
  top: 16px;
  border: none;
  background: none;
  z-index: 100;
`
