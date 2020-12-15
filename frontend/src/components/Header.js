import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import wandergoldSrc from './../assets/wandergold.svg'

export default function Header({ goBackFunction, redirectToPath }) {
  const history = useHistory()
  const arrowLabel = redirectToPath === '/' ? 'Zum Start' : 'Zu den Ergebnissen'
  function goBack() {
    goBackFunction({})
    history.push(redirectToPath)
  }
  return (
    <Wrapper>
      <h1>
        <button onClick={() => goBack()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13.503"
            height="23.619"
            viewBox="0 0 13.503 23.619"
          >
            <title>{arrowLabel}</title>
            <path
              d="M15.321,18l8.937-8.93a1.688,1.688,0,0,0-2.391-2.384L11.742,16.8a1.685,1.685,0,0,0-.049,2.327L21.86,29.32a1.688,1.688,0,0,0,2.391-2.384Z"
              transform="translate(-11.251 -6.194)"
            />
          </svg>
        </button>
        <img src={wandergoldSrc} alt="wandergold" />
      </h1>
    </Wrapper>
  )
}
const Wrapper = styled.header`
  width: 100%;
  height: 46px;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 0 1px 4px 0 rgba(62, 56, 43, 0.25);
  background: #fff;
  z-index: 200;
  display: grid;
  place-items: center;

  h1 {
    font-size: 1em;
    line-height: 1;
    margin: 0;
    margin-top: 9px;
  }

  img {
    height: 30px;
  }

  button {
    position: absolute;
    left: 10px;
    top: 0;
    display: grid;
    height: 100%;
    width: 40px;
    place-items: center left;
    padding: 0;
    border: 0;
    color: var(--primary-color);
    font-size: 0.8em;
    background: none;
    svg {
      height: 35%;
      fill: var(--primary-color);
    }
  }
`
