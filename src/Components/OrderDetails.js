import React from 'react'
import OrderLine from './OrderLine'
import OrderTotal from './OrderTotal'

function OrderDetails(props) {

    return (
        <div className="card border border-dark">
            <div className="card-header">
                Order details
            </div>
            <div className="card-body">
                <p>Order is empty! Please add some items</p>
                


            </div>
        </div>
    )


}

export default OrderDetails