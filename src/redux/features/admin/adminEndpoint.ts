import { authApi } from "../../api/authApi";

 
const adminEndPoint = authApi.injectEndpoints({
    endpoints: (builder) => {
        return {
            getAllStudent: builder.query({
                query: () => ({
                    url: '/student/get-student',
                    method:'GET'
                })
            })
        }
     }
})
 
export const {useGetAllStudentQuery} = adminEndPoint