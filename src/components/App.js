import React from 'react';
import { Button } from 'react-bootstrap';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      gifts: []
    };
  }

  addGift = () => {
    let { gifts } = this.state;
    let ids = gifts.map(gift => gift.id);
    let max_id = ids.length > 0 ? Math.max(...ids) : 0;
    gifts.push({ id: max_id + 1 });
    this.setState({ gifts });
  }

  render() {
    return (
      <div>
        <h2>Gift Giver</h2>
        <div className='gift-list'>
          {
            this.state.gifts.map(gift => (
              <div key={gift.id}></div>
            ))
          }
        </div>
        <Button className='btn-add' onClick={this.addGift}>Add gift</Button>
      </div>
    )
  }
}

export default App;
