import axios from "axios";
import { AppDispatch } from "../..";

export const fetchProducts = () => {
    return async function(dispatch: AppDispatch) {
        const API_KEY = 'AIzaSyAhLyZg8ffyLElsSCSUEBl3h_1rUOfJxOs';
        const SHEET_ID = '1MoSooZLP1E3DQbLFWg9XRt7PGUmSdFGvObvOiRtqITw';
        const RANGE = 'A1:N100';
        
        try {
          const response = await axios.get(
            `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}/?key=${API_KEY}`
          );
        
          // The data is returned as an array of arrays
          const data = response;
        
          // Use the data as needed
          console.log(data);
        } catch (error) {
          console.error(error);
        }
    }
}