import {RECEIVE_COUNTRYINFO} from '../actions'

function countrynanz (state = [], action) {
  switch (action.type) {
    case RECEIVE_COUNTRYINFO:
      return { name: action.name,
        region: action.region,
        capitalCity: action.capitalCity}

    default:
      return state
  }
}

export default countrynanz
