import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react';
import './App.css';
import OrderDetails from './Components/OrderDetails'
import AddItems from './Components/AddItems'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-5">
              <OrderDetails/>
            </div>
            <div className="col-7">
              <AddItems/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
