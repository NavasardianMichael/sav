import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { T_AppearanceState } from "store/appearance/types";

export type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;

export type G_NormalizedState<T extends { id: string }> = {
    byId: {
        [key: string]: T
    }
    allIds: T['id'][]
}

export type T_PendingSettings = {
    statusKey: keyof Omit<T_AppearanceState, 'activePage'>
    allPage?: boolean
}