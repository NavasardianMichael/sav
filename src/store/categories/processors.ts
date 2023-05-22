import { T_SheetRowResponse } from "../../api/sheets/types";
import { T_CategoriesState, T_Category } from "./types";

export const processCategoriesData = (data: T_SheetRowResponse[]): T_CategoriesState => {
    let result: T_CategoriesState = {
        byId: {},
        allIds: [],
        testimonialSourceIds: [],
        priceListSourceId: ''
    }
    const [_, ...rows] = data

    const [ categories, testimonialDriveIds, priceListSourceId ] = rows.reduce((acc: [T_SheetRowResponse[],T_SheetRowResponse[], string], row) => {
        console.log({row});
        if(row[0] == null) return acc;
        if(row[0] === 'testimonialSourceId') {
            acc[1].push(row)
        } else if(row[0] === 'priceListSourceId') {
            acc[2] = row[1]
        } else {
            acc[0].push(row)
        }
        return acc
    }, [[], [], ''])

    categories.forEach((row: T_SheetRowResponse) => {
        const processedRow = processSheetRow(row)
        
        result.byId[processedRow.id] = processedRow
        result.allIds.push(processedRow.id)
    });

    result.testimonialSourceIds = testimonialDriveIds.map(row => row[1])
    result.priceListSourceId = priceListSourceId

    return result
}

const processSheetRow = (data: T_SheetRowResponse): T_Category => {
    const [id, name, subCategoryIds] = data
    return {
        id,
        name,
        subCategoryIds: subCategoryIds.split(', ')
    }
}