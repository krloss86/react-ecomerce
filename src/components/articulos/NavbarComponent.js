import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { addAll, remove, search } from '../../redux/actions/articulos/actions'


export default function NavbarComponent() {

    const [clave,setClave] = useState('');

    const dispath = useDispatch();

    const buscar = () => {
        if(clave !=='') {
            const articuloSearch = search;          
            articuloSearch.payload = clave;            
            dispath(articuloSearch);
        }else {
            dispath(remove)

            fetch(`articulos.json`)
            .then(
                (response) => response.json()
            ).then((data) => {
                const newAdd = addAll;
                newAdd.payload = data
                dispath(addAll)
            });
        }
    }

    return (
        <>      
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink activeclassname="active" className="navbar-brand" to="/">Home</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">      	
                            <li className="nav-item">
                                {/* <a className="nav-link" href="/productos">Productos</a> */}
                                <NavLink activeclassname="active" className="nav-link" to="/productos">Productos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeclassname="active" className="nav-link" to="/secure/profile">Usuario</NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li>
                                <Link to="/carrito" className="btn btn-primary position-relative">
                                    Carrito
                                </Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Buscar"
                                value={clave}
                                onChange={e => setClave(e.target.value)}/>
                            <button className="btn btn-secondary my-2 my-sm-0" type="button" onClick={() => buscar()}>
                                Buscar
                            </button>
                        </div>		
                    </div>
                </div>
            </nav>       
        </>
      );
}