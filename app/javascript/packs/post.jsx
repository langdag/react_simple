import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import postStore from '../stores/postStore';
import NavBar from '../containers/NavBar';

class App extends Component {
  render(){
    return <NavBar />;
  }
}


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Provider store={postStore}><App/></Provider>,document.getElementById('root'))
})

