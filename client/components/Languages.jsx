import React from 'react'
import {connect} from 'react-redux'

const Languages = (props) => {

    if (props.country) {


        console.log(props.languages)

        // languageArr.map(language => {
        //     console.log(language.name)
        // })

        return (
            <div>
            Languages will go here!
            </div>
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