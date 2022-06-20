
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../Config/Mockapi";
import string from "../Constants/String";
// const initialState = {
//     listUser: [] as any,
//     detaildele: null,
//   };
// export const getAllUser= createAsyncThunk(
//     "getAllUser",
//     async () => {
//         try {
//             const res= await axios.get(api.getAllUser );
//             return res.data;
//         }
//         catch(error){
//             console.log(error);
//         }
//     }
// );
// export const getUser= createAsyncThunk(
//     "getUser",
//     async (payload) => {
//         try {
//             const res= await axios.get(api.getAllUser + `/${payload}` );
//             return res.data;
//         }
//         catch(error){
//             console.log(error);
//         }
//     }
// );
// export const AllUserSlice = createSlice({
//     name: "User",
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//       builder
//         // get all user
//         .addCase(getAllUser.pending, (state, action) => {
//           state.listUser = [];
//         })
//         .addCase(getAllUser.fulfilled, (state, action) => {
//           state.listUser = action.payload;
//         })
//         .addCase(getAllUser.rejected, (state, action) => {
//           state.listUser = [];
//         })
// }});
// export default AllUserSlice.reducer;
export interface User  {
  userTokken: string,
  name: string,
}
export const getUser= createSlice({
  name: 'productCart',  
  initialState: [] as User[],
  reducers: {
    pushUser: {
      reducer: (state, action: PayloadAction<User>) => {
        state.push(action.payload)
        return state;
    },
     prepare: ( userTokken: string , name: string) => {
        return { payload: { userTokken, name } }
    }
     }
  }
})
const {reducer, actions} = getUser;
export const {pushUser} = actions;
export default reducer;