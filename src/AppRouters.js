import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArticulosPage from "./pages/productos/ArticulosPage";
import Navbar from "./components/articulos/NavbarComponent";
import Carritocomponent from "./components/carrito/CarritoComponent";
import MensajeriaComponent from "./components/mensaje/MensajeriaComponent";
import OrdenDetail from "./components/secure/components/OrdenDetail";
import Ordenes from "./components/secure/pages/Ordenes";
// import Profile from "./components/secure/pages/Profile";
import NotFoundComponent from "./pages/404/NotFoundComponent";
import CheckoutPage from './pages/checkout/CheckoutPage';
import CheckoutSuccessComponent from "./pages/checkout/CheckoutSuccessPage";
import { PrivateRoutes, PublicRoutes } from './guards/routes';
import AuthGuard from "./guards/auth-guard";

import { Suspense,lazy } from "react";
import DetallearticulosComponent from "./pages/productos/components/DetalleArticulosComponent";

const Profile = lazy (()=> import("./components/secure/pages/Profile"));

export default function AppRouters() {

    return (
        <Suspense fallback={<>...Cargando</>}>
            <BrowserRouter basename="/react-ecomerce">
                <Navbar />
                <MensajeriaComponent />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<ArticulosPage />} />
                        <Route path={PublicRoutes.CARRITO} element={<Carritocomponent />} />
                        <Route path={PublicRoutes.ARTICULO_DETALLE} element={<DetallearticulosComponent />} />
                        <Route path={PublicRoutes.PRODUCTOS} element={<ArticulosPage />} />

                        <Route element={<AuthGuard />}>
                            <Route path={PrivateRoutes.CHECKOUT} element={<CheckoutPage />} />
                            <Route path={PrivateRoutes.CHECKOUT_SUCCESS} element={<CheckoutSuccessComponent />} />
                            <Route path={PrivateRoutes.PROFILE} element={<Profile />} />
                            <Route path={PrivateRoutes.ORDERS} element={<Ordenes />} />
                            <Route path={PrivateRoutes.ORDERS_DETAILS_ID} element={<OrdenDetail />} />
                        </Route>

                        <Route path="*" element={<NotFoundComponent />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    );
}