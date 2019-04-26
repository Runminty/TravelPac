import React from 'react'
import {connect} from 'react-redux'
import {requestNews} from '../actions'

const News = ({news}) => {
    
    return (
    <div>
        {news.map(article => 

        <div className="countryNewsBox">
        <img src={article.image} width="300"/><br></br>
       
        <a href={article.link}> <h3>{article.title} </h3></a>
        <p>{article.source} ({article.date})</p> 
        <p>{article.description}</p>
        <br></br>
        </div>

        )}
    </div>
    )
  
}

function mapStateToProps (state) {
    return {
      news: state.news
    }
  }

export default connect(mapStateToProps)(News)