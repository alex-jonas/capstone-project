import { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components/macro'
import Start from './components/Start'

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
    <PageLayout>
      <Switch>
        <Route exact path="/">
          <Start />
        </Route>
        <Route path="/tracklist">
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
    </PageLayout>
  )
}

const PageLayout = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 500px;
  min-width: 250px;
  margin: 0 auto;
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 1);
`

const Track = styled.section`
  width: 300px;
  height: 150px;
  background: #eee;
`
