import { combineReducers } from 'redux';
import todo from '@/reducer/todo';
import index from '@/reducer/index/index.js';

const allReducers = {
  todo: todo,
  index: index,
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;