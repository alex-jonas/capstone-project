import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`

* {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

:root {
    --primary-color: #4C6A28;
    --primary-gradient: linear-gradient(0deg, rgba(40,55,21,1) 0%, rgba(76,106,40,1) 100%); 
    --secondary-color: #3E382B;
    --secondary-gradient: linear-gradient(0deg, rgba(112,101,76,1) 0%, rgba(62,56,43,1) 100%); 
    --secondary-shadow: 0px 4px 10px var(--secondary-color);
    --text-color: #1a1a1a;
    --text-invert-color: #eaeaea;
    --heading-color: #4C6A28;
    --default-border-radius: 5px;
}

body {
    margin:0;
    background-color: var(--secondary-color);
    font-size:112.5%;
    color: var(--text-color);
   
}`
