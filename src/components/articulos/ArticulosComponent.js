import { useSelector } from "react-redux";
import ArticuloComponent from "./ArticuloComponent";
import Footer from "./FooterComponent";

export default function ArticulosComponent(props) {

    const articuloReducer = useSelector(
        (state) => state.articulos
    );

    return (
        <>
        {articuloReducer &&  articuloReducer.length > 0 &&
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
