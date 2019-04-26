import React from 'react'
import ErrorMessage from './ErrorMessage'
import Input from './Input'
import News from './News'
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
    <News />

  </div>
)

export default App
