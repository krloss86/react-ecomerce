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
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)).user : undefined;
}

const LoginInitialState = {
    user: getFromLocalStorage(UserKeys.USER_KEY)
}

const EmptyLoginInitialState = {
    
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
            return {...EmptyLoginInitialState}
        }
    }
}); 

export const {login, logout} = loginSlice.actions;