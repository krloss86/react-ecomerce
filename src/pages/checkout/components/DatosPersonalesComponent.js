import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDatosPersonales, resetDatosPersonales } from '../../../redux/states/checkout';
import DatosPersonales from '../../../components/secure/components/DatosPersonales';

function DatosPersonalesComponent() {

	const dispach = useDispatch();

    const [pais, setPais] = useState("");
	const [direccion,setDireccion] = useState('');
	const [nombre,setNombre] = useState('');
	const [apellido,setApellido] = useState('');
	const [email,setEmail] = useState('');	

    useEffect(()=>{
        if(!!pais && !!direccion && !!nombre && !!apellido && !!email) {
            dispach(addDatosPersonales({datosPersonales:{
                pais: pais,
                direccion: direccion,
                nombre: nombre,
                apellido: apellido,
                email:email
            }}))
        }else {
            dispach(resetDatosPersonales());
        }
    },[pais,direccion,nombre,apellido,email,dispach]);

    return (
        <>
            <h3 className="text-primary mb-3">
                Datos Personales
            </h3>
            {/* <form className="needs-validation" onSubmit={e => handleSubmit(e)}> */}
                <div className="row g-2">
                    <DatosPersonales showProfile={false}/>
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