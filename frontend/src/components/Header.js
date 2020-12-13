import styled from 'styled-components/macro'
import wandergoldSrc from './../assets/wandergold.svg'

export default function Header({ goBackFunction }) {
  return (
    <Wrapper>
      <h1>
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
    line-height: 1;
    margin: 0;
    margin-top: 9px;
  }

  img {
    height: 30px;
  }

  button {
    position: absolute;
    left: 0;
  }
`
