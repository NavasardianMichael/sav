import axios from "axios";
import { RootState } from "index";
import { AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { SET_PRODUCTS } from "./actionTypes";
import { T_ProductsState, T_SetProducts } from "./types";
import { getSheetData } from "api/sheets";

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
      const response = await getSheetData('products')
    
      // The data is returned as an array of arrays
      const data = response;
    console.log({response});
    
      // Use the data as needed
      console.log(data);
      // dispatch(setProducts(data))
    } catch (error) {
      console.error(error);
    }
  };
};