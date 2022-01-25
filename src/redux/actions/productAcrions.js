import types from "../contants/actionsTypes";

export const add = (payload) => ({
    type: types.ADD_ITEM,
    payload
})
