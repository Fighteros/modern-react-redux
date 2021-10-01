import React from 'react'
import Unspalsh from './api/Unspalsh'
import SearchBar from './components/SearchBar'
/* 
const App = () => {

    return (
        <div className="ui container" style={{ marginTop: '10px' }}>
            <SearchBar />
        </div>
    );
} */

class App extends React.Component {

    state = {
        imgList: []
    }


    onSearchSubmit = async (term) => {
        // axios request to unspalsh api
        /*         axios.get('https://api.unsplash.com/search/photos', {
                    params: {
                        query: term
                    },
                    headers: {
                        Authorization: 'Client-ID N3daQwhSq-dSSBeQ104BYy4Njsz8op04ihSoStWxf5w'
                    }
                }).then((response) => {
                    // console.log(response.data.results)
                }) */

        const response = await Unspalsh.get('/search/photos', {
            params: {
                query: term
            }
        })
        this.setState({ imgList: response.data.results })
    }

    render() {

        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.imgList.length}
            </div>
        );
    }
}

export default App
