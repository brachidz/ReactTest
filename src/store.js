import { createStore, combineReducers } from 'redux';
import ProductReducer from './ProductReducer';
import { Provider } from 'react-redux';

const reducer = combineReducers({
    ProductReducer
});
const store = createStore(reducer);
window.store = store;
export default store;