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
import { PrivateRoutes, PublicRoutes } from './guards/routes';

export default function AppRouters() {

    return (
        <BrowserRouter basename="/react-ecomerce">
            <Navbar />
            <MensajeriaComponent />
            <div className="container">
                <Routes>
                    <Route path="/" element={<ArticulosComponent />} />
                    <Route path={PublicRoutes.CARRITO} element={<Carritocomponent />} />
                    <Route path={PublicRoutes.ARTICULO_DETALLE} element={<DetallearticulosComponent />} />
                    <Route path={PublicRoutes.PRODUCTOS} element={<ArticulosComponent />} />

                    <Route path={PrivateRoutes.CHECKOUT} element={<CheckoutPage />} />
                    <Route path={PrivateRoutes.CHECKOUT_SUCCESS} element={<CheckoutSuccessComponent />} />
                    <Route path={PrivateRoutes.PROFILE} element={<Profile />} />
                    <Route path={PrivateRoutes.ORDERS} element={<Ordenes />} />
                    <Route path={PrivateRoutes.ORDERS_DETAILS_ID} element={<OrdenDetail />} />

                    <Route path="*" element={<NotFoundComponent />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}