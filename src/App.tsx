import { Chat } from 'components/Chat/Main';
import { Content } from 'components/Content/Main';
import { Header } from 'components/Header/Main';
import { Loader } from 'components/Loader/Main';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fetchCategories } from 'store/categories/actionCreators';
import { fetchProducts } from 'store/products/actionCreators';
import { fetchSubCategories } from 'store/subCategories/actionCreators';
import './App.css';

function App() {
  const dispatch = useAppDispatch()
  const state = useSelector(state => state)
console.log({state});

  useEffect(() => {
    dispatch(fetchCategories()) 
    dispatch(fetchSubCategories()) 
    dispatch(fetchProducts())    
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
