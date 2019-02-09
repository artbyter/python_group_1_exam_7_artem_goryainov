import React from 'react'

function OrderTotal(props) {
    console.log("Props total"+props.total)
    return (<div>
        <p className='d-inline-block'>Total price: {props.total}</p>
    </div>)
}

export default OrderTotal