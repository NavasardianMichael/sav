import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import { appearanceReducer } from 'store/appearance/reducer';
import { categoriesReducer } from 'store/categories/reducer';
import { orderReducer } from 'store/order/reducer';
import { subCategoriesReducer } from 'store/subCategories/reducer';

import App from './App';
import { productsReducer } from './store/products/reducer';

const reducers = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  appearance: appearanceReducer,
  subCategories: subCategoriesReducer,
  order: orderReducer,
})

const store = createStore(
  reducers,
  applyMiddleware(thunk as ThunkMiddleware<RootState>)
)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

  root.render(
    <Provider store={store}>
      <App />
    </Provider>
);

export type RootState = ReturnType<typeof reducers>