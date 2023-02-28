import { createSlice } from "@reduxjs/toolkit";

const CarritoEmptyState = {
    items:[]
}

export const carritoSlice = createSlice({
    name: 'carrito',
    initialState: CarritoEmptyState,
    reducers: {
        createCarrito: (state, action) => {
            return action.payload;;
        },
        removeCarrito: (state,action) => {
            const itemsFiltrados = state.items.filter(item=> item.item.id !== action.payload.item.id);
            return itemsFiltrados;
        },
        updateCarrito: (state,action) => {
            const aux = [...state];
            const idx = aux.items.indexOf(item => item.id === action.payload.item.id);
            if(idx >= 0) {
                const objAux = aux.items[idx];
                //actualizo la cantidad
                objAux.cantidad = action.payload.cantidad;
            }
            return aux;/*
            const itemFiltrados = state.items.find(item => item.id !== action.payload.item.id); //{item:,cantidad:}
            itemFiltrados.cantidad = action.payload.cantidad;

            state.items.map(item => {
                if(item.item.id === action.payload.item.id) {
                    item.cantidad = action.payload.cantidad
                }
                return item;
            });
            */
        },
        resetCarrito: () => {
            return CarritoEmptyState;
        }

    }
});

export const {createCarrito, removeCarrito, resetCarrito} = carritoSlice.actions;