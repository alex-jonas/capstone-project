import styled from 'styled-components/macro'
export default styled.button`
  width: 100%;
  height: 40px;
  background-color: var(--primary-color);
  border: 0;
  box-shadow: 0 1px 4px 0 var(--button-shadow);
  color: var(--text-invert-color);
  font-size: 1em;
  letter-spacing: 0.1em;

  &:active {
    background-color: var(--primary-color-active);
  }

  strong {
    padding-left: 25px;
  }
`
