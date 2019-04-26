import request from 'superagent'
export const SHOW_ERROR = 'SHOW_ERROR'
export const REQUEST_COUNTRY = 'REQUEST_COUNTRY'
export const SET_COUNTRY = 'SET_COUNTRY'
export const SET_COUNTRY_CODE = 'SET_COUNTRY_CODE'
export const SET_FLAG_URL = 'SET_FLAG_URL'


export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export const setCountryCode = (country) => {

  let countryCode = country[0]["alpha2Code"]

  return {
    type: SET_COUNTRY_CODE,
    countryCode: countryCode
  } 
}

export const setFlagURL = (country) => {

  console.log(country[0]["flag"])
  let flagURL = country[0]["flag"]

  return {
    type: SET_FLAG_URL,
    flagURL: flagURL
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
        dispatch(setCountryCode(res.body))
        dispatch(setFlagURL(res.body))
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
