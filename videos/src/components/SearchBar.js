import React from 'react'


class SearchBar extends React.Component {
    state = {
        term: ''
    };

    onInputChange = (e) => {
        this.setState({ term: e.target.value })
    };

    onFormSubmit = (e) => {
        e.preventDefault();

        // TODO: Make Sure we Call 
        // callback from parent component
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>
                            Video Search
                        </label>
                        {/* <input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} /> */}
                        <input type="text" value={this.state.term} onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        )
    }
}


export default SearchBar;