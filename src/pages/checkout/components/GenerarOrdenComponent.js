import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { resetCarrito } from '../../../redux2/states/carrito';
import { resetCheckout } from '../../../redux2/states/checkout';
import { PrivateRoutes } from '../../../guards/routes';

function GenerarOrdenComponent() {
    const [disabled,setDisable] = useState(true);
    const [checkoutSuccess,setCheckoutSuccess] = useState(false);

    const navigate = useNavigate();

    const checkoutReducer = useSelector(
        (state) => state.checkout
    )

    const carritoReducer = useSelector(
        (state) => state.carrito
    )

	const dispach = useDispatch();

    useEffect(() => {
        setDisable(checkoutReducer.datosPersonales.email && checkoutReducer.medioDePago.medioPago)
    },[disabled,checkoutReducer]);

    useEffect(() => {
        if(checkoutSuccess) {
            navigate(`${PrivateRoutes.CHECKOUT_SUCCESS_PATH}${Math.random()}`);
        }
    },[checkoutSuccess,navigate]);

    const handleSubmit = () => {
		if(window.confirm('¿Generar Orden?')) {
			fetch('https://jsonplaceholder.typicode.com/posts', {
				method: 'POST',
				body: JSON.stringify(
					{
						...checkoutReducer,
						...carritoReducer.items
					}
				),
				headers: {
					"Content-type": "application/json; charset=UTF-8"
				}
			}).then(response => {
                return response.json()
            }).then(json => {
                dispach(resetCheckout());
                dispach(resetCarrito());
                setCheckoutSuccess(true);
			});
		}
	}
   
    return (<>
        <button className="w-100 btn btn-primary btn-lg"
            type="submit"
            disabled={!disabled}
            onClick={handleSubmit}>
            Generar Orden
        </button>
    </>
    )
}

export default GenerarOrdenComponent