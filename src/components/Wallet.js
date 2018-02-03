import React from 'react';
import { connect } from 'react-redux';
import { setBalanceAction, depositAction, withdrawAction } from '../actions/balance';

export class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      balance: undefined
    }
  }

  onBalanceChange = event => this.setState({balance: parseInt(event.target.value, 10)});  

  setBalance = () => this.props.setBalanceAction(this.state.balance);

  depositBalance = () => this.props.depositAction(this.state.balance);

  withdrawBalance = () => this.props.withdrawAction(this.state.balance);

  render() {
    return (
      <div>
        <h1 className='balance'>Balance: {this.props.balance}</h1>
        <br/>
        <input className='balance-input' onChange={this.onBalanceChange} />
        <button className='set-btn' onClick={this.setBalance}>Set</button>
        <button className='deposit-btn' onClick={this.depositBalance}>Deposit</button>
        <button className='withdraw-btn' onClick={this.withdrawBalance}>Withdraw</button>
      </div>
    )
  }
}

const mapDispatchToProps = {
  setBalanceAction,
  depositAction,
  withdrawAction
}

export default connect((state) => ({ balance: state.balance }), mapDispatchToProps)(Wallet);
