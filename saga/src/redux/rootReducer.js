import { combineReducers } from 'redux'
import { reducer1 } from './reducer';

const rootReducer = combineReducers({
    cartData: reducer1
})

export default rootReducer;