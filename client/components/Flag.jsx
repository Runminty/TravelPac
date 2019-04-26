import React from 'react'
import {connect} from 'react-redux'

const Flag = (props) => {
  console.log(props)
    if (props.country) {
      console.log("Rendering flag", props.flagURL)
      return (
        <div>
          {props.country}
          <img src={props.flagURL}/>
        </div>
      )
    } else return <div>No Flag div yet</div>
}

function mapStateToProps (state) {
    return {
      flagURL: state.flagURL,
      country: state.country
    }
  }

export default connect(mapStateToProps)(Flag)