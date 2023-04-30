import { APP_PAGES } from "helpers/constants/pages";
import { SET_APPEARANCE_OPTIONS } from "./actionTypes";
import { T_AppearanceActions, T_AppearanceState } from "./types";

const initialState: T_AppearanceState = {
    isFetchingMainData: false,
    isPendingContactEmail: false,
    activePage: APP_PAGES.home
}

export const appearanceReducer = (
    state: T_AppearanceState = initialState, 
    action: T_AppearanceActions
) => {
    switch (action.type) {
        case SET_APPEARANCE_OPTIONS:
            return {
                ...state,
                ...action.payload.options
            }
        default:
            return state
    }
}