import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { productsReducer } from './store/products/reducer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = createStore(
  combineReducers({
    products: productsReducer
  })
)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch