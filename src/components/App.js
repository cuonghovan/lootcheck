import React from 'react';
import { max_number } from '../helpers/number';
import { Button } from 'react-bootstrap';
import Gift from './Gift';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      gifts: []
    };    
  }

  addGift = () => {
    let { gifts } = this.state;
    let max_id = max_number(gifts.map(gift => gift.id));
    gifts.push({ id: max_id + 1 });
    this.setState({ gifts });
  }

  removeGift = (id) => {
    let gifts = this.state.gifts.filter(gift => gift.id !== id);
    this.setState({gifts});
  }

  render() {
    return (
      <div>
        <h2>Gift Giver</h2>
        <div className='gift-list'>
          {
            this.state.gifts.map(gift => (
              <Gift key={gift.id} gift={gift} removeGift={this.removeGift} />
            ))
          }
        </div>
        <Button className='btn-add' onClick={this.addGift}>Add gift</Button>
      </div>
    )
  }
}

export default App;
