import { T_SheetRowResponse } from "../../api/sheets/types";
import { T_CategoriesState, T_Category } from "./types";

export const processCategoriesData = (data: T_SheetRowResponse[]): T_CategoriesState => {
    let result: T_CategoriesState = {
        byId: {},
        allIds: [],
        testimonialSourceIds: []
    }
    const [_, ...rows] = data

    const [ categories, testimonialDriveIds ] = rows.reduce((acc: [T_SheetRowResponse[],T_SheetRowResponse[]], row) => {
        if(row[0] == null) return acc;
        acc[row[2] ? 0 : 1].push(row)        
        return acc
    }, [[], []])

    categories.forEach((row: T_SheetRowResponse) => {
        const processedRow = processSheetRow(row)
        
        result.byId[processedRow.id] = processedRow
        result.allIds.push(processedRow.id)
    });

    result.testimonialSourceIds = testimonialDriveIds.map(row => row[1])
console.log({result});

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