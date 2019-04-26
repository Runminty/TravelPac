import React from 'react'
import {connect} from 'react-redux'

const Languages = (props) => {

    if (props.country) {
        return (
            props.languages.map(language => {
                return <p>{language.name}</p>
            })
        )
    } else return <div></div>
}

function mapStateToProps (state) {
    return {
      languages: state.languages,
      country: state.country
    }
  }

export default connect(mapStateToProps)(Languages)