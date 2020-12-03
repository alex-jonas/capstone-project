import styled from 'styled-components/macro'
import wandergoldSrc from './../assets/wandergold.svg'
import headerBackgroundSrc from './../assets/headerbg.svg'

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
  position: absolute;
  z-index: 100;
  background-image: url(${headerBackgroundSrc});
  background-position-y: -20px;
  background-position-x: -2px;
  background-size: 102%;
  background-repeat: no-repeat;
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
  height: 70px;

  h1 {
    line-height: 1;
    margin: 8px 0;
  }

  img {
    height: 30px;
  }
`
