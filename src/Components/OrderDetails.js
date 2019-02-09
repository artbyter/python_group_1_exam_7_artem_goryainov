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
                <OrderLine/>
                <OrderLine/>
                <OrderLine/>
                <OrderLine/>
                <OrderLine/>
                <OrderTotal/>


            </div>
        </div>
    )


}

export default OrderDetails