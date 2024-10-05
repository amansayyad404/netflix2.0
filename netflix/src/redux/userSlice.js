import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null,
    },
    reducers:{
        //action
        setUser:(state,action)=>{
            state.user = action.payload;//the value in action.payload will be set to user
        }

    }

})

export const {setUser} =userSlice.actions;
export default userSlice.reducer;