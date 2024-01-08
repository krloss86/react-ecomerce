import { createSlice } from "@reduxjs/toolkit";

const UserKeys = {
    USER_KEY: 'USER',    
}

const removeFromLocalSotorage = (key) =>{
    localStorage.removeItem(key);
}
const addToLocalSotorage = (key, value) =>{
    localStorage.setItem(key,JSON.stringify(value));
}
const getFromLocalStorage = (key) => {
    return localStorage.getItem(UserKeys.USER_KEY) ?  JSON.parse(localStorage.getItem(UserKeys.USER_KEY   ))  : undefined;
}

const LoginInitialState = {
    user: getFromLocalStorage(UserKeys.USER_KEY)
}

export const loginSlice = createSlice({
    name:'googleLogin',
    initialState: LoginInitialState,
    reducers: {
        createLogin: ()=> {

        },
        login: (state, action) => {
            const user = {...action.payload};
            addToLocalSotorage(UserKeys.USER_KEY,user);
            return user;
        },
        logout: () => {
            removeFromLocalSotorage(UserKeys.USER_KEY);
            return {...LoginInitialState}
        }
    }
}); 

export const {login, logout} = loginSlice.actions;