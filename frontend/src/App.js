import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function App() {
  const [tracks, setTracks] = useState([])

  useEffect(() => getTracks(), [])

  function getTracks() {
    fetch('http://wandergold.local/track')
      .then((res) => res.json())
      .then((data) => setTracks(data))
      .catch((error) => console.error('Error:', error))
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {tracks.map(({ id, description, title }) => (
            <Track key={id}>
              <p>{title}</p>
              <p>{description}</p>
            </Track>
          ))}
        </Route>
        <Route exact path="/signup">
          <div>Register</div>
        </Route>
      </Switch>
    </Router>
  )
}

const Track = styled.section`
  width: 300px;
  height: 150px;
  background: #eee;
`
