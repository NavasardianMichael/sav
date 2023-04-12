import ReactDOM from 'react-dom/client';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { Provider } from 'react-redux';
import { productsReducer } from './store/products/reducer';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const reducers = combineReducers({
  products: productsReducer
})

const store = createStore(
  reducers,
  applyMiddleware(thunk as ThunkMiddleware<RootState>)
  )
  
  root.render(
    <Provider store={store}>
    <App />
  </Provider>
);

export type RootState = ReturnType<typeof reducers>