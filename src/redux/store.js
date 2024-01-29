import { configureStore } from "@reduxjs/toolkit";
import { checkoutSlice } from "./states/checkout";
import { mensajeSlice } from "./states/mensaje";
import { articuloSlice } from "./states/articulo";
import { carritoSlice } from './states/carrito';
import { loginSlice } from "./states/login";
import { breadCrumSlice } from "./states/bredcrum";

export default configureStore({
    reducer: {
        checkout : checkoutSlice.reducer,
        mensaje : mensajeSlice.reducer,
        articulos: articuloSlice.reducer,
        carrito: carritoSlice.reducer,
        login: loginSlice.reducer,
        breadCrumSlice: breadCrumSlice.reducer,
    }
});
