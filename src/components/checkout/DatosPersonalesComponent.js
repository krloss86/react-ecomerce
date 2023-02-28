import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { CARRITO_REMOVE_ALL } from '../../redux/actions/carrito/actions';

function DatosPersonalesComponent() {

    const navigate = useNavigate();

	const carritoReducer = useSelector(
        (state) => state.carrito
    )

	const dispach = useDispatch();

    const [pais, setPais] = useState("");
	const [direccion,setDireccion] = useState('');
	const [nombre,setNombre] = useState('');
	const [apellido,setApellido] = useState('');
	const [email,setEmail] = useState('');	

    const handleSubmit = (e) => {
		e.preventDefault();
		if(window.confirm('¿Generar Orden?')) {
			fetch('https://jsonplaceholder.typicode.com/posts', {
				method: 'POST',
				body: JSON.stringify(
					{
						pais:pais,
						direccion: direccion,
						nombre: nombre,
						apellido: apellido,
						email: email,
						items: carritoReducer.items
					}
				),
				headers: {
					"Content-type": "application/json; charset=UTF-8"
				}
			}).then(response => {
					return response.json()
				}).then(json => {
					//json.id -> 1

					dispach(CARRITO_REMOVE_ALL);

					const id = 1					
					navigate({pathname: `/checkout-success/${id}`});
			});
		}
	}

    return (
        <>
            <h3 className="text-primary mb-3">
                Datos Personales
            </h3>
            {/* <form className="needs-validation" onSubmit={e => handleSubmit(e)}> */}
                <div className="row g-2">
                    <div className="col-sm-6">
                        <label htmlFor="firstName" className="form-label">
                            Nombre
                        </label>
                        <input type="text"
                            className="form-control"
                            id="firstName"
                            placeholder="carlos"
                            value={nombre}
                            onChange={e => setNombre(e.target.value)} required="" />
                        <div className="invalid-feedback">
                            requerido
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="lastName" className="form-label">
                            Apellido
                        </label>
                        <input name="apellido"
                            type="text"
                            className="form-control"
                            id="lastName"
                            placeholder="lópez"
                            value={apellido}
                            onChange={e => setApellido(e.target.value)} required="" />
                        <div className="invalid-feedback">
                            requerido
                        </div>
                    </div>
                    <div className="col-12">
                        <label htmlFor="email" className="form-label">
                            Email
                            <span className="text-muted">
                                (Optional)
                            </span>
                        </label>
                        <input name="EMAIL" type="email" className="form-control" id="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} required="" />
                        <div className="invalid-feedback">
                            Please enter a valid email address for shipping updates.
                        </div>
                    </div>
                    <div className="col-12">
                        <label htmlFor="address" 
                            className="form-label">
                                Dirección
                        </label>
                        <input name="direccion"
                            type="text"
                            className="form-control"
                            id="address"
                            placeholder="Calle Altura"
                            value={direccion}
                            onChange={e => setDireccion(e.target.value)} required="" />
                        <div className="invalid-feedback">
                            Ingrese dirección
                        </div>
                    </div>
                    {/* <hr className="my-4" /> */}
                    {/* <h3 className="text-primary mb-3">
                        Direccion Envío
                    </h3> */}
                    <div className="col-12">
                        <label htmlFor="country" className="form-label">
                            Pais
                        </label>
                        <select
                            name="PAIS"
                            className="form-select"
                            value={pais}
                            onChange={e => setPais(e.target.value)}
                        >
                            <option value="-1">Seleccione...</option>
                            <option value="2">Argentina</option>
                            <option value="3">Brasil</option>
                        </select>
                        <div className="invalid-feedback">
                            Seleccione país válido
                        </div>
                    </div>
                </div>
            {/* </form> */}
        </>
    )
}

export default DatosPersonalesComponent;