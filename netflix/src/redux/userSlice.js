import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        isLoading: false,
    },
    reducers: {
        //action
        setUser: (state, action) => {
            state.user = action.payload;//the value in action.payload will be set to user
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;//handel loding status
        }

    }

})

export const { setUser ,setLoading} = userSlice.actions;
export default userSlice.reducer;