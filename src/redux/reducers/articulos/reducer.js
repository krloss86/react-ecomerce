import { types } from "../../types/articulos/types";

export const articuloReducer = (state = {articulos:[]}, action) => {
    let res = {
        articulos: state.articulos || []
    }

    switch(action.type) {
        case types.ARTICULO_ADD:
            res.articulos = res.articulos.concat(action.payload);
            break;
        case types.ARTICULO_SEARCH:
            const articulosFiltrados = res.articulos.filter(articulo=> articulo.titulo.toLowerCase().includes(action.payload.toLowerCase()));
            res.articulos = articulosFiltrados;
            break;  
        case types.ARTICULO_REMOVE:
            res.articulos = [];
            break;  
        default :
            res.articulos = state.articulos;
        break;
    }

    return res;
}

export default articuloReducer;