import React from 'react'
import ErrorMessage from './ErrorMessage'
import Input from './Input'
import Flag from './Flag'
import Languages from './Languages'
////////// FOR REFERENCE ONLY /////////////////////////////

// import LoadSubreddit from './LoadSubreddit'
// import SubredditList from './SubredditList'
// import WaitIndicator from './WaitIndicator'

const App = () => (
  <div className='app'>

    <Input />
    <ErrorMessage />
    <Flag />
    <Languages />

  </div>
)

export default App
