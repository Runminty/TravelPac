import {SET_LANGUAGES} from '../actions'

function languages (state = [], action) {
  switch (action.type) {
    case SET_LANGUAGES:
      return action.languages

    default:
      return state
  }
}

export default languages