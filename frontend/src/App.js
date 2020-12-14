import { useEffect, useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import styled from 'styled-components/macro'
import Header from './components/Header'
import getBookmarks from './lib/getBookmarks'
import Details from './pages/Details'
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

  const [singleTrack, setSingleTrack] = useState({})
  const [bookmarks, setBookmarks] = useState(getBookmarks || [])
  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
  }, [bookmarks])

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
          {singleTrack.id ? (
            <Redirect to={`/details/${singleTrack.id}`} />
          ) : (
            <>
              <Header />
              <Results
                startingPoint={startingPoint}
                setSingleTrack={setSingleTrack}
                bookmarks={bookmarks}
                setBookmarks={setBookmarks}
              />
            </>
          )}
        </Route>

        <Route path="/details/:urlId">
          <>
            <Header />
            <Details
              track={singleTrack}
              setSingleTrack={setSingleTrack}
              bookmarks={bookmarks}
              setBookmarks={setBookmarks}
            />
          </>
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
  background: #fff;
  position: relative;
`
