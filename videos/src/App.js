import React from 'react'
import youtube from './apis/youtube';
import SearchBar from './components/SearchBar';


class App extends React.Component {

    onTermSubmit = (term) => {
        youtube.get('/search', {
            params: {
                q: term
            }
        });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
            </div>
        );
    }
}


export default App;