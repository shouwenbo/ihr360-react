import { createStore } from "redux";
import rootReducer from '@/reducer/demo';

let store = createStore(rootReducer);

export default store;