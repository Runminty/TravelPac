import React from 'react'
import ErrorMessage from './ErrorMessage'
import Input from './Input'
////////// FOR REFERENCE ONLY /////////////////////////////

// import LoadSubreddit from './LoadSubreddit'
// import SubredditList from './SubredditList'
// import WaitIndicator from './WaitIndicator'

const App = () => (
  <div className='app'>

    <Input />
    <ErrorMessage />

    {/* <LoadSubreddit>
      <WaitIndicator />
    </LoadSubreddit>
    <SubredditList />
 */}

  </div>
)

export default App
