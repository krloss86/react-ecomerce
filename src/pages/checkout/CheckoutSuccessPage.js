import React from 'react'
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { PrivateRoutes } from '../../guards/routes';

export const CheckoutSuccessPage = () => {
    
    const {id} = useParams();

    return (
            <div className="row">
                <div className="col text-center mt-5">
                <h1>Se ha generado la orden {id}</h1>
                <NavLink className="btn btn-secondary"
                    to={`${PrivateRoutes.ORDERS_DETAILS_ID_PATH}${id}`} 
                    >
                    Ver
                </NavLink>
                </div>
            </div>
    )
}

export default CheckoutSuccessPage;