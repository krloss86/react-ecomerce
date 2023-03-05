import React from 'react';
import MedioPagoComponent from './components/MedioPagoComponent';
import DatosCarritoComponent from './components/DatosCarritoComponent';
import DatosPersonalesComponent from './components/DatosPersonalesComponent';
import GenerarOrdenComponent from './components/GenerarOrdenComponent';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import {useEffect} from 'react';

function CheckoutPage() {
    const navigate = useNavigate();

	const carritoReducer = useSelector(
        (state) => state.carrito
    )
	
	useEffect(()=>{
		if(carritoReducer.items.length === 0) {
			navigate('/',{replace:true});
		}
	},[]);

	return (
		<>
			<div className="row">
				<div className="col-md-5 col-lg-4 order-md-last">
					<DatosCarritoComponent />
				</div>
				<div className="col-md-7 col-lg-8">
					<DatosPersonalesComponent />
				</div>
			</div>
			<div className="row">
				<div className="col col-lg-8 col-xxl-6">
					<MedioPagoComponent />
				</div>
			</div>
			<div className="row">
				<div className="col mt-2">
					<GenerarOrdenComponent/>
				</div>
			</div>
		</>
	)
}

export default CheckoutPage;