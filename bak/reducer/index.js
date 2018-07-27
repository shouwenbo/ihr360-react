import { combineReducers } from 'redux';
import productsReducer from '@/reducer/products';
import cartReducer from '@/reducer/cart';
import counterReducer from '@/reducer/counter';

const allReducers = {
  products: productsReducer,
  shoppingCart: cartReducer,
  counter: counterReducer
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;