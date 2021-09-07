// import the React and ReacDom libraries

// ES2015 modules 
import React from 'react';
import ReactDOM from 'react-dom';

// hot reload problem fix at index.js
if (module.hot) {
    module.hot.accept();
}
// CommanJS
// const React = require('react');

// Create a React component

const App = () => {
    const buttonText = { text: 'Click me' };
    const labelText = 'Enter name:';
    return (
        <div>
            <label className="label" htmlFor="name">
                {labelText}</label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: "blue", color: "white" }}>
                {buttonText.text}</button>
        </div>
    )
}


// Take the react componenet and show it on the Screen

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);