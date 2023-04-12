import { fetchDataBySheetName } from "api/sheets/api";
import { RootState } from "index";
import { AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { SET_PRODUCTS } from "./actionTypes";
import { T_SetProducts } from "./types";
import { G_SheetResponse, T_ProductResponse } from "api/sheets/types";
import { processSheetData } from "store/products/processors";

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
      const response = await fetchDataBySheetName<G_SheetResponse<T_ProductResponse[]>>('products')
      const data = processSheetData(response.values)
      // The data is returned as an array of arrays
    
      // Use the data as needed
      console.log({data});
      dispatch(setProducts(data))
    } catch (error) {
      console.error(error);
    }
  };
};