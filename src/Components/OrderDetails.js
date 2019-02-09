import React from 'react'
import OrderLine from './OrderLine'
import OrderTotal from './OrderTotal'


function OrderDetails(props) {
    const empty = props.foodInfo.Total == 0 ? <p>Order is empty! Please add some items</p> : null
    const total = <OrderTotal total={props.foodInfo.Total}/>
    console.log(props.foodInfo.Total)
    return (
        <div className="card border border-dark">
            <div className="card-header">
                Order details
            </div>
            <div className="card-body">
                {empty}

                {props.foodInfo.food.map((item, index) => {
                    if (item.count != 0) {
                        return (<OrderLine
                            key={item.id}
                            name={item.name}
                            price={item.price}
                            count={item.count}
                        />)

                    }
                })
                }


            </div>
            <div className='card-footer'>
                <OrderTotal total={props.foodInfo.Total}/>
            </div>
        </div>
    )


}

export default OrderDetails