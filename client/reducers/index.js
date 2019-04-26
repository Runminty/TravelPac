import {combineReducers} from 'redux'

import errorMessage from './error-message'
import flagURL from './flagURL'
import country from './country'
import countryCode from './countryCode'
import news from './news'
import languages from './languages'


////////// FOR REFERENCE ONLY /////////////////////////////
// import subreddits from './subreddits'
// import waiting from './waiting'

export default combineReducers({
  errorMessage,
  flagURL,
  country,
  countryCode,
  news,
  languages
})
