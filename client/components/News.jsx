import React from 'react'
import {connect} from 'react-redux'
import {requestNews} from '../actions'

const News = ({news}) => {
    
    return (
    <div>
        {news.map(article => 

        <div>
        <img src={article.image} /><br></br>
       
        <a href={article.link}> <h1>{article.title} </h1></a>
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