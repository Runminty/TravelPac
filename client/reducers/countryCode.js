import {SET_COUNTRY_CODE} from '../actions'

function countryCode (state = '', action) {
  switch (action.type) {
    case SET_COUNTRY_CODE:
      return action.countryCode

    default:
      return state
  }
}

export default countryCode