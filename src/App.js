import React, {Component} from 'react';
// import ExchangedCurrency from './components/CurrencyConverter';
import './App.css';

import CurrencyHOC from './components/CurrencyConverter';

class App extends Component {
  render() {
    return (
      <>
        <h2>Higher Order Component</h2>
        <CurrencyHOC />
      </>
    )
  }
}

export default App;