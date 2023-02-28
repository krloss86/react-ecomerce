import React from 'react';
import MedioPagoComponent from '../components/checkout/MedioPagoComponent';
import DatosCarritoComponent from '../components/checkout/DatosCarritoComponent';
import DatosPersonalesComponent from '../components/checkout/DatosPersonalesComponent';
import GenerarOrdenComponent from './../components/checkout/GenerarOrdenComponent';

function CheckoutPage() {

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