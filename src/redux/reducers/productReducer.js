import types from "../contants/actionsTypes";

const initState = {count: 0}; 
export const productReducer = (state = initState, action) => {
    switch (action.type) {
        case types.ADD_ITEM:
          return {...state, count: action.payload};
        default:
            return state;
    }
}