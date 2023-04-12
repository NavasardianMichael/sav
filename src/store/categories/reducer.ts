import { T_CategoriesActions, T_CategoriesState } from "./types";

const initialState: T_CategoriesState = {
    byId: {},
    allIds: []
}

export const productsReducer = (
    state: T_CategoriesState = initialState, 
    action: T_CategoriesActions
) => {
    switch (action.type) {
        // case value:
        //     return state
        default:
            return state
    }
}