import { G_NormalizedState } from "helpers/types";
import { T_SheetRowResponse } from "../../api/sheets/types";
import { T_CategoriesState, T_Category } from "./types";

export const processCategoriesData = (data: T_SheetRowResponse[]): G_NormalizedState<T_Category> => {
    let result: T_CategoriesState = {
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

const processSheetRow = (data: T_SheetRowResponse): T_Category => {
    const [id, name, subCategoryIds] = data
    return {
        id,
        name,
        subCategoryIds: subCategoryIds.split(',')
    }
}