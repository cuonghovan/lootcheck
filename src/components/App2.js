import React from 'react';

import './App2.scss';

export default class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 3
    };
  }

  render() {
    return (
      <div>
        <h2>You are awesome!!!</h2>
        <p>{this.state.count}</p>
        <button onClick={() => this.setState({count: this.state.count + 1})}>+</button>
      </div>
    );
  }
}
