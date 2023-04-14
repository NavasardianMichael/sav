import { Content } from 'components/Content/Main';
import { Header } from 'components/Header/Main';
import { Loader } from 'components/Loader/Main';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fetchCategories } from 'store/categories/actionCreators';
import { selectCategories } from 'store/categories/selectors';
import { fetchProducts } from 'store/products/actionCreators';
import { selectProducts } from 'store/products/selectors';
import './App.css';
import { Chat } from 'components/Chat/Main';

function App() {
  const dispatch = useAppDispatch()
  const products = useSelector(selectProducts)
  const categories = useSelector(selectCategories)

  useEffect(() => {
    // dispatch(fetchProducts())
    // dispatch(fetchCategories())
    
    // sendEmail('<div><button>click me</button><h2>TITLE HERE</h2><div>')
  }, [dispatch])

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Content />
        <Chat />
        <Loader />
      </BrowserRouter>
    </div>
  );
}

export default App;
