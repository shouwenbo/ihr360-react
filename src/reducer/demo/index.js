import { combineReducers } from 'redux';
import productsReducer from '@/reducer/demo/products';
import cartReducer from '@/reducer/demo/cart';
import counterReducer from '@/reducer/demo/counter';

const allReducers = {
  products: productsReducer,
  shoppingCart: cartReducer,
  counter: counterReducer
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;