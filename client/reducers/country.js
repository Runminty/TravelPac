import {SET_COUNTRY} from '../actions'

function country (state = '', action) {
  switch (action.type) {
    case SET_COUNTRY:
      return action.country

    default:
      return state
  }
}

export default country