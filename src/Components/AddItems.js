import React from 'react'
import FoodButton from './FoodButton'

class AddItems extends React.Component{

    render() { return (
        <div className="card  border border-dark">
            <div className="card-header">
                Add Items
            </div>
            <div className="card-body">
                <FoodButton/>
                <FoodButton/>
                <FoodButton/>
                <FoodButton/>
                <FoodButton/>
                <FoodButton/>

            </div>
        </div>)
    }

}

export default AddItems