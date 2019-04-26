import {REQUEST_COUNTRY} from '../actions'

function country (state = null, action) {
  switch (action.type) {
    case REQUEST_COUNTRY:
        console.log("Updating country to ", action.country)
      return action.country

    default:
      return state
  }
}

export default country