import React from 'react'
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

export const CheckoutSuccessPage = () => {
    
    const {id} = useParams();

    return (
            <div className="row">
                <div className="col text-center mt-5">
                <h1>Se ha generado la orden {id}</h1>
                <NavLink to={`/secure/profile/orders/details/${id}`} className="btn btn-secondary">
                    Ver
                </NavLink>
                </div>
            </div>
    )
}

export default CheckoutSuccessPage;