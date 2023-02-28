import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { CarritoItemRow } from "./CarritoItemRow";
import { CarritoTotal } from "./CarritoTotalComponent";

export default function Carritocomponent() {
    const carritoReducer = useSelector(
        (state) => state.carrito
    )

    const dibujarCarritoVacio = () => {
        return (
            <div className="row mt-5">
                <div className="col-12">
                    <div className="alert alert-warning" role="alert">
                        <h4 className="alert-heading">Carrito Vacío!</h4>
                        <p>No hay productos en el carrito</p>
                        <hr/>
                        <p className="mb-0">
                            <Link to="/" className="btn btn-primary btn-md">
                                <i className="bi bi-cart"></i> 
                                Continuar comprando 
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    const dibujarCarrito = () => {
        return (
            <>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col"> </th>
                            <th scope="col">Título</th>
                            <th scope="col" className="text-center">Cantidad</th>
                            <th scope="col" className="text-right">Precio</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            carritoReducer.items.map((item,index) => {                                 
                                return <CarritoItemRow key={index} item={item}></CarritoItemRow>
                            })
                        } 
                        <tr>
                            <CarritoTotal/>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="row">
                <div className="col-6">
                    <Link to="/" className="btn btn-block btn-secondary text-uppercase" tabIndex="0">
                        Continue Shopping
                    </Link>
                </div>
                <div className="col-6">
                    <Link to="/checkout" 
                        className="btn btn-block btn-success text-uppercase w-100" 
                        tabIndex="1">
                        Checkout
                    </Link>
                </div>
            </div>
            </>
        )
    }
    return (
        <>
            <h3>Carrito de compras</h3>
            {                
                carritoReducer.items.length === 0 ? dibujarCarritoVacio() : dibujarCarrito()
            }
        </>
    )
}
