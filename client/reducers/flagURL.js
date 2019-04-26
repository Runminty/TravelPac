import {SET_FLAG_URL} from '../actions'

function flagURL (state = '', action) {
  switch (action.type) {
    
    case SET_FLAG_URL:
      return action.flagURL

    default:
      return state
  }
}

export default flagURL