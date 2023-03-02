import { createSlice } from "@reduxjs/toolkit";

const MensajeEmttyState = {
    mensaje: ''
};

export const mensajeSlice = createSlice({
    name:'mensaje',
    initialState: MensajeEmttyState,
    reducers: {
        createMensaje: (state,action) => {
            return {mensaje:action.payload};
        },
        addMensaje: (state,action) => {
            return {...state,...action.payload};
        },
        resetMensaje: () => {
            return MensajeEmttyState;
        }   
    }
});

export const {createMensaje, addMensaje, resetMensaje} = mensajeSlice.actions;