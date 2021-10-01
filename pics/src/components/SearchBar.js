import React, { Component } from 'react'


class SearchBar extends Component {
    // fix for the this problemm which is to bind the function
    /*     constructor(props) {
            super(props)
            this.onFormSubmit = this.onFormSubmit.bind(this)
        } */

    state = {
        term: ''
    }
    /* 
        onFormSubmit(event) {
            event.preventDefault()
            console.log(this.state.term)
    
        }
     */

    // another way to fix the problem

    /*     onFormSubmit(event) {
            event.preventDefault()
            console.log(this.state.term)
        } */

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label >Image Search</label>
                        {/* don't call the method like () it will be called  */}
                        {/* each time the component renders we just pass a ref */}
                        <input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} />
                    </div>
                </form>
            </div>
        );
    }
}


export default SearchBar
