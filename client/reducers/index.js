import {combineReducers} from 'redux'

import errorMessage from './error-message'
import flag from './flag'


////////// FOR REFERENCE ONLY /////////////////////////////
// import subreddits from './subreddits'
// import waiting from './waiting'

export default combineReducers({
  errorMessage,
  flag
  // subreddits,
  // waiting
})
