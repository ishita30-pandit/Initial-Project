import { combineReducers } from 'redux'
import { reducer1 } from './reducer';
import { productData } from './productReducer';

const rootReducer = combineReducers({
    cartData: reducer1,
    products: productData,
})

export default rootReducer;