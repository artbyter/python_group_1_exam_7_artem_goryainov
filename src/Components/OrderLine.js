import React from 'react'

function OrderLine(props) {


    return (
        <div className='w-100'>
            <p className='d-inline-block col-5  text-left'>{props.name}  </p>
            <p className='d-inline-block col-2 p-0 text-left'>x{props.count} </p>
            <p className='d-inline-block col-3 p-0 text-left'>{props.price * props.count}KGS</p>
            <a className='pl-2 text-decoration-none col-1' href='#' onClick={() => props.remFunc(props.id, '-')}><i
                className="fas fa-times"></i></a>
        </div>
    )

}

export default OrderLine