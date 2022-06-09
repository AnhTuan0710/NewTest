
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    listHoaDon: [],
    detaildele: null,
  };
export const getAllHoaDon= createAsyncThunk(
    "getAllHoaDon",
    async () => {
        try {
            const res= await axios.get(
                "https://61acc468d228a9001703abd8.mockapi.io/HoaDon"
            );
            return res.data;
        }
        catch(error){
            console.log(error);
        }
    }
);
export const AllHoaDonSlice = createSlice({
    name: "HoaDon",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        // get all hoa don
        .addCase(getAllHoaDon.pending, (state, action) => {
          state.listHoaDon = [];
        })
        .addCase(getAllHoaDon.fulfilled, (state, action) => {
          state.listHoaDon = action.payload;
        })
        .addCase(getAllHoaDon.rejected, (state, action) => {
          state.listHoaDon = [];
        })
}});
export default AllHoaDonSlice.reducer;