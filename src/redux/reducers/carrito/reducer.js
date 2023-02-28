import { types } from "../../types/carrito/types";
/*
    estructura de state
    {
    item: {
        
    },
    cantidad: number
}*/
export const carritoReducer = (state = {items:[]}, action) => {
    let res = {
        items: [...state.items]
    }

    const payload = action.payload;

    switch(action.type) {
        case types.ADD:
            res.items = res.items.concat(action.payload);
            break;
        case types.REMOVE:{
            const itemsFiltrados = res.items.filter(item=> item.item.id !== payload.item.id);
            res.items = itemsFiltrados;
            break;
        }
        case types.REMOVE_ALL:{
            res.items = [];
            break;
        }
        case types.UPDATE:
            const itemFiltrados = res.items.find(item => item.id !== payload.item.id); //{item:,cantidad:}
            itemFiltrados.cantidad = payload.cantidad;

            res.items.map(item => {
                if(item.item.id === payload.item.id) {
                    item.cantidad = payload.cantidad
                }
                return item;
            });
            break;
       default :
        res = state;
        break;
    }

    return res;
}

export default carritoReducer;