import styled from 'styled-components/macro'
import startscreenJpg from './../assets/startscreen.jpg'
import wandergoldSvg from './../assets/wandergold.svg'
import { useState } from 'react'

export default function Start() {
  const [isSearchFocused, setSearchFocus] = useState(false)

  let inputClassName = ' location-search__input'
  if (isSearchFocused) inputClassName += inputClassName + '--active'

  let inputPlaceHolder = isSearchFocused ? '' : 'wo willst du hin?'

  return (
    <Wrapper>
      <h1 className="logo-heading">
        <img
          className="logo-heading__image"
          src={wandergoldSvg}
          alt="wandergold"
        />
      </h1>
      <input
        onFocus={() => setSearchFocus(true)}
        onBlur={() => setSearchFocus(false)}
        className={inputClassName}
        type="text"
        placeholder={inputPlaceHolder}
      ></input>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-image: url(${startscreenJpg});
  background-size: auto 100vh;
  background-position-x: center;
  background-repeat: no-repeat;
  text-align: center;
  padding: 40px;

  .logo-heading {
    margin: 0;
    position: relative;
    top: 16%;
    line-height: 1;
  }

  .logo-heading__image {
    width: 100%;
  }

  .location-search__input {
    display: grid;
    place-content: center;
    font-size: 0.8em;
    outline: none;
    border: none;
    background-color: #ffffff75;
    position: relative;
    bottom: -53%;
    width: 50%;
    margin: 0 auto;
    padding: 10px;
    border-radius: 20px;
    text-align: center;
    transition: width 0.5s ease-in-out, background-color 0.5s ease-in-out,
      font-size 0.5s ease-in-out, transform 0.5s ease-in-out;
    box-shadow: 0px 0px 25px 0px var(--primary-brown);
  }

  .location-search__input--active {
    background-color: #ffffff;
    width: 100%;
    font-size: 1.2em;
    transform: translateY(-100px);
  }
`
