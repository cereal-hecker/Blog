import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import AppWrite from "./components/AppWrite";

var writingPost = false;

if (!writingPost){
    ReactDOM.render(<App />, document.getElementById('root'));
}

else{
    ReactDOM.render(<AppWrite />, document.getElementById('root'));
}
