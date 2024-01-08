import React from 'react'
import { NavLink } from 'react-router-dom'
import { PrivateRoutes } from '../../../guards/routes'
import ChangePassword from './ChangePassword'

function ProfileNavbar() {
    return (
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Profile
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <NavLink className="nav-link active" 
                                    aria-current="page"
                                    to={PrivateRoutes.PROFILE}>
                                    Datos Personales
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={PrivateRoutes.ORDERS} className='nav-link'>
                                    Ordenes
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" 
                                    aria-current="page"
                                    to={PrivateRoutes.PROFILE}>
                                    Direcciones
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" 
                                    aria-current="page"
                                    to={PrivateRoutes.PROFILE}>
                                    Mis Tarjetas
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* 
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Ordenes
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <NavLink to={PrivateRoutes.ORDERS} className='nav-link'>
                                    Ordenes
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Password
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <div className="collapse show" role="tabpanel" id="static-2" aria-labelledby="static-2-header">
                            <ChangePassword></ChangePassword>
                        </div>
                    </div>
                </div>
            </div>
            */}
        </div>
    )
}

export default ProfileNavbar