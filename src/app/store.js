import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { priceSureApi } from "./priceSureApi/priceSureApi.js"
import { elasticSearchRestApi } from "./elasticSearchRestApi/elasticSearchRestApi"
import compareListReducre from "./compareListSlice/compareListSlice.js";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["compareList"]
}

const rootReducers = combineReducers({
    [priceSureApi.reducerPath]: priceSureApi.reducer,
    [elasticSearchRestApi.reducerPath]: elasticSearchRestApi.reducer,
    compareList: compareListReducre
});


const persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([priceSureApi.middleware, elasticSearchRestApi.middleware, thunk]),

});

export const persistor = persistStore(store);
