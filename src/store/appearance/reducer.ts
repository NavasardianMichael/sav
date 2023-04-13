import { SET_APPEARANCE_OPTIONS } from "./actionTypes";
import { T_AppearanceActions, T_AppearanceState } from "./types";

const initialState: T_AppearanceState = {
    isFetchingMainData: false
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