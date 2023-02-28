import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { CARRITO_ADD, CARRITO_UPDATE } from '../../redux/actions/carrito/actions';
import { MSJ_ADD } from '../../redux/actions/mensaje/actions';
export const ArticuloAdd = (props) => {
    
    const {articulo} = props;

	const carritoReducer = useSelector(
		(state) => state.carrito
	);
	
	const [cantidad,setCantidad] = useState(0);

    //para cargar datos en un componentes la primera vez
    //uso useEffect
    useEffect( () => {

		//cantidad del articulo en el carrito
		const itemEnCarrito = carritoReducer.items.filter(item=>item.item.id === articulo.id);

		if(itemEnCarrito.length > 0) {
			setCantidad(itemEnCarrito[0].cantidad);
		}
	},[articulo.id, carritoReducer.items]
	);

	const carritoDispath = useDispatch();

	const submitHandler = () => {

		const existsInCart = carritoReducer.items.find(item=>item.item.id === articulo.id);
		
		let action = CARRITO_ADD;

		if(existsInCart) {
			action = CARRITO_UPDATE;
		}

		action.payload = {
			item:  articulo,
			cantidad : cantidad
		}

		carritoDispath(action);

		//informo que hubo un mensaje
		let actionMsj = MSJ_ADD;
		actionMsj.payload = 'Se ha agregado';

		carritoDispath(actionMsj)
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
