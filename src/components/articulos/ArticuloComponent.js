import { NavLink } from "react-router-dom";
import { ArticuloAdd } from "./ArticuloAdd";

export default function ArticuloComponent(props) {

    const {articulo} = props;

    return (
        <>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xxl-2 p-1">
                <div className="card h-100">
                    <img src="./assets/images/ceramica.jpg" className="card-img-top" alt="ceramica" />
                    <div className="card-body">
                        <h5 className="card-title text-uppercase text-center">{articulo.titulo}</h5>
                        <p className="card-text">$ {articulo.precio}</p>
                        <NavLink className="btn btn-secondary w-100" to={`/articulo/detalle/${articulo.id}`}>
                            Ver
                        </NavLink>
                    </div>
                    <div className="card-footer">
                        <ArticuloAdd articulo={articulo}></ArticuloAdd>
                    </div>
                </div>
            </div>
        </>
    )
}
