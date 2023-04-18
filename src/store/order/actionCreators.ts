import { SET_ORDER_ITEMS } from "./actionTypes";
import { T_SetOrderItems } from "./types";

export const setOrderItems: T_SetOrderItems = (items) => {
  return {
    type: SET_ORDER_ITEMS,
    payload: { items }
  }
}