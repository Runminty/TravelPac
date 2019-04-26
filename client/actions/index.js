import request from 'superagent'
export const SHOW_ERROR = 'SHOW_ERROR'
export const REQUEST_COUNTRY = 'REQUEST_COUNTRY'
export const SET_COUNTRY = 'SET_COUNTRY'
export const SET_COUNTRY_CODE = 'SET_COUNTRY_CODE'


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
  // fire some functions here!!!
  console.log("Country code: ", country[0]["alpha2Code"])

  let countryCode = country[0]["alpha2Code"]

  return {
    type: SET_COUNTRY_CODE,
    countryCode: countryCode
  }
  
}

export const setCountry = (country) => {
  console.log("setting country")
  return {
    type: SET_COUNTRY,
    country: country
  }
}

export function fetchCountry (country) {
  return (dispatch) => {
    dispatch(setCountry(country))
    return request
      .get(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`)
      .then(res => {
        dispatch(receiveCountry(res.body))
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
