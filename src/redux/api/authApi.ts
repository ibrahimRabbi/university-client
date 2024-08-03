import { createApi, fetchBaseQuery  } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api',
        credentials: 'include',
        prepareHeaders: (headers,{getState}) => {
            const token = (getState() as RootState).users.token
            if (token) {
                headers.set('Authorization',token)
            }
            return headers
        }
    }),
    endpoints: () => ({})
})