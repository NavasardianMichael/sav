import { SET_APPEARANCE_OPTIONS } from "./actionTypes";
import { T_SetAppearanceOptions } from "./types";

export const setAppearanceOptions: T_SetAppearanceOptions = (options) => {
  return {
    type: SET_APPEARANCE_OPTIONS,
    payload: { options }
  }
}