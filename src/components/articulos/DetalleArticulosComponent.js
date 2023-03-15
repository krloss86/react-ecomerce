import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router"
import { ArticuloAdd } from "./ArticuloAdd";

export default function DetallearticulosComponent() {

	const articulosReducer = useSelector(
		(state) => state.articulos
	);
		
	const {id} = useParams();
	const [articulo,setArticulo] = useState({});

    useEffect( () => {
        const articulo = articulosReducer.find(x=>x.id === parseInt(id));
		setArticulo(articulo);
	},[articulosReducer, id]
	);

    return (
        <>
        <div className="row">
			<div className="col-12">
				<h3>Detalle de articulo</h3>			
				<div className="card mb-3">
				  <div className="row align-items-center p-1">
				    <div className="col-md-5">
				      <img src={articulo.img} className="img-fluid rounded-start" alt="ceramica"/>
				    </div>
				    <div className="col-md-7">
						<div className="card-body">
				        	<h5 className="card-title">{articulo.titulo}</h5>
				        	<p className="card-text">{articulo.codigo}</p>
					      	<div className="col-sm-12 col-md-12 col-lg-8 col-xxl-6">
							  <ArticuloAdd articulo={articulo}/>
							</div>
				      	</div>					  	
				    </div>
				  </div>
				</div>	
			</div>
		</div>
        </>
    )
}
