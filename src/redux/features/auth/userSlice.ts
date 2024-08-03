import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: null,
    role: null,
    token:null
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, payload) => {
             
            state.user = payload.payload.tokenDecoded
            state.role = payload.payload.tokenDecoded.role
            state.token = payload.payload.token
        },
        removeUser: (state, payload) => {
            state.user = payload.payload
            state.role = payload.payload
        }
    }
})

export const { setUser, removeUser } = userSlice.actions
export default userSlice.reducer