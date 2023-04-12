import { T_Product } from "store/products/types"

export type T_SheetFieldValue = string

export type T_ProductResponse = T_SheetFieldValue[]

export type G_SheetResponse<V> = {
    majorDimension: string
    range: string
    values: V
} 