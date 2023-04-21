import { SET_SUB_CATEGORIES } from "./actionTypes";
import { T_SubCategoriesActions, T_SubCategoriesState } from "./types";

const initialState: T_SubCategoriesState = {
    byId: {},
    idsByCategoryId: {}
}

export const subCategoriesReducer = (
    state: T_SubCategoriesState = initialState, 
    action: T_SubCategoriesActions
) => {
    switch (action.type) {
        case SET_SUB_CATEGORIES:
            return {
                ...state,
                ...action.payload.subCategories
            }
        default:
            return state
    }
}