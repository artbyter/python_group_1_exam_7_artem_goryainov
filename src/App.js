import 'bootstrap/dist/css/bootstrap.min.css'
import React, {Component} from 'react';
import './App.css';
import OrderDetails from './Components/OrderDetails'
import AddItems from './Components/AddItems'

class App extends Component {

    foodNames = ['Hamburger', 'Coffee', 'Cheeseburger', 'Tea', 'Fries', 'Cola'];
    foodPrices=[100,60,120,30,80,50];
    constructor(props) {
        super(props)
        //TODO make functional generation
        let items=[];
        this.foodNames.forEach((item,index)=>items.push({id:index, name:item,price:this.foodPrices[index],count:0}))
        this.state = {
            food:items,
            Total: 0

        }


    }

    changeItem = (id, op) => {
        let index = this.state.food.findIndex(item => item.id === id);
        let food = {...this.state.food[index]};
        let foods = [...this.state.food];
        let total = this.state.Total;
        let state = {...this.state}

        if (op == '+') {
            food.count++;
            state.Total = total + this.state.food[index].price;
        } else {
            food.count--;
            state.Total = total - this.state.food[index].price;
        }
        foods[index] = food;
        state.food = foods;


        this.setState(state);
        console.log(this.state)

    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <div className="row ">
                        <div className="col-5 ">
                            <OrderDetails foodInfo={this.state} remFunc={this.changeItem}/>
                        </div>
                        <div className="col-7">
                            <AddItems foodInfo={this.state.food} addFunc={this.changeItem}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
