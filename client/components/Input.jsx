import React from 'react'
import {connect} from 'react-redux'
import {fetchCountry} from '../actions'


class Input extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            countryInput: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (e) {
        this.setState({
            countryInput: e.target.value
        })
    
    }

    render () {
        return (
            <form>
                <input type='text' placeholder='choose your country' onChange={this.handleChange}></input>
                <button onClick={() => this.props.dispatch(fetchCountry(this.state.countryInput))} type="button">Go!</button>
            </form>
        )
    }
}

export default connect()(Input)