import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import postStore from '../stores/postStore';
import Nav from '../components/Nav';
import './application.scss';

class App extends Component {
  render(){
    return <Nav />;
  }
}


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Provider store={postStore}><App/></Provider>,document.getElementById('root'))
})

