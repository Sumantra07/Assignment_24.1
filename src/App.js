import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';

class App extends Component {
  render() {
    return (
      <div className="App">
      // Calling Dumb component
      <UserList/>
      </div>
    );
  }
}

export default App;
