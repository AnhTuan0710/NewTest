import { KindType } from './../DataType/KinhType';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { apiKind } from '../Api/medicine';

const initialState = {
    listKind: [] as KindType[],
    detaildele: null,
};
const token = localStorage.getItem('access_token')
export const getAllKind:any = createAsyncThunk(
    'getAllKind',
    async () => {
        try {
            const res = apiKind()
            return (await res).data
        }
        catch (error) {
            console.log(error);
        }
    }
);
export const AllKindSlice = createSlice({
    name: "getAllKind",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // get all kind
            .addCase(getAllKind.pending, (state, action) => {
                state.listKind = [];
            })
            .addCase(getAllKind.fulfilled, (state, action) => {
                state.listKind = action.payload;
            })
            .addCase(getAllKind.rejected, (state, action) => {
                state.listKind = [];
            })
        }
});
export default AllKindSlice.reducer;