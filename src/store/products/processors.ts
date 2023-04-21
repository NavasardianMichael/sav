import { G_NormalizedState } from "helpers/types";
import { T_SheetRowResponse } from "../../api/sheets/types";
import { T_Product, T_ProductsState } from "store/products/types";

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
    const [id, name, imageUrl, categoryId, description] = data
    return {
        id,
        name,
        description,
        imageUrl,
        categoryId
    }    
}