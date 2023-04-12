import { useEffect } from 'react';
import { fetchProducts } from 'store/products/actionCreators';
import './App.css';
import { useAppDispatch } from 'hooks/useAppDispatch';

function App() {
  const dispatch = useAppDispatch()

  // const h = async () => {
  //   const API_KEY = 'AIzaSyAhLyZg8ffyLElsSCSUEBl3h_1rUOfJxOs';
  //   const SHEET_ID = '1kzib4BJvRTO4uU830dlC2av4po5jySYz0D9yG2Orqoo';
  //   const RANGE = 'products!A1:N100';
    
  //   try {
  //     const response = await axios.get(
  //       `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}/?key=${API_KEY}`
  //     );
    
  //     // The data is returned as an array of arrays
  //     const data = response;
    
  //     // Use the data as needed
  //     console.log(data.data.values);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  useEffect(() => {
    dispatch(fetchProducts())
  //   console.log('Sending Email');
    
  //   (Email).send({
  //     SecureToken : "1079d3ca-af94-427f-842c-8e2846b7084f",
  //     To : 'navasardianmichael2@gmail.com',
  //     From : "navasardianmichael@gmail.com",
  //     Subject : "Project Submission Pending",
  //     Body : "Hi, I would like to ask your name?"
  // }).then(
  //   (message: any) => alert(message)
  // ); 
  }, [dispatch])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
