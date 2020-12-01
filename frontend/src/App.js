import { useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import styled from 'styled-components/macro'
import Results from './pages/Results'
import Start from './pages/Start'

export default function App() {
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
            <Redirect to="/results" />
          ) : (
            <Start handleSubmit={setStartingPoint} />
          )}
        </Route>
        <Route path="/results">
          <Results startingPoint={startingPoint} />
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
