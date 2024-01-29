import { createSlice } from "@reduxjs/toolkit";

const MensajeEmttyState = {
    path: ''
};

export const breadCrumSlice = createSlice({
    name:'breadcrum',
    initialState: MensajeEmttyState,
    reducers: {
        createBreadCrum: (state,action) => {
            return {path:action.payload};
        },
        updateBreadCrum: (state,action) => {
            return {...state,...action.payload};
        },
        resetBreadCrum: () => {
            return MensajeEmttyState;
        }   
    }
});

export const {createBreadCrum, updateBreadCrum, resetBreadCrum} = breadCrumSlice.actions;