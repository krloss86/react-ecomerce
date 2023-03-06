import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArticulosComponent from "./components/articulos/ArticulosComponent";
import Carritocomponent from "./components/carrito/CarritoComponent";
import DetallearticulosComponent from "./components/articulos/DetalleArticulosComponent";
import MensajeriaComponent from "./components/mensaje/MensajeriaComponent";
import Navbar from "./components/articulos/NavbarComponent";
import NotFoundComponent from "./pages/404/NotFoundComponent";
import CheckoutSuccessComponent from "./pages/checkout/CheckoutSuccessPage";
import OrdenDetail from "./components/secure/components/OrdenDetail";
import Ordenes from "./components/secure/pages/Ordenes";
import Profile from "./components/secure/pages/Profile";
import CheckoutPage from './pages/checkout/CheckoutPage';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { createArticulo } from "./redux2/states/articulo";

export default function AppRouters() {
    const dispath = useDispatch();
    
    //para cargar datos en un componentes la primera vez
    //uso useEffect
    useEffect(() => {
        //consulta a un api rest
        fetch('/articulos.json')
        .then(
            (response) => response.json()
            ).then((data) => {
                dispath(createArticulo(data));
            }).catch((error)=>{
                console.log(error);
            });
    });
    return (
        <BrowserRouter basename="react-ecomerce">
            <Navbar />
            <MensajeriaComponent/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<ArticulosComponent/>}/>
                    <Route path="/articulo/detalle/:id" element={<DetallearticulosComponent/>}/>
                    <Route path="/carrito" element={<Carritocomponent/>}/>
                    <Route path="/checkout" element={<CheckoutPage/>}/>
                    <Route path="/checkout-success/:id" element={<CheckoutSuccessComponent/>}/>

                    <Route path="/productos" element={<ArticulosComponent/>}/>
                    <Route path="/secure/profile" element={<Profile/>}/>
                    <Route path="/secure/profile/orders" element={<Ordenes/>}/>
                    <Route path="/secure/profile/orders/details/:id" element={<OrdenDetail/>}/>
                    <Route path="*" element={<NotFoundComponent/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}