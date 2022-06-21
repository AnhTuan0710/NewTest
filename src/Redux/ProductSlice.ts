import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axios from "axios";
import api from '../Config/Mockapi';
const initialState = {
    listProduct: [] as any,
    detaildele: null,
};
export const getAllProduct: any = createAsyncThunk(
    "getAllProduct",
    async () => {
        
        try {
            const res = await axios.get(api.getAllProduct);
            return res.data;
        }
        catch (error) {
            console.log(error);
            return []
        }
    }
);

export const getAllProduct2 = () => ({
    type: "getAllProduct"
})
export const getProduct = createAsyncThunk(
    "getProduct",
    async (payload) => {
        try {
            const res = await axios.get(api.getAllProduct + `/${payload}`);
            return res.data;
        }
        catch (error) {
            console.log(error);
        }
    }
);
export const deleteProduct: any = createAsyncThunk(
    "/deleteProduct",
    // Declare the type your function argument here:
    async (payload: any) => {
        try {
            const res = await axios.delete(api.getAllProduct + `/${payload}`);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }
);
export const AddNewProduct = createAsyncThunk(
    "/AddNewProduct",
    // Declare the type your function argument here:
    async (payload: any) => {
        try {
            const res = await axios.post(
                api.getAllProduct,
                payload.data
            );
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const AllProductSlice = createSlice({
    name: "getAllProduct",
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
            // create new  sp
            .addCase(AddNewProduct.pending, (state, action) => {
                state.listProduct = [];
            })
            .addCase(AddNewProduct.fulfilled, (state, action) => {
                state.listProduct.push(action.payload);
            })
            .addCase(AddNewProduct.rejected, (state, action) => {
                state.listProduct = [];
            })
            // delete san pham
            .addCase(deleteProduct.pending, (state, action) => {
                state.detaildele = null;
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                for (let i = 0; i < state.listProduct.length; i++) {
                    if (state.listProduct[i]._id === action.payload) {
                        state.listProduct.splice(action.payload, 1);
                    }
                }
            })
    }
});
export default AllProductSlice.reducer;