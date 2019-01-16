import React from 'react';
import ReactDOM from 'react-dom';

function showCurrentTime() {
    return (new Date()).toLocaleTimeString();
}
const App = () => {
    const buttonText = {text:'Click Me!'};
    const labelName = 'Enter Name:'
    return (
        <div>
            <label className="label" htmlFor="name">{labelName}</label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>{buttonText.text}</button>
            <div>{showCurrentTime()}</div>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)