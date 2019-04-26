import request from 'superagent'
export const SHOW_ERROR = 'SHOW_ERROR'
// export const RECEIVE_COUNTRYINFO = 'RECEIVE_COUNTRYINFO'            //nanz old country api
export const RECEIVE_NEWS = 'RECEIVE_NEWS'
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

export const receiveCountry = (country) => {
  console.log("This is the country you chose: ", country)
  // fire some functions here!!!
  let countryCode = country[0]["alpha2Code"]

  return {
    type: SET_COUNTRY_CODE,
    countryCode: countryCode
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
  console.log("setting country", country)
  return {
    type: SET_COUNTRY,
    country: country
  }
}

export function fetchCountry (country) {                   
  return (dispatch) => {
    dispatch(setCountry(country))
    return request
      .get(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`)  //countries API
      .then(res => {
        dispatch(setCountryCode(res.body))
        dispatch(setFlagURL(res.body))
        dispatch(receiveCountry(res.body))
        let countryCode = res.body[0]["alpha2Code"]
        return (countryCode)
      })
      .then(countryCode => {
        console.log("countrycode after then", countryCode) 
        return request
        .get(`/api/v1/countries/news/${countryCode}`)     //news API
      })
      .then(res => {
        dispatch(receiveNews(res.body))
      })  
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}


export const receiveNews = (articlesArr) => {
  console.log("The news is:", articlesArr)
  return {
    type: RECEIVE_NEWS,
    news: articlesArr.map(article => ({
      source: article.source.name,
      title: article.title,
      image: article.urlToImage,
      date: article.publishedAt,
      description: article.description,
      link: article.url
     }))
  }
}

// OLD FETCH NEWS
// export function fetchNews (country) {
//   return (dispatch) => {
//     dispatch(receiveCountry(country))
//     let countryCode = country[0]["alpha2Code"]

//     console.log('Fetching news of', country, 'whose code is', countryCode)

//     return request
//       .get(`/api/v1/countries/news/${countryCode}`)
//       .then(res => {
//         dispatch(receiveNews(res.body))
//       })
//       .catch(err => {
//         dispatch(showError(err.message))
//       })
//   }
// }

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