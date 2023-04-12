import { SET_CATEGORIES } from "./actionTypes"

export type T_CategoriesState = {
    byId: {
        [key: T_Category['id']]: T_Category
    }
    allIds: T_Category['id'][]
}

export type T_Category = {
    id: string
    name: string
}

export type T_SetCategories = (categories: T_CategoriesState) => ({
    type: typeof SET_CATEGORIES
    payload: { categories: typeof categories }
})

export type T_CategoriesActions = ReturnType<T_SetCategories>