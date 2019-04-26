import {SET_COUNTRY_CODE} from '../actions'

function countryCode (state = '', action) {
  switch (action.type) {
    case SET_COUNTRY_CODE:
        console.log("Updating country to ", action.country)
      return action.countryCode

    default:
      return state
  }
}

export default countryCode