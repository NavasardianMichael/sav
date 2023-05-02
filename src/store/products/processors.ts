import { G_NormalizedState } from "helpers/types";
import { T_Product, T_ProductsState } from "store/products/types";

import { T_SheetRowResponse } from "../../api/sheets/types";

export const processProductsData = (data: T_SheetRowResponse[]): G_NormalizedState<T_Product> => {
    let result: T_ProductsState = {
        byId: {},
        allIds: []
    }
    const [_, ...rows] = data

    rows.forEach((row: T_SheetRowResponse) => {
        const processedRow = processSheetRow(row)
        
        result.byId[processedRow.id] = processedRow
        result.allIds.push(processedRow.id)
    });

    return result
}

const processSheetRow = (data: T_SheetRowResponse): T_Product => {
    const [
        id, 
        name, 
        imageUrl, 
        subCategoryId, 
        description, 
        sizes, 
        quantityPerPack, 
        originCountry, 
        measureUnit
    ] = data

    return {
        id,
        name,
        description: description || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        imageUrl,
        subCategoryId,
        sizes: sizes.trim() ? sizes.split(', ') : [],
        measureUnit,
        originCountry,
        quantityPerPack: +quantityPerPack
    }
}