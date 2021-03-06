import React from 'react';
import './App.css';


const Form = props => {
    return (
            <input type="text"
            autoFocus
            placeholder="Search for a city..."
            value={props.value}
            onChange={props.change}
            />
     );
}

export default Form;