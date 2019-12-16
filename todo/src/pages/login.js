import React, { Component } from 'react';

class LogIn extends Component {
constructor(props) {
  super(props);
}
render() {
  return (
    <div>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button>Sign In</button>
    </div>
  )
}
}

export default LogIn;
