
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    listUser: [] as any,
    detaildele: null,
  };
export const getAllUser= createAsyncThunk(
    "getAllUser",
    async () => {
        try {
            const res= await axios.get(
                "https://61acc468d228a9001703abd8.mockapi.io/User"
            );
            return res.data;
        }
        catch(error){
            console.log(error);
        }
    }
);
export const getUser= createAsyncThunk(
    "getUser",
    async (payload) => {
        try {
            const res= await axios.get(
                `https://61acc468d228a9001703abd8.mockapi.io/User/${payload}`
            );
            return res.data;
        }
        catch(error){
            console.log(error);
        }
    }
);
export const AllUserSlice = createSlice({
    name: "User",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        // get all danh muc
        .addCase(getAllUser.pending, (state, action) => {
          state.listUser = [];
        })
        .addCase(getAllUser.fulfilled, (state, action) => {
          state.listUser = action.payload;
        })
        .addCase(getAllUser.rejected, (state, action) => {
          state.listUser = [];
        })
}});
export default AllUserSlice.reducer;