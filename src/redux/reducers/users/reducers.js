import { types } from "../../types/users/types";

export const userReducer = (state = {users: [{id:1}]}, action) => {
    
    let res = {
        users: state.users
    }

    switch(action.type) {
        case types.ADD: {
            res.counter.concat(state.users)
            break;
        }
        case types.REMOVE: {
            res.counter.concat(state.users)
            break;    
        }
        default:
            res.users = state.users;
            break;
    }

    //sale objeto
    return res;
}


export default userReducer;