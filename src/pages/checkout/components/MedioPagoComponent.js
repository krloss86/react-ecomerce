import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMedioDePago } from '../../../redux/states/checkout';

function MedioPagoComponent() {
    const dispath = useDispatch();

    const [medioPago,setMedioPago] = useState('');
    const [tarjetaNombre,setTarjetaNombre] = useState('');
    const [tarjetaNumero,setTarjetaNumero] = useState('');
    const [tarjetaCodigoSeguridad,setTarjetaCodigoSeguridad] = useState('');
    const [tarjetaVencimiento,setTarjetaVencimiento] = useState('');

    useEffect(()=>{
        if(medioPago === 'tarjeta') {
            if(!!medioPago && !!tarjetaNombre && !!tarjetaNumero && !! tarjetaCodigoSeguridad && !!tarjetaVencimiento) {
                dispath(addMedioDePago({medioDePago: {
                    medioPago,
                    tarjetaNombre,
                    tarjetaNumero,
                    tarjetaCodigoSeguridad,
                    tarjetaVencimiento
                }}))
            }
        }
        if(medioPago === 'efectivo') {
            dispath(addMedioDePago({medioDePago: {
                medioPago,
            }}))
        }
    },[medioPago,tarjetaNumero, tarjetaNombre,tarjetaCodigoSeguridad,tarjetaVencimiento,dispath]);

    return (<>
        <h4 className="mb-3 text-primary">
            Medio de Pago
        </h4>
        <div className="form-check">
            <input type="radio"
                name="medioPago"
                className="form-check-input ccCheckbox"
                required=""
                onChange={(e) => setMedioPago('efectivo')}
            />
            <label className="form-check-label" htmlFor="credit">Efectivo</label>
        </div>
        <div className="form-check">
            <input type="radio"
                name="medioPago"
                className="form-check-input ccCheckbox"
                required=""
                onChange={e => setMedioPago('tarjeta')}
            />
            <label className="form-check-label" htmlFor="credit">Tarjeta</label>
        </div>
        { 'tarjeta' === medioPago &&
            <div className="row" id="ccRow">
                <div className="col-md-7">
                    <label htmlFor="cc-name"
                        className="form-label">
                        Nombre en Tarjeta de Crédito
                    </label>
                    <input type="text"
                        className="form-control cc"
                        id="cc-name"
                        placeholder="" 
                        value={tarjetaNombre}
                        onChange={(e)=>setTarjetaNombre(e.target.value)}/>
                    <small className="text-muted">Nombre completo como figura en la tarjeta de crédito</small>
                    <div className="invalid-feedback">
                        El nombre es requerido
                    </div>
                </div>
                <div className="col-md-5">
                    <label htmlFor="cc-number" className="form-label">
                        Número de tarjeta
                    </label>
                    <input type="number" className="form-control cc" 
                        id="cc-number" 
                        placeholder="" 
                        value={tarjetaNumero}
                        onChange={(e)=>setTarjetaNumero(e.target.value)}/>
                    <div className="invalid-feedback">
                        Número de tarjeta es requerido
                    </div>
                </div>
                <div className="col-md-3">
                    <label htmlFor="cc-expiration"
                        className="form-label">
                        Vencimiento
                    </label>
                    <input type="text"
                        className="form-control cc"
                        id="cc-expiration"
                        placeholder=""
                        value={tarjetaVencimiento} 
                        onChange={(e)=>setTarjetaVencimiento(e.target.value)}/>
                    <div className="invalid-feedback">
                        Vencimiento es requido
                    </div>
                </div>
                <div className="col-md-3">
                    <label htmlFor="cc-cvv"
                        className="form-label">
                        Código Seguridad
                    </label>
                    <input type="text"
                        className="form-control cc"
                        id="cc-cvv"
                        placeholder="" 
                        value={tarjetaCodigoSeguridad}
                        onChange={(e)=>setTarjetaCodigoSeguridad(e.target.value)}/>
                    <div className="invalid-feedback">
                        código de seguridad es requerido
                    </div>
                </div>
            </div>
        }
    </>
    )
}

export default MedioPagoComponent