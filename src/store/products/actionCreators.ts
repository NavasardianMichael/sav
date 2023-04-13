import { fetchDataBySheetName } from "api/sheets/api";
import { RootState } from "index";
import { AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { SET_PRODUCTS } from "./actionTypes";
import { T_SetProducts } from "./types";
import { G_SheetResponse, T_SheetRowResponse } from "api/sheets/types";
import { processProductsData } from "store/products/processors";
import { setAppearanceOptions } from "store/appearance/actionCreators";

const setProducts: T_SetProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: { products }
})

export const fetchProducts = (): ThunkAction<
  void,
  RootState,
  null,
  AnyAction
> => {
  return async (dispatch: ThunkDispatch<RootState, null, AnyAction>) => {
    try {
      dispatch(setAppearanceOptions({isFetchingMainData: true}))

      const response = await fetchDataBySheetName<G_SheetResponse<T_SheetRowResponse[]>>('products')
      const data = processProductsData(response.values)
      
      dispatch(setProducts(data))
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setAppearanceOptions({isFetchingMainData: false}))
    }
  };
};