//import { combineReducers } from 'redux';
import { api } from 'state/api';
import { combineReducers } from '@reduxjs/toolkit';


// reducer import
//import customizationReducer from './customizationReducer';
import customizationReducer from './customizationSlice';

// ==============================|| COMBINE REDUCER ||============================== //

const rootReducer  = combineReducers({
  //root: reducer,
  [api.reducerPath]: api.reducer,
  customization: customizationReducer
});
// const reducer = combineReducers({
//   customization: customizationReducer
// });

export default rootReducer;
//export default reducer;
