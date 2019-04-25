import request from 'superagent'
export const SHOW_ERROR = 'SHOW_ERROR'
export const REQUEST_COUNTRY = 'REQUEST_COUNTRY'


export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export const requestCountry = (country) => {
  return {
    type: REQUEST_COUNTRY,
    country: country
  }
}

export const receiveCountry = (country) => {
  console.log("This is the country you chose: ", country)
}

export function fetchCountry (country) {
  return (dispatch) => {
    dispatch(requestCountry(country))
    return request
      .get(`https://restcountries.eu/rest/v2/name/Ireland?fullText=true`)
      .then(res => {
        console.log(res.body)
        dispatch(receiveCountry(res.body)
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

////////// FOR REFERENCE ONLY /////////////////////////////

// export const RECEIVE_POSTS = 'RECEIVE_POSTS'
// export const REQUEST_POSTS = 'REQUEST_POSTS'

// export const requestPosts = () => {
//   return {
//     type: REQUEST_POSTS
//   }
// }

// export const receivePosts = (posts) => {
//   return {
//     type: RECEIVE_POSTS,
//     posts: posts.map(post => post.data)
//   }
// }



// export function fetchPosts (subreddit) {
//   return (dispatch) => {
//     dispatch(requestPosts())
//     return request
//       .get(`/api/v1/reddit/subreddit/${subreddit}`)
//       .then(res => {
//         dispatch(receivePosts(res.body))
//       })
//       .catch(err => {
//         dispatch(showError(err.message))
//       })
//   }
// }
