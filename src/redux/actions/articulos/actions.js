import { types } from "../../types/articulos/types"

export const addAll = {
    type: types.ARTICULO_ADD,
    payload: []
}

export const add = (params) => ({
    type: types.ARTICULO_ADD,
    payload: params    
})


export const udpate2 = (params) => ({
    type: types.ARTICULO_ADD,
    payload: params    
})

export function add2(params) {
    add(params)
}

export const remove = {
    type: types.ARTICULO_REMOVE,
    payload: {}
}

export const edit = {
    type: types.ARTICULO_EDIT,
    payload: {}
}

export const update = {
    type: types.ARTICULO_UPDATE,
    payload: {}
}

export const search = {
    type: types.ARTICULO_SEARCH,
    payload: {}
}