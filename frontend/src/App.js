import { useState, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import styled from 'styled-components/macro'
import Start from './components/Start'

export default function App() {
  const [tracks, setTracks] = useState([])

  useEffect(() => getTracks(), [])

  const [startingPoint, setStartingPoint] = useState({
    latitude: null,
    longitude: null,
    locationName: '',
    googlePlaceId: '',
    readyToSearch: false,
  })

  useEffect(() => console.log(startingPoint))

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
          {startingPoint.readyToSearch ? (
            <Redirect to="/tracklist" />
          ) : (
            <Start handleSubmit={setStartingPoint} />
          )}
        </Route>
        <Route path="/tracklist">
          {tracks.map(({ id, description, title }, index) => (
            <Track key={id}>
              <h2>
                {index + 1} {title}
              </h2>
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
  box-shadow: 0px 0px 25px 0px #000;
`

const Track = styled.section`
  width: 300px;
  background: #eee;

  h2 {
    font-family: 'Kanit', sans-serif;
    font-size: 1.2em;
  }
`
