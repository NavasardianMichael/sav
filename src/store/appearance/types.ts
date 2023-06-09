import { APP_PAGES } from "helpers/constants/pages"
import { SET_APPEARANCE_OPTIONS } from "./actionTypes"

export type T_AppearanceState = {
    isFetchingMainData: boolean
    isPendingContactEmail: boolean
    activePage: typeof APP_PAGES[keyof typeof APP_PAGES]
}

export type T_SetAppearanceOptions = (options: Partial<T_AppearanceState>) => ({
    type: typeof SET_APPEARANCE_OPTIONS
    payload: { options: typeof options }
})

export type T_AppearanceActions = ReturnType<T_SetAppearanceOptions>