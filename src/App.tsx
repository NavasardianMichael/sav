import { Chat } from 'components/Chat/Main';
import { Content } from 'components/Content/Main';
import { Header } from 'components/Header/Main';
import { Loader } from 'components/Loader/Main';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { selectCategories } from 'store/categories/selectors';
import { selectProducts } from 'store/products/selectors';
import './App.css';

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
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Content />
        <Chat />
        <Loader statusKey='isFetchingMainData' allPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
