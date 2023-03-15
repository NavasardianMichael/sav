import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  const h = async () => {
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

  useEffect(() => {
    
    h() 
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
