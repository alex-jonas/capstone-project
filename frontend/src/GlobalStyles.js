import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`

* {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

:root {
    --primary-green: #4C6A28;
    --primary-brown: #3E382B;
}

body {
    margin:0;
    background-color: var(--primary-brown);
    font-size:112.5%;
   
}`
