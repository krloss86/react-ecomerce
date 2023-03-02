import { createSlice, current } from "@reduxjs/toolkit";

const CarritoEmptyState = {
    items:[]
}

export const carritoSlice = createSlice({
    name: 'carrito',
    initialState: CarritoEmptyState,
    reducers: {
        createCarrito: (state, action) => {
            return {...CarritoEmptyState, items:[...CarritoEmptyState.items.concat(action.payload)]};
        },
        addCarrito: (state, action) => {
            const aux  = current(state);
            const filtered = aux.items.filter(x => x.item.id > 0);
            filtered.push(action.payload);
            return {items:filtered};
        },
        removeCarrito: (state,action) => {
            const aux  = current(state);
            const filtered = aux.items.filter(x => x.item.id !== action.payload.item.id);
            return {items:filtered};
        },
        updateCarrito: (state,action) => {
            const aux  = current(state);
            const filtered = aux.items.filter(x => x.item.id !== action.payload.item.id);
            filtered.push(action.payload);
            return {items:filtered};
        },
        resetCarrito: () => {
            return CarritoEmptyState;
        }

    }
});

export const {createCarrito, removeCarrito, addCarrito, updateCarrito, resetCarrito} = carritoSlice.actions;