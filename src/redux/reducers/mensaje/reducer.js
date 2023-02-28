import { types } from "../../types/mensaje/types";

export const mensajeReducer = (state = {mensaje: ''}, action) => {

    let res = {
        mensaje: state.mensaje
    }

    switch(action.type) {
        case types.ADD:
            res.mensaje = action.payload;
            break;
        case types.REMOVE:{
            res.mensaje = '';
            break;
        }
        default :
            res.mensaje = '';
            return ''
    }
    return res;
}

export default mensajeReducer;