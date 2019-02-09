import React from 'react'

function OrderLine(props) {


    return (
        <div>
            <p className='d-inline-block'>{props.name}  x{props.count} {props.price*props.count}KGS</p>
            <a className='pl-2' href='#'><i className="fas fa-times"></i></a>
        </div>
    )

}

export default OrderLine