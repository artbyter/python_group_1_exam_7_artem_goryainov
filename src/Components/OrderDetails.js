import React from 'react'
import OrderLine from './OrderLine'
import OrderTotal from './OrderTotal'


function OrderDetails(props) {
    const empty = props.foodInfo.Total == 0 ? <p>Order is empty! Please add some items</p> : null
    const total = props.foodInfo.Total != 0 ? <OrderTotal total={props.foodInfo.Total}/> : null
    console.log(props.foodInfo.Total)
    return (
        <div className="card border border-dark bg-light">
            <div className="card-header bg-info">
                Order details
            </div>
            <div className="card-body">
                {empty}
                <div className="row no-gutters">
                    {props.foodInfo.food.map((item, index) => {
                        if (item.count != 0) {
                            return (<OrderLine
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                price={item.price}
                                count={item.count}
                                remFunc={props.remFunc}
                            />)

                        }
                    })
                    }
                </div>
            </div>
            <div className='card-footer'>
                {total}
            </div>
        </div>
    )


}

export default OrderDetails