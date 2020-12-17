import styled from 'styled-components/macro'
export default styled.button`
  width: 100%;
  height: 40px;
  background-color: var(--primary-color);
  border: 0;
  box-shadow: 0 1px 4px 0 rgba(62, 56, 43, 0.65);
  color: #eee;
  font-size: 1em;
  letter-spacing: 0.1em;

  &:active {
    background-color: #2f4218;
  }

  strong {
    padding-left: 25px;
  }
`
