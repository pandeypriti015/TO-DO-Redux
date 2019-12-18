import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class LogIn extends Component {
constructor(props) {
  super(props);
}
render() {
  return (
    
    <div>
        <input type="email" placeholder="Email" /><br />
        <input type="password" placeholder="Password" /><br />
        <button>Sign In</button><br />
        <Link to="/signin">New User? Register Here</Link>
    </div>
  )
}
}

export default LogIn;

