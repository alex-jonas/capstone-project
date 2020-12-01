import { useState, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import styled from 'styled-components/macro'
import Start from './components/Start'
import getFromApi from './services/getFromApi'

export default function App() {
  const [tracks, setTracks] = useState([])

   useEffect(
    () =>
      getFromApi('track')
        .then((data) => setTracks(data))
        .catch((error) => console.error('Error:', error)),
    []
  )

  const [startingPoint, setStartingPoint] = useState({
    latitude: null,
    longitude: null,
    locationName: '',
    googlePlaceId: '',
    isReadyToSearch: false,
  })

  return (
    <PageLayout>
      <Switch>
        <Route exact path="/">
          {startingPoint.isReadyToSearch ? (
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
    line-height: 1;
    color: var(--heading-color);
  }
`
