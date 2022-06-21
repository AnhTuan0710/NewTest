
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../Config/Mockapi";
import string from "../Constants/String";
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