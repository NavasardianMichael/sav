import { useEffect } from 'react';
import { fetchProducts } from 'store/products/actionCreators';
import './App.css';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { selectProducts } from 'store/products/selectors';

function App() {
  const dispatch = useAppDispatch()
  const products = useSelector(selectProducts)
console.log({products})

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
