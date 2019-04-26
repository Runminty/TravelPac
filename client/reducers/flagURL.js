import {SET_FLAG_URL} from '../actions'

function flagURL (state = '', action) {
  switch (action.type) {
    case SET_FLAG_URL:
      console.log("Setting Flag URL to ", action.flagURL)
      return action.flagURL

    default:
      return state
  }
}

export default flagURL