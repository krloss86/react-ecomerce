import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { createArticulo } from "../../redux/states/articulo";
import FooterComponent from './../../components/articulos/FooterComponent';
import ArticuloComponent from './components/ArticuloComponent';
import { find } from './services/articulo-service';

export default function ArticulosPage(props) {

    const dispath = useDispatch();
    
    const articuloReducer = useSelector(
        (state) => state.articulos
    );

    useEffect(() => {
        async function fetchData() {
            const articulos = await find();            
            dispath(createArticulo(articulos));
        }
        fetchData();
    },[dispath]);

    return (
        <>
            {articuloReducer && articuloReducer.length > 0 &&
                <div className="container">
                    <div className="row mt-2 justify-content-center">
                        {
                            articuloReducer.map((articulo, index) => {
                                return <ArticuloComponent key={index} articulo={articulo}></ArticuloComponent>
                            }
                            )
                        }
                    </div>
                    <FooterComponent></FooterComponent>
                </div>
            }
        </>
    )
}