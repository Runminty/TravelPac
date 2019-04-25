import request from 'superagent'
export const SHOW_ERROR = 'SHOW_ERROR'


export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}


export const RECEIVE_COUNTRY = 'RECEIVE_COUNTRY'
// export const REQUEST_POSTS = 'REQUEST_COUNTRY'

// export const requestPosts = () => {
//   return {
//     type: REQUEST_POSTS
//   }
// }

// export const receiveCountryinfo = (country) => {
//   return {
//     type: RECEIVE_COUNTRY,
//     name: country.map(info => )
//   }
// }



// export function fetchPosts (countrycode) {
//   return (dispatch) => {

//     return request
//       .get(`/api/v1/countries/country/${countrycode}`)
//       .then(res => {
//         dispatch(receiveCountryinfo(res.body))
//       })
//       .catch(err => {
//         dispatch(showError(err.message))
//       })
//   }
// }
