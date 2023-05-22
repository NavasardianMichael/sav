import { SET_CATEGORIES } from "./actionTypes";
import { T_CategoriesActions, T_CategoriesState } from "./types";

const initialState: T_CategoriesState = {
    byId: {},
    allIds: [],
    testimonialSourceIds: [],
    priceListSourceId: ''
}

export const categoriesReducer = (
    state: T_CategoriesState = initialState, 
    action: T_CategoriesActions
) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return {
                ...state,
                ...action.payload.categories
            }
        default:
            return state
    }
}