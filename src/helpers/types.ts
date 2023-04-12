import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

export type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;