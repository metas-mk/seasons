import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    // every time a component is instantiated, the constructor method is invoked
    constructor(props) {
        super(props);

        // initialize state
        // THIS IS THE ONLY TIME we do direct assignement to this.statte!!
        this.state = {lat: null};

        window.navigator.geolocation.getCurrentPosition(
            position => {
                // we called setState!!!
                this.setState({lat: position.coords.latitude});
            },
            //console.log(position), // success callback
            err => console.log(err) // error callback
        );
    }
    
    // React says we have to define render!! If not en error will be thrown
    render() {
        return <div>Latitude: {this.state.lat}</div>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));