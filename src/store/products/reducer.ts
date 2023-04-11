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
        // case value:
        //     return state
        default:
            return state
    }
}