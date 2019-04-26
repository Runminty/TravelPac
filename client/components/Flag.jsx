import React from 'react'
import {connect} from 'react-redux'

const Flag = (props) => {
    if (props.country) {
      console.log("Rendering flag", props.flagURL)
      return (
        <div className="flagBox">
            <div className="column2">
            <div className= "flag">
   
         <h3>{props.country}
          <img src={props.flagURL} width="250 "/></h3> 
        </div>
        </div>
        </div>
      )
    } else return <div></div>
}

function mapStateToProps (state) {
    return {
      flagURL: state.flagURL,
      country: state.country
    }
  }

export default connect(mapStateToProps)(Flag)



