import { T_SheetRowResponse } from "../../api/sheets/types";
import { T_SubCategoriesState, T_SubCategory } from "./types";

export const processSubCategoriesData = (data: T_SheetRowResponse[]): T_SubCategoriesState => {
    let result: T_SubCategoriesState = {
        byId: {},
        idsByCategoryId: {}
    }
    const [_, ...rows] = data

    rows.forEach((row: T_SheetRowResponse) => {
        const processedRow = processSheetRow(row)
        const { id, categoryId } = processedRow
        
        result.byId[id] = processedRow
        if(!result.idsByCategoryId[categoryId]) return result.idsByCategoryId[categoryId] = [id]
        result.idsByCategoryId[categoryId].push(id)
    });

    return result
}

const processSheetRow = (data: T_SheetRowResponse): T_SubCategory => {
    const [id, name, categoryId, productIds] = data
    return {
        id,
        name,
        productIds: productIds.split(','),
        categoryId
    }    
}