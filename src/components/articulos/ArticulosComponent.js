import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import ArticuloComponent from "./ArticuloComponent";
import Footer from "./FooterComponent";
import { createArticulo } from "../../redux2/states/articulo";

export default function ArticulosComponent(props) {

    const dispath = useDispatch();
    
    const articuloReducer = useSelector(
        (state) => state.articulos
    );

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(`https://reqres.in/api/users?page=2`);
            const jsonData = await data.json();
            const articulos =  jsonData.data.map(x=> {return {
                id: x.id,
                titulo: x.first_name,
                codigo: x.email,
                precio: x.id * 1000,
                categoria: "categoria 3",
                marca: "marca 3",
                img: x.avatar
            }});

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
                    <Footer></Footer>
                </div>
            }
        </>
    )
}