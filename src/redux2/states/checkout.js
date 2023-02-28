import { createSlice } from "@reduxjs/toolkit";
const CheckoutEmptyState = {
    datosPersonales: {},
    medioDePage: {},
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
        addMedioDePago: (state,action) => {
            return {...state,...action.payload};
        },
        resetCheckout:() => {
            return CheckoutEmptyState
        }
    }
});

export const {createCheckout, addDatosPersonales, addMedioDePago, resetCheckout} = checkoutSlice.actions;