import React from 'react'
import ErrorMessage from './ErrorMessage'
import Flag from './Flag'
import Input from './Input'
////////// FOR REFERENCE ONLY /////////////////////////////

// import LoadSubreddit from './LoadSubreddit'
// import SubredditList from './SubredditList'
// import WaitIndicator from './WaitIndicator'

const App = () => (
  <div className='app'>

    <h1>Welcome to TravelPac</h1>
    <Input />
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
