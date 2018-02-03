import React from 'react';
import Wallet from './Wallet';
import Loot from './Loot';

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Loot check</h2>
        <hr/>
        <Wallet />
        <hr />
        <Loot />
      </div>
    );
  }
}

export default App;
