import React from 'react'
import FoodButton from './FoodButton'

function AddItems(props) {


    const foodInfo = props.foodInfo;


    return (
        <div className="card  border border-dark">
            <div className="card-header">
                Add Items
            </div>
            <div className="card-body">
                {foodInfo.map((item, index) => {

                        return (<FoodButton
                            key={item.id}
                            name={item.name}
                            price={item.price}
                            addFunc={() => props.addFunc(item.id)}
                        />)
                    })
                }


                </div>
            </div>
            )


            }

            export default AddItems