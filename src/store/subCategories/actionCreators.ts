import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { RootState } from "index";
import { AnyAction } from "redux";
import { fetchDataBySheetName } from "api/sheets/api";
import { G_SheetResponse, T_SheetRowResponse } from "api/sheets/types";
import { processSubCategoriesData } from "./processors";
import { setAppearanceOptions } from "store/appearance/actionCreators";
import { T_SetSubCategories } from "./types";
import { SET_SUB_CATEGORIES } from "./actionTypes";

export const setSubCategories: T_SetSubCategories = (subCategories) => {
  return {
    type: SET_SUB_CATEGORIES,
    payload: { subCategories }
  }
}

export const fetchSubCategories = (): ThunkAction<
  void,
  RootState,
  null,
  AnyAction
> => {
  return async (dispatch: ThunkDispatch<RootState, null, AnyAction>) => {
    try {
      dispatch(setAppearanceOptions({isFetchingMainData: true}))

      const response = await fetchDataBySheetName<G_SheetResponse<T_SheetRowResponse[]>>('subCategories')
      const data = processSubCategoriesData(response.values)
      dispatch(setSubCategories(data))
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setAppearanceOptions({isFetchingMainData: false}))
    }
  };
};