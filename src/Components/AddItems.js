import React from 'react'
import FoodButton from './FoodButton'

function AddItems(props) {


    const foodInfo = props.foodInfo;


    return (
        <div className="card  border border-dark bg-light">
            <div className="card-header bg-info">
                Add Items
            </div>
            <div className="card-body">
                {foodInfo.map((item, index) => {

                    return (<FoodButton
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        addFunc={() => props.addFunc(item.id, '+')}
                    />)
                })
                }


            </div>
        </div>
    )


}

export default AddItems