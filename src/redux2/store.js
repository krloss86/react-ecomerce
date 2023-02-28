import { configureStore } from "@reduxjs/toolkit";
import { checkoutSlice } from "./states/checkout";

export default configureStore({
    reducer: {
        checkout : checkoutSlice.reducer,
    }
});