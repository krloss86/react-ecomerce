import React from 'react'
import { Link } from 'react-router-dom';
import ProfileNavbar from './ProfileNavbar';

function OrdenDetail() {
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
                        <ProfileNavbar />
                    </div>
                    <div className="col-sm-12 col-lg-9">
                        <div className="container">
                            <div className="table-wrapper mt-3">
                                <div className="row">
                                    <h4 >Detalle de orden N° 1</h4>
                                    <table className="table table-striped table-hover">
                                        <thead >
                                            <tr >
                                                <th >description</th>
                                                <th >totalPrice</th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                            <tr >
                                                <td >order 1</td>
                                                <td >$10.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <h4 >Dirección de entrega</h4>
                                    <table className="table table-striped table-hover">
                                        <thead >
                                            <tr >
                                                <th >street</th>
                                                <th >city</th>
                                                <th >state</th>
                                                <th >zip</th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                            <tr >
                                                <td >aristobulo del valle 1257</td>
                                                <td >caba</td>
                                                <td >buenos aires</td>
                                                <td >1295</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <h4 >Medio de Pago</h4>
                                    <table className="table table-striped table-hover">
                                        <thead >
                                            <tr >
                                                <th >description</th>
                                                <th >total</th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                            <tr >
                                                <td >Efectivo</td>
                                                <td >$10.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table className="table">
                                        <tbody >
                                            <tr >
                                                <td>
                                                    <Link to={'/secure/profile/orders'}>
                                                        <i className="bi bi-arrow-left-circle-fill" style={{'fontSize': '1.5rem', color: 'cornflowerblue'}}></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrdenDetail;