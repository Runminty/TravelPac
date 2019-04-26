import React from 'react'
import {connect} from 'react-redux'
import {requestFlag} from '../actions'

const Flag = (props) => {
    if (props.flagURL) {
        return (<div className="flag">
            Flag goes here!
          </div>)
    } else return <div>No Flag div yet</div>
  
}

function mapStateToProps (state) {
    return {
      flagURL: state.FlagURL
    }
  }

export default connect(mapStateToProps)(Flag)