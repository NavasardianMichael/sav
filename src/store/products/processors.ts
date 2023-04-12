import { G_NormalizedState } from "helpers/types";
import { T_ProductResponse } from "../../api/sheets/types";
import { T_Product, T_ProductsState } from "store/products/types";

export const processSheetData = (data: T_ProductResponse[]): G_NormalizedState<T_Product> => {
    let result: T_ProductsState = {
        byId: {},
        allIds: []
    }
    const [_, ...rows] = data

    rows.forEach((row: T_ProductResponse) => {
        const processedRow = processSheetRow(row)
        
        result.byId[processedRow.id] = processedRow
        result.allIds.push(processedRow.id)
    });

    return result
}

const processSheetRow = (data: T_ProductResponse): T_Product => {
    const [id, name, price, imageUrl, categoryId] = data
    return {
        id,
        name,
        price: +price,
        imageUrl,
        categoryId
    }    
}