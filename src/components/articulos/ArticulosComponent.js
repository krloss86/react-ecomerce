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
            const data = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/1sGDfodoc5aPgj5JGByqXAngeY5x3qq1fu35ntGGSjF0/values/articulos!A:V?key=AIzaSyChhkYJ6yAjHDZtNlagKnK9KOdbQTVm0Ug`);
            const jsonData = await data.json();
            const names = jsonData.values.shift();//['key1','key2',...'keyN']
            const values = jsonData.values;//['value1','value2'...'valuen']

            const articulos =  values.map(x=> { {
                let jsonRow = {};
                for(let i=0;i<names.length;i++) {
                    jsonRow = {
                        ...jsonRow,
                        [names[i]]:x[i]
                    }           
                }
                return jsonRow;
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