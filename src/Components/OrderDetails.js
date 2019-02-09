import React from 'react'
import OrderLine from './OrderLine'
import OrderTotal from './OrderTotal'

class OrderDetails extends React.Component{

    render() {
        return(
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

}

export default OrderDetails