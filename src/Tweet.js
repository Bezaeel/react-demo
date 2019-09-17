import React from 'react';
import './App.css';

// access props variable
function Tweet(props){
    return(
        <div className="tweet">
            <h3>{props.name}</h3>
            <p>This is a random tweet</p>
            <h3>{props.likes}</h3>
        </div>
    );
}

export default Tweet;