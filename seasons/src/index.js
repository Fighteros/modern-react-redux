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
        // to initialize state
        this.state = {
            lat : null, 
        };
    }

    // React requirement 
    render() {
        // get current physical position
         window.navigator.geolocation.getCurrentPosition(
        // at success of getting location
        (position) => console.log(position),
        // at failure of getting location
        (err) => console.log(err)
    );
        return <div>Latitude: </div>  
    }  
}

ReactDOM.render(<App /> , document.querySelector('#root'))