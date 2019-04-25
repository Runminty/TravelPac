import React from 'react'
import ErrorMessage from './ErrorMessage'
import FetchFlag from './FetchFlag'
import Flag from './Flag'
////////// FOR REFERENCE ONLY /////////////////////////////

// import LoadSubreddit from './LoadSubreddit'
// import SubredditList from './SubredditList'
// import WaitIndicator from './WaitIndicator'

const App = () => (
  <div className='app'>

    <h1>Welcome to TravelPac</h1>
    <FetchFlag />
    <Flag />
    <ErrorMessage />

    {/* <LoadSubreddit>
      <WaitIndicator />
    </LoadSubreddit>
    <SubredditList />
 */}

  </div>
)

export default App
