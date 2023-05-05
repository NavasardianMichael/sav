import { FC } from 'react'
import { Chat } from 'components/Chat/Main';
import { Content } from 'components/Content/Main';
import { Header } from 'components/Header/Main';
import { Loader } from 'components/Loader/Main';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useEffect } from 'react';
import { fetchCategories } from 'store/categories/actionCreators';
import { fetchProducts } from 'store/products/actionCreators';
import { fetchSubCategories } from 'store/subCategories/actionCreators';
import './App.css';
import { TopRedirect } from 'components/TopRedirect/Main';

const App: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCategories()) 
    dispatch(fetchSubCategories()) 
    dispatch(fetchProducts())    
  }, [dispatch])

  return (
    <div className='App'>
      <Header />
      <Content />
      <Chat />
      <TopRedirect />
      <Loader statusKey='isFetchingMainData' allPage />
    </div>
  );
}

export default App;
