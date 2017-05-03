import React, { Component } from 'react';



export default class Account extends Component {
  constructor (props) {
    super()
    this.state = {
      balance: 0
    }
  }
  handleDepositClick (e) {
    console.log("click button",e);
    let amount = parseInt(this.refs.money.value);
    let newAmount = this.state.balance + amount;
    this.setState({
      balance: newAmount
    })
    this.refs.money.value = '';
  }
  handleWithdrawClick (e) {
    console.log("click button",e);
    let amount = parseInt(this.refs.money.value);
    let newAmount = this.state.balance - amount;
    this.setState({
      balance: newAmount
    })
    this.refs.money.value = '';
  }

  render() {
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance">${this.state.balance}</div>
        <input ref = "money" type="text" placeholder="enter an amount" />
        <input type="button" value="Deposit" onClick={(e) => this.handleDepositClick(e)}/>
        <input type="button" value="Withdraw" onClick={(e) => this.handleWithdrawClick(e)}/>
      </div>
    )
  }
}
