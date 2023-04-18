import { createSlice } from "@reduxjs/toolkit";
const CheckoutEmptyState = {
    datosPersonales: {},
    medioDePago: {},
    items:{}
};

export const checkoutSlice = createSlice({
    name: 'checkout',
    initialState: CheckoutEmptyState,
    reducers: {
        createCheckout: (state,action) => {
            return action.payload;
        },
        addDatosPersonales: (state,action) => {
            return {...state,...action.payload};
        },
        resetDatosPersonales:(state,action) => {
            return {...state, datosPersonales:{}};
        },
        addMedioDePago: (state,action) => {
            return {...state,...action.payload};
        },
        resetCheckout:() => {
            return CheckoutEmptyState
        }
    }
});

export const {createCheckout, addDatosPersonales, resetDatosPersonales, addMedioDePago, resetCheckout} = checkoutSlice.actions;