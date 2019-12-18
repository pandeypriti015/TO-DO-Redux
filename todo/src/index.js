import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import { App } from './components';
import reducers from './reducers';
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import TodoList from "./components/TodoList";
import Signup from './pages/Signup';


ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Router>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/todo" component={TodoList} />
      <Route exact path="/signin" component={Signup} />

      <App />
      </Switch>
    </Router>
  </Provider>,
  
  document.getElementById('root', App)
);
