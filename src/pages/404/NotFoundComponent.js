import { Link } from "react-router-dom";

export default function  NotFoundComponent() {
    return (
        <div className="container">
            <div className="row">
                <div className="col text-center mt-5">
                    <h1>404 Ups, no encontramos la página</h1>
                    <Link to={'/'}>
                        Ir a inicio
                    </Link>
                </div>
            </div>
        </div>
        
    );
}