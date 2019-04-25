import React from 'react'
import {connect} from 'react-redux'
import {fetchCountry} from '../actions'

const FetchFlag = ({dispatch}) => (
  <div>
    <button onClick={() => dispatch(fetchCountry('Mexico'))}>
      Fetch Country
    </button>
  </div>
)

function mapStateToProps (state) {
    return {
      country: state.country
    }
  }

export default connect(mapStateToProps)(FetchFlag)