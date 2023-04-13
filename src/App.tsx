import { useEffect } from 'react';
import { fetchProducts } from 'store/products/actionCreators';
import './App.css';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { selectProducts } from 'store/products/selectors';
import { fetchCategories } from 'store/categories/actionCreators';
import { selectCategories } from 'store/categories/selectors';
import { sendEmail } from 'api/email/api';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Header } from 'components/Header/Main';
import { Home } from 'pages/Home';
import { Contact } from 'pages/Contact';
import { About } from 'pages/About';

function App() {
  const dispatch = useAppDispatch()
  const products = useSelector(selectProducts)
  const categories = useSelector(selectCategories)

  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(fetchCategories())
    
    // sendEmail('<div><button>click me</button><h2>TITLE HERE</h2><div>')
  }, [dispatch])

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
