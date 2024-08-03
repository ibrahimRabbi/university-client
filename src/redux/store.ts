import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/auth/userSlice";
import { authApi } from "./api/authApi";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'auth',
    storage,
}

const persistedReducer = persistReducer(persistConfig, userSlice)

export const store = configureStore({
    reducer: {
        users: persistedReducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleWare) => {
        return getDefaultMiddleWare({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(authApi.middleware)
    }
})


export let persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

