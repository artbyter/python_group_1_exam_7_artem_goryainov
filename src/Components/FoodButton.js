import React from 'react'

function FoodButton(props) {


        return (
            <div className="foodButton border border-dark rounded-pill m-1 d-inline-block" onClick={props.addFunc}>
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-3">
                            <h1 className="fas fa-utensils pl-3 pt-3 "></h1>
                        </div>
                        <div className="col-9">
                            <h5 className="font-weight-bold pt-2">{props.name}</h5>
                            <h6>Price: {props.price} KGS</h6>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default FoodButton