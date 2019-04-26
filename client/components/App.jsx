import React from 'react'
import ErrorMessage from './ErrorMessage'
import Input from './Input'
import Flag from './Flag'
////////// FOR REFERENCE ONLY /////////////////////////////

// import LoadSubreddit from './LoadSubreddit'
// import SubredditList from './SubredditList'
// import WaitIndicator from './WaitIndicator'

const App = () => (
  <div className='app'>

    <Input />
    <ErrorMessage />
    <Flag />

  </div>
)

export default App
