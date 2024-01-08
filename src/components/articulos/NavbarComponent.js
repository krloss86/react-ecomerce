import { useState } from "react";
import { /*useDispatch,*/ useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from './../../guards/routes';
import LoginComponent from './../login/LoginComponent';


export default function NavbarComponent() {

    const [clave,setClave] = useState('');

    // const dispath = useDispatch();
    
	const carritoReducer = useSelector(
        (state) => state.carrito
    )

    const loginStore = useSelector(store => store.login);

    const buscar = () => {
        /*if(clave !=='') {
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
        }*/
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
                                <NavLink activeclassname="active" 
                                    className="nav-link"
                                    to={PublicRoutes.PRODUCTOS}>
                                        Productos
                                </NavLink>
                            </li>
                            { loginStore.user && 
                                <li className="nav-item">
                                    <NavLink activeclassname="active" 
                                        className="nav-link"
                                        to={PrivateRoutes.PROFILE}
                                        >
                                            Usuario
                                    </NavLink>
                                </li>
                            }
                        </ul>
                        <div className="navbar-nav">
                            <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Buscar"
                                value={clave}
                                onChange={e => setClave(e.target.value)}/>
                            <button className="btn btn-secondary my-2 my-sm-0" type="button" onClick={() => buscar()}>
                                Buscar
                            </button>
                        </div>
                        <ul className="navbar-nav mb-2 mb-lg-0 mt-sm-2 mt-md-2 mt-lg-0">
                            <li>
                                <Link className="btn btn-primary position-relative"
                                    to={PublicRoutes.CARRITO} 
                                >
                                    <i className="bi bi-cart"></i>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                                        {carritoReducer.items.length || 0}
                                    </span>
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav mb-2 mb-lg-0 mt-sm-2 mt-md-2 mt-lg-0">
                            <li className="mx-2">
                                <LoginComponent key={loginStore.user}/>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>       
        </>
      );
}