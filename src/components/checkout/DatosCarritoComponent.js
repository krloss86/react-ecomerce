import React from 'react'
import { useState } from 'react';
import {/* useDispatch, */useSelector } from 'react-redux';

function DatosCarritoComponent() {
	const [cupon,setCupon] = useState('');

	const carritoReducer = useSelector(
        (state) => state.carrito
    )
    
	// const dispach = useDispatch();

    const buscarCupon = async () => {
        //consulta a un api rest
        await fetch(`cupon.json`)
        .then(
            (response) => response.json()
        ).then((data) => {
			
            // const newAdd = addAll;
            // newAdd.payload = data
            // dispath(addAll)
        });
    }
    
    return (
        <>
            <h4 className="d-flex justify-content-between align-items-center mb-3">
	          <span className="text-info">
	          	Tu carrito
	          </span>
	          <span className="badge bg-primary rounded-pill">
			  	{carritoReducer.items.length}
	          </span>
	        </h4>
	        <ul className="list-group mb-3">
				{
					carritoReducer.items.map((item,index) => {
						return <li key={index} 
								className="list-group-item d-flex justify-content-between lh-sm">
								<div>
									<h6 className="my-0">{item.item.titulo}</h6>
								</div>
								<span className="text-muted">
									{item.item.precio}
								</span>
							</li>
					})
				}
				<li className="list-group-item d-flex justify-content-between bg-light">
					<div className="text-success">
					<h6 className="my-0">Promo code</h6>
					<small>EXAMPLECODE</small>
					</div>
					<span className="text-success">-$5</span>
				</li>
				<li className="list-group-item d-flex justify-content-between">
					<span>Total ($)</span>
					<strong>
					{
						carritoReducer.items.reduce( (x,y) => x + (y.item.precio * y.cantidad), 0)
					}
					</strong>
				</li>
	        </ul>
	        <form className="card p-2">
	          <div className="input-group">
	            <input type="text" 
					className="form-control" 
					placeholder="Código Promoción"
					value={cupon}
					onChange={e => setCupon(e.target.value)}
				/>
	            <button type="button" className="btn btn-secondary"
					disabled={cupon === ''} 
					onClick={() => buscarCupon()}>
					Aplicar código
				</button>
	          </div>
	        </form>          
        </>
    )
}

export default DatosCarritoComponent;