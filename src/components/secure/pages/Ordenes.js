import React from 'react'
import { NavLink } from 'react-router-dom';
import ProfileNavbar from '../components/ProfileNavbar';

function Ordenes() {
    return (
        <>
            <section className="text-center mb-5">
                <div className="container">
                    <h1>E-COMMERCE PROFILE</h1>
                </div>
            </section>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-3">
                        <ProfileNavbar/>
                    </div>
                    <div className="col-sm-12 col-lg-9">
                        <div className="table-wrapper">
                            <div className="table-filter">
                                <div className="row">
                                    <div className="col-5 col-sm-5 col-md-6 col-lg-6">
                                        <div className="show-entries">
                                            <h3 className='text-primary'>Mis ordenes</h3>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="input-group align-items-center space-arronud">
                                            <span className="filter-icon input-group-text">
                                                <i className="bi bi-funnel-fill"></i>
                                            </span>
                                            <select className="form-select">
                                                <option>Todas</option>
                                                <option>pending</option>
                                                <option>approved</option>
                                                <option>rejected</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>Número</th>
                                        <th>Status</th>
                                        <th>Total Price</th>
                                        <th>Order Date</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>pending</td>
                                        <td>100</td>
                                        <td>Aug 19, 2016</td>
                                        <td>
                                            <NavLink to={'/secure/profile/orders/details/1'}>
                                                <i className="bi bi-arrow-right-circle-fill" style={{'fontSize': '1.5rem', color: 'cornflowerblue'}}></i>
                                            </NavLink>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>approved</td>
                                        <td>110</td>
                                        <td>Jul 19, 2016</td>
                                        <td>
                                            <a className="view" 
                                                data-toggle="tooltip" 
                                                title="View Details"
                                                href="#/user/orders/details/2">
                                                    <i className="bi bi-arrow-right-circle-fill" style={{'fontSize': '1.5rem', color: 'cornflowerblue'}}></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>rejected</td>
                                        <td>120</td>
                                        <td>Jun 19, 2016</td>
                                        <td>
                                            <a className="view" 
                                                data-toggle="tooltip" 
                                                title="View Details"
                                                href="#/user/orders/details/3">
                                                    <i className="bi bi-arrow-right-circle-fill" style={{'fontSize': '1.5rem', color: 'cornflowerblue'}}></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>rejected</td>
                                        <td>120</td>
                                        <td>Jun 19, 2016</td>
                                        <td>
                                            <a className="view" 
                                                data-toggle="tooltip" 
                                                title="View Details"
                                                href="#/user/orders/details/4">
                                                    <i className="bi bi-arrow-right-circle-fill" style={{'fontSize': '1.5rem', color: 'cornflowerblue'}}></i>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ordenes;