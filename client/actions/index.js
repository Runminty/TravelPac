import request from 'superagent'
export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_COUNTRYINFO = 'RECEIVE_COUNTRYINFO'
export const RECEIVE_NEWS = 'RECEIVE_NEWS'


export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}


export const receiveNews = (articlesArr) => {
  return {
    type: RECEIVE_NEWS,
    article: articlesArr.map(article => {
      source = article.source.name,
      title = article.title,
      image = article.URLtoImage,
      date = article.date,
      description = article.description
     })
  }
}

export function fetchNews (countrycode) {
  return (dispatch) => {
    
    return request
      .get(`/api/v1/countries/news/${countrycode}`)
      .then(res => {
        dispatch(receiveNews(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

/// NANZ's OLD COUNTRY API ///
// export const receiveCountryinfo = (countryObj) => {
//   return {
//     type: RECEIVE_COUNTRYINFO,
//     name: countryObj.name,
//     region: countryObj.region.value,
//     capitalCity: countryObj.capitalCity

//   }
// }

// export function fetchCountry (countrycode) {
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