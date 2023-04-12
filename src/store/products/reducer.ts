import { SET_PRODUCTS } from "./actionTypes";
import { T_ProductsActions, T_ProductsState } from "./types";

const initialState: T_ProductsState = {
    byId: {},
    allIds: []
}

export const productsReducer = (
    state: T_ProductsState = initialState, 
    action: T_ProductsActions
) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                ...action.payload.products
            }
        default:
            return state
    }
}