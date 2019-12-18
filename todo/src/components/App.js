import React, { Component } from 'react';
import TodoList from './TodoList';
import LogIn from '../pages/login';
import Home from '../pages/Home';
import Provider from "react-redux";
import Signup from '../pages/Signup';

class App extends Component {
  render() {
    return (  
      <div className="App">
        <Provider />
        <TodoList />
        <Home />
        <LogIn />
        <signup />
      </div>
    );
  }
}

export default App;