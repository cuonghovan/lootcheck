import React from 'react';
import { connect } from 'react-redux';
import { fetchBitcoin } from '../actions/bitcoin';

export class Loot extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBitcoin();
  }

  computeBitcoin() {
    if(Object.keys(this.props.bitcoin).length === 0) return '';
    return this.props.balance / parseInt(this.props.bitcoin.bpi.USD.rate.replace(',', ''), 10);
  }

  render() {
    return(
      <h3>Bitcoin balance: {this.computeBitcoin()}</h3>
    );
  }
}

const mapStateToProps = state => ({
  balance: state.balance,
  bitcoin: state.bitcoin
});

const mapDispatchToProps = {
  fetchBitcoin
};

export default connect(mapStateToProps, mapDispatchToProps)(Loot);
