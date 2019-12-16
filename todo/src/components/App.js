import React, { Component } from 'react';
import TodoList from './TodoList';
import LogIn from '../pages/login';
import Home from '../pages/Home';
import Provider from "react-redux";
class App extends Component {
  render() {
    return (
      
      <div className="App">
        <Provider />
        <TodoList />
        <Home />
        <LogIn />
      </div>
    );
  }
}
export default App;


