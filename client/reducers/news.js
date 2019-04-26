import {RECEIVE_NEWS} from '../actions'

function news (state = [], action) {
  console.log(action)
  switch (action.type) {
    case RECEIVE_NEWS:
      return action.news

    default:
      return state
  }
}

export default news