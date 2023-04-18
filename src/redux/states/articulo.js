import { createSlice } from "@reduxjs/toolkit";
const ArticuloEmptyState = {
    articulos:[]
};

export const articuloSlice = createSlice({
    name: 'articulo',
    initialState: ArticuloEmptyState,
    reducers: {
        createArticulo: (state,action) => {
            return action.payload;
        },
        addArticulo: (state,action) => {
            const aux = [...state];
            return aux.articulos.concat(action.payload);
        },
        searchArticulo: (state,action) => {
            const articulosFiltrados = state.articulos.filter(articulo=> articulo.titulo.toLowerCase().includes(action.payload.toLowerCase()));
            return articulosFiltrados;
        },
        resetArticulo:() => {
            return ArticuloEmptyState
        }
    }
});

export const {createArticulo, addDatosPersonales, addMedioDePago} = articuloSlice.actions;