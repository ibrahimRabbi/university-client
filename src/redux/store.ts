import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/auth/userSlice";
import { authApi } from "./api/authApi";

export const store = configureStore({
    reducer: {
        users: userSlice,
        [authApi.reducerPath] : authApi.reducer
    },
    middleware: (getDefaultMiddleWare) => {
        return getDefaultMiddleWare().concat(authApi.middleware)
    }
})


 
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

 