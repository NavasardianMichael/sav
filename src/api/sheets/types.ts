
export type T_SheetFieldValue = string

export type T_SheetRowResponse = T_SheetFieldValue[]

export type G_SheetResponse<V> = {
    majorDimension: string
    range: string
    values: V
} 