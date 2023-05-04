import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers:{
        addUser(state, action){
        
            state.push(action.payload);
        },
        removeUser(state, action){
           state.splice(action.payload, 1)
        },
        clearAllUsers(state, action){
            state.splice(action.payload)

            return [];
        },

        addPerson(state, action){
            state.push(action.payload);
        },
    }
});
console.log(userSlice.actions);
export const {addUser, removeUser, clearAllUsers, addPerson} = userSlice.actions;
export default userSlice.reducer;
