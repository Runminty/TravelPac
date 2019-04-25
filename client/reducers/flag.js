import {REQUEST_FLAG} from '../actions'

function flag (state = '', action) {
  switch (action.type) {
    case REQUEST_FLAG:
      return action.flagURL

    default:
      return state
  }
}

export default flag