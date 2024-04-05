//import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
//import reducer from './reducer';
import rootReducer from './reducer';
import { setupListeners } from '@reduxjs/toolkit/query';
import { api } from 'state/api';

// ==============================|| REDUX - MAIN STORE ||============================== //

//const store = createStore(reducer);
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
});
setupListeners(store.dispatch);
//const persister = 'Free';
const persister = '';

export { store, persister };
