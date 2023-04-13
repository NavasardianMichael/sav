import { useEffect } from 'react';
import { fetchProducts } from 'store/products/actionCreators';
import './App.css';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { selectProducts } from 'store/products/selectors';
import { fetchCategories } from 'store/categories/actionCreators';
import { selectCategories } from 'store/categories/selectors';
import { sendEmail } from 'api/email/api';

function App() {
  const dispatch = useAppDispatch()
  const products = useSelector(selectProducts)
  const categories = useSelector(selectCategories)
console.log({products, categories})

  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(fetchCategories())
    
    // sendEmail('<div><button>click me</button><h2>TITLE HERE</h2><div>')
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
