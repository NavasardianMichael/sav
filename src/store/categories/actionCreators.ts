import axios from "axios";
import { T_SetCategories } from "./types";
import { SET_CATEGORIES } from "./actionTypes";

export const setCategories: T_SetCategories = (categories) => {
  return {
    type: SET_CATEGORIES,
    payload: { categories }
  }
}