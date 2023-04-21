import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { fetchCategories } from 'store/categories/actionCreators';
import { fetchProducts } from 'store/products/actionCreators';
import { Chat } from 'components/Chat/Main';
import { Content } from 'components/Content/Main';
import { Header } from 'components/Header/Main';
import { Loader } from 'components/Loader/Main';
import { Footer } from 'components/Footer/Main';
import { fetchSubCategories } from 'store/subCategories/actionCreators';
import { useSelector } from 'react-redux';
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
        <Footer />
        <Chat />
        <Loader statusKey='isFetchingMainData' allPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
