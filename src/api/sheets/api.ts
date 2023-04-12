import axios from "axios";

export const fetchDataBySheetName = async <T>(sheetName: 'categories' | 'products') => {
    const response = await axios.get<T>(
        `https://sheets.googleapis.com/v4/spreadsheets/${process.env.REACT_APP_SHEET_ID}/values/${sheetName + '!A1:N100'}/?key=${process.env.REACT_APP_API_KEY}`
    );
    return response.data
}