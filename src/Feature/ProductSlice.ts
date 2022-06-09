import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axios from "axios";
const initialState = {
    listProduct: [] as any,
    detaildele: null,
  };
export const getAllProduct= createAsyncThunk(
    "getAllProduct",
    async () => {
        try {
            const res= await axios.get(
                "https://61acc468d228a9001703abd8.mockapi.io/Product"
            );
            return res.data;
        }
        catch(error){
            console.log(error);
        }
    }
);
export const getProduct= createAsyncThunk(
    "getProduct",
    async (payload) => {
        try {
            const res= await axios.get(
                `https://61acc468d228a9001703abd8.mockapi.io/Product/${payload}`
            );
            return res.data;
        }
        catch(error){
            console.log(error);
        }
    }
);
export const AllProductSlice = createSlice({
    name: "SanPham",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        // get all danh muc
        .addCase(getAllProduct.pending, (state, action) => {
          state.listProduct = [];
        })
        .addCase(getAllProduct.fulfilled, (state, action) => {
          state.listProduct = action.payload;
        })
        .addCase(getAllProduct.rejected, (state, action) => {
          state.listProduct = [];
        })
}});
export default AllProductSlice.reducer;