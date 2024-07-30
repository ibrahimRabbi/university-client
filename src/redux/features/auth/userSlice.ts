import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: null,
    role:null
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, payload) => {
            state.user = payload.payload
            state.role = payload.payload.role    
        }
    }
})

export const {setUser} = userSlice.actions
export default userSlice.reducer