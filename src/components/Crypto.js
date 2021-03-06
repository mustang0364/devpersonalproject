import React, { Component } from 'react';
import './Crypto.css';
import axios from 'axios';
var NumberFormat = require('react-number-format');

class Crypto extends Component {
  
  

    constructor() {
      super();
      
      this.state = { 
        cryptos:[]
       }
    }
    
    componentDidMount() {
      axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD&e=Coinbase&extraParams=your_app_name')
      .then(res => {
        const cryptos = res.data;
        console.log(cryptos);
        this.setState({cryptos:cryptos})
      })
    }
  
  

  render() {
    return (
      <div className="App">
        {Object.keys(this.state.cryptos).map((key)=>(
     
     
          <div id="crypto-container"> 
          <span className="left">{key}
          <h4>Market Price:</h4>
          </span>
          <h3><span className="right" ><NumberFormat value={this.state.cryptos[key].USD} displayType={'text'} decimalPrecision={2} thousandSeparator={true} prefix={'$'} /></span></h3>
         </div>
         
))}
        
      </div>
    );
  }
}

export default Crypto;
