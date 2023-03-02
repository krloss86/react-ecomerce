import { configureStore } from "@reduxjs/toolkit";
import { checkoutSlice } from "./states/checkout";
import { mensajeSlice } from "./states/mensaje";
import { articuloSlice } from "./states/articulo";
import { carritoSlice } from './states/carrito';

export default configureStore({
    reducer: {
        checkout : checkoutSlice.reducer,
        mensaje : mensajeSlice.reducer,
        articulos: articuloSlice.reducer,
        carrito: carritoSlice.reducer,
    }
});
