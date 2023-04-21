import { T_Category } from "store/categories/types"
import { SET_SUB_CATEGORIES } from "./actionTypes"

export type T_SubCategoriesState = {
    byId: {
        [key: T_SubCategory['id']]: T_SubCategory
    }
    idsByCategoryId: {
        [key: T_Category['id']]: T_SubCategory['id'][]
    }
}

export type T_SubCategory = {
    id: string
    name: string
    categoryId: T_Category['id']
}

export type T_SetSubCategories = (subCategories: T_SubCategoriesState) => ({
    type: typeof SET_SUB_CATEGORIES
    payload: { subCategories: typeof subCategories }
})

export type T_SubCategoriesActions = ReturnType<T_SetSubCategories>