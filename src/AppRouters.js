import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArticulosComponent from "./components/articulos/ArticulosComponent";
import DetallearticulosComponent from "./components/articulos/DetalleArticulosComponent";
import Navbar from "./components/articulos/NavbarComponent";
import Carritocomponent from "./components/carrito/CarritoComponent";
import MensajeriaComponent from "./components/mensaje/MensajeriaComponent";
import OrdenDetail from "./components/secure/components/OrdenDetail";
import Ordenes from "./components/secure/pages/Ordenes";
import Profile from "./components/secure/pages/Profile";
import NotFoundComponent from "./pages/404/NotFoundComponent";
import CheckoutPage from './pages/checkout/CheckoutPage';
import CheckoutSuccessComponent from "./pages/checkout/CheckoutSuccessPage";

export default function AppRouters() {

    return (
        <BrowserRouter /*basename="/react-ecomerce"*/>
            <Navbar />
            <MensajeriaComponent />
            <div className="container">
                <Routes>
                    <Route path="/" element={<ArticulosComponent />} />
                    <Route path="/carrito" element={<Carritocomponent />} />
                    <Route path="/articulo/detalle/:id" element={<DetallearticulosComponent />} />
                    <Route path="/productos" element={<ArticulosComponent />} />
                    <Route path="/checkout" element={<CheckoutPage />} />

                    <Route path="/checkout-success/:id" element={<CheckoutSuccessComponent />} />
                    <Route path="/secure/profile" element={<Profile />} />
                    <Route path="/secure/profile/orders" element={<Ordenes />} />
                    <Route path="/secure/profile/orders/details/:id" element={<OrdenDetail />} />

                    <Route path="*" element={<NotFoundComponent />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}