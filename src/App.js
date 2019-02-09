import 'bootstrap/dist/css/bootstrap.min.css'
import React, {Component} from 'react';
import './App.css';
import OrderDetails from './Components/OrderDetails'
import AddItems from './Components/AddItems'

class App extends Component {

    foodNames = ['Hamburger', 'Coffee', 'Cheesburger', 'Tea', 'Fries', 'Cola'];

    constructor(props) {
        super(props)
        //TODO make functional generation
        this.state = {
            food: [
                // {Hamburger: {id: 1, name:"Hamburger", price: 100, count: 0}},
                // {Coffee: {id: 2, name:'Coffee', price: 60, count: 0}},
                // {Cheeseburger: {id: 3, name: 'Cheeseburger', price: 120, count: 0}},
                // {Tea: {id: 4, name: 'Tea', price: 30, count: 0}},
                // {Fries: {id: 5, name: 'Fries', price: 80, count: 0}},
                // {Cola: {id: 6, name: 'Cola', price: 50, count: 0}},

                 {id: 1, name:"Hamburger", price: 100, count: 0},
                {id: 2, name:'Coffee', price: 60, count: 0},
                {id: 3, name: 'Cheeseburger', price: 120, count: 0},
                {id: 4, name: 'Tea', price: 30, count: 0},
                {id: 5, name: 'Fries', price: 80, count: 0},
                {id: 6, name: 'Cola', price: 50, count: 0},
            ],
            Total: 0

        }

    }

    addItem = (id) => {
        let index = this.state.food.findIndex(item => item.id === id);
        let food = {...this.state.food[index], count: this.state.food[index].count+1};
        let foods = [...this.state.food];
        let total = this.state.Total;
        let state={...this.state}
        foods[index] = food;

        state.food=foods;
        state.Total=total+this.state.food[index].price;

        this.setState(state);
        console.log(this.state)

    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <div className="row  ">
                        <div className="col-5 ">
                            <OrderDetails foodInfo={this.state}/>
                        </div>
                        <div className="col-7">
                            <AddItems foodInfo={this.state.food} addFunc={this.addItem}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
