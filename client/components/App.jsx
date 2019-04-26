import React from 'react'
import ErrorMessage from './ErrorMessage'
////////// FOR REFERENCE ONLY /////////////////////////////

// import LoadSubreddit from './LoadSubreddit'
// import SubredditList from './SubredditList'
// import WaitIndicator from './WaitIndicator'

const App = () => (
  <div className='app'>

    <h1>Welcome to TravelPac</h1>
    
    <ErrorMessage />

    {/* <LoadSubreddit>
      <WaitIndicator />
    </LoadSubreddit>
    <SubredditList />
 */}

  </div>
)

export default App
