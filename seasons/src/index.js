import React from 'react'
import ReactDOM from 'react-dom'

/* 
const App = () => {

    // get current physical position
    window.navigator.geolocation.getCurrentPosition(
        // at success of getting location
        (position) => console.log(position),
        // at failure of getting location
        (err) => console.log(err)
    );

  return <div>
      Latitude: 
  </div>  
}; */


class App extends React.Component {
    
    constructor(props) {
        super(props);
        // to initialize state and only time we do direct assignment
        // to the state
        this.state = {
            lat : null,
            errorMessage: ''
        };

        // get current physical position
        window.navigator.geolocation.getCurrentPosition(
            // at success of getting location
            (position) => {
                // we set State
                this.setState({
                    lat: position.coords.latitude
                });
            },
            // at failure of getting location
            // when calling setState we just write things that we want to update
            //  anyother thing in the object will not be touched!
            (err) => {
                this.setState({
                    errorMessage : err.message    
                })
            }
        );
    }
    
/*     componentDidMount() {
        console.log('Component was rendered to the screen')
    }
    
    componentDidUpdate() {
        console.log('Component was updated - it rerendered')
    } */

    // React requirement 
    // render get called frequantly - performance -; 
    render() {
        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage} </div>
        }

        if(!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>
        }

        return <div>Loading !</div>
    }  
}

ReactDOM.render(<App /> , document.querySelector('#root'))