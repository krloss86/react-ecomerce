import React from 'react'
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

export const CheckoutSuccessPage = () => {
    
    const {id} = useParams();

    return (
        <div>
            <h1>Se ha generado la orden {id}</h1>
            <NavLink to="/" className="btn btn-primary">
                Volver
            </NavLink>
        </div>
    )
}

export default CheckoutSuccessPage;