import { T_SetCategories } from "./types";
import { SET_CATEGORIES } from "./actionTypes";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { RootState } from "index";
import { AnyAction } from "redux";
import { fetchDataBySheetName } from "api/sheets/api";
import { G_SheetResponse, T_SheetRowResponse } from "api/sheets/types";
import { processCategoriesData } from "./processors";

export const setCategories: T_SetCategories = (categories) => {
  return {
    type: SET_CATEGORIES,
    payload: { categories }
  }
}

export const fetchCategories = (): ThunkAction<
  void,
  RootState,
  null,
  AnyAction
> => {
  return async (dispatch: ThunkDispatch<RootState, null, AnyAction>) => {
    try {
      const response = await fetchDataBySheetName<G_SheetResponse<T_SheetRowResponse[]>>('categories')
      const data = processCategoriesData(response.values)
      dispatch(setCategories(data))
    } catch (error) {
      console.error(error);
    }
  };
};