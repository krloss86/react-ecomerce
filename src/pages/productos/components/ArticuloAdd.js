import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCarrito, updateCarrito } from '../../../redux/states/carrito';
import { createMensaje } from '../../../redux/states/mensaje';

export const ArticuloAdd = (props) => {
	
	const {articulo} = props;

	const dispatcher = useDispatch();

	const carritoReducer = useSelector(
		(state) => state.carrito
	);
	
	const [cantidad,setCantidad] = useState(0);

    useEffect( () => {

		//cantidad del articulo en el carrito
		const itemEnCarrito = carritoReducer.items.filter(item=>item.item.id === articulo.id);

		if(itemEnCarrito.length > 0) {
			setCantidad(itemEnCarrito[0].cantidad);
		}
	},[articulo.id, carritoReducer]);


	const submitHandler = () => {
		const existsInCart = carritoReducer.items.find(item=>item.item.id === articulo.id);
		
		if(existsInCart) {
			dispatcher(updateCarrito({
				item:  articulo,
				cantidad : cantidad
			}));
		}else {
			dispatcher(addCarrito({
				item:  articulo,
				cantidad : cantidad
			}));
		}
		
		dispatcher(createMensaje('Se ha agregado'));
	}

	const increment = () => {
		setCantidad(cantidad + 1);
	}

	const decrement = () => {	
		if(cantidad <= 0) {
			setCantidad(0);
		}else {
			setCantidad(cantidad - 1);
		}
	}

    return (
		<>
			<div className="input-group pb-1 justify-content-center">
				<div className="col-auto">
					<button className="btn btn-warning" type="button"
						onClick={() => decrement()}
						disabled={cantidad===0}>
							<i className="bi bi-cart-dash"></i>
					</button>
				</div>
				<div className="col">
					<label htmlFor="cantidad" className="visually-hidden">Cantidad</label>
					<input type="text" className="form-control" placeholder="cantidad" aria-label="" aria-describedby="btnAdd"
						min="0" max="999"
						value={cantidad}
						onChange={(e) => setCantidad(e.target.value)} />
				</div>
				<div className="col-auto">
					<button type="button" className="btn btn-success btnAdd"
						onClick={() => increment()}>
						<i className="bi bi-cart-plus"></i>
					</button>
				</div>
			</div>
			<button type="button" className="btn btn-primary w-100" 
				onClick={()=>submitHandler()}
				disabled={cantidad === 0 || cantidad >= 999}>
				<i className="bi bi-cart-plus"></i>
				Agregar
			</button>
		</>
    )
}
