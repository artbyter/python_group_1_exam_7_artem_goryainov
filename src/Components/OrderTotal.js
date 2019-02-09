import React from 'react'

function OrderTotal(props) {
    console.log("Props total" + props.total)
    return (<div>
        <p className='d-inline-block pt-2'>Total price: {props.total}KGS</p>
    </div>)
}

export default OrderTotal