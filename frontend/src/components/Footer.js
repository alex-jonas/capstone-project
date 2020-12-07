import styled from 'styled-components/macro'

export default function Footer() {
  return (
    <Wrapper>
      <h2>Awesome Footer</h2>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  width: 100%;
  height: 20vh;
  background: var(--primary-color);

  h1 {
    line-height: 1;
    margin: 0;
    margin-top: 9px;
  }
`
