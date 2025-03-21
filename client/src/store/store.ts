import {configureStore} from "@reduxjs/toolkit"
import rootReducer from "./reducers/root-reducer"
import {persistReducer,persistStore} from "redux-persist"
import storage from 'redux-persist/lib/storage'; 



const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store  = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: ['persist/PERSIST'],
          },
        }),
})


export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;