import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

export type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;

export type G_NormalizedState<T extends { id: string }> = {
    byId: {
        [key: string]: T
    }
    allIds: T['id'][]
}