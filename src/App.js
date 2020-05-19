import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
        <div className="text-center header">
          <h1 className="exchange">Always get the real exchange rate</h1>
          <p className="headerbottomtext">Real time life update on currencies.</p>
        </div>

        <div className="currencyconverter">
          <div className="row">
            <div className="col-md-6">
                <p className="currencyform">From</p>
                <select name="account"  className="form-control currencySelect round">
                      <option>
                      GBP British Pound
                        <div className="row">
                          <div className="col-md-4"></div>
                          <div className="col-md-4"></div>
                          <div className="col-md-4">Logo</div>
                        </div>
                        
                          </option>
                      <option> DOL United state </option>
                      <option> NGR Niger state </option>
                </select>
                <input type="text" value="100" className="form-control currencyInput" placeholder=""/>
                <div className="row">
                  <div className="col-md-3"><p className="currencyform">Current rate</p><p className="currentrate">1.2847</p></div>
                  <div className="col-md-9"><p className="currencyform">Todays change</p><p className="badrate">0.0016 (0.12%)</p></div>
                </div>
            </div>
            <div className="col-md-6">
                <p className="currencyform">To</p>
                  <select name="account"  className="form-control currencySelect round">
                        <option> GBP British Pound </option>
                  </select>
                <input type="text" value="100" className="form-control currencyInput" placeholder=""/>
                <div className="row">
                  
                </div>
            </div>
          </div>
        </div>
        
    </div>
  );
}

export default App;
