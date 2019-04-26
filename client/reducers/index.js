import {combineReducers} from 'redux'

import errorMessage from './error-message'
import flag from './flag'
import country from './country'
import countryCode from './countryCode'
import news from './news'


////////// FOR REFERENCE ONLY /////////////////////////////
// import subreddits from './subreddits'
// import waiting from './waiting'

export default combineReducers({
  errorMessage,
  flag,
  country,
  countryCode,
  news
  // subreddits,
  // waiting
})
