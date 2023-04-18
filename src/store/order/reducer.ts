import { SET_ORDER_ITEMS } from "./actionTypes";
import { T_OrderActions, T_OrderState } from "./types";

const initialState: T_OrderState = {
    list: []
}

export const orderReducer = (
    state: T_OrderState = initialState, 
    action: T_OrderActions
) => {
    switch (action.type) {
        case SET_ORDER_ITEMS:
            return {
                ...state,
                list: [
                    ...state.list,
                    ...action.payload.items
                ]
            }
        default:
            return state
    }
}