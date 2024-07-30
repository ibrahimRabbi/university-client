import { authApi } from "../../api/authApi";


const authEndPoint = authApi.injectEndpoints({
    endpoints: (builder) => {
        return {
            login: builder.mutation({
                query: (data) => {
                    return {
                        url: `/auth/login`,
                        method: 'POST',
                        body: data
                    }
                }
            })
        }
    }
})

export const { useLoginMutation } = authEndPoint