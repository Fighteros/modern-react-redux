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
            (err) => console.log(err)
        );
    }

    // React requirement 
    // render get called frequantly - performance -; 
    render() {
        return <div>Latitude: {this.state.lat} </div>  
    }  
}

ReactDOM.render(<App /> , document.querySelector('#root'))