import styled from 'styled-components/macro'
import wandergoldSrc from './../assets/wandergold.svg'

export default function Header() {
  return (
    <Wrapper>
      <h1>
        <img src={wandergoldSrc} alt="wandergold" />
      </h1>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: grid;
  place-content: center;
  position: relative;
  box-shadow: 0 1px 4px 0 rgba(62, 56, 43, 0.25);
  background: #fff;
  z-index: 100;

  h1 {
    line-height: 1;
    margin: 5px;
  }

  img {
    height: 30px;
  }
`
