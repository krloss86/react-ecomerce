//tener mas de un estado dentro del store
import { combineReducers } from "redux";

import userReducer from "./users/reducers";
import articuloReducer from "./articulos/reducer";
import carritoReducer from "./carrito/reducer";
import mensajeReducer from "./mensaje/reducer";

export default combineReducers(
    {
        users: userReducer,
        articulos: articuloReducer,
        carrito: carritoReducer,
        mensaje: mensajeReducer
    }
);