import React from 'react'
import { useState } from 'react';

function MedioPagoComponent() {

    const [medioPago,setMedioPago] = useState('');

    return (<>
        <h4 className="mb-3 text-primary">
            Medio de Pago
        </h4>
        <div className="form-check">
            <input type="radio"
                name="medioPago"
                className="form-check-input ccCheckbox"
                value={medioPago}
                required=""
                onChange={e => setMedioPago('efectivo')}
            />
            <label className="form-check-label" htmlFor="credit">Efectivo</label>
        </div>
        <div className="form-check">
            <input type="radio"
                name="medioPago"
                className="form-check-input ccCheckbox"
                value={medioPago}
                required=""
                onChange={e => setMedioPago('tarjeta')}
            />
            <label className="form-check-label" htmlFor="credit">Tarjeta</label>
        </div>
        <div className="row" id="ccRow">
            <div className="col-md-7">
                <label htmlFor="cc-name"
                    className="form-label">
                    Nombre en Tarjeta de Crédito
                </label>
                <input type="text"
                    className="form-control cc"
                    id="cc-name"
                    placeholder="" />
                <small className="text-muted">Nombre completo como figura en la tarjeta de crédito</small>
                <div className="invalid-feedback">
                    El nombre es requerido
                </div>
            </div>
            <div className="col-md-5">
                <label htmlFor="cc-number" className="form-label">Número de tarjeta</label>
                <input type="text" className="form-control cc" id="cc-number" placeholder="" />
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
                    placeholder="" />
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
                    placeholder="" />
                <div className="invalid-feedback">
                    código de seguridad es requerido
                </div>
            </div>
        </div>
    </>
    )
}

export default MedioPagoComponent