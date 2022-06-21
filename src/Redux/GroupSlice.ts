import { apiGroup } from './../Api/medicine';
import { KindType } from './../DataType/KinhType';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { apiKind } from '../Api/medicine';
import { GroupType } from '../DataType/GroupType';

const initialState = {
    listGround: [] as GroupType[],
    detaildele: null,
};
const token = localStorage.getItem('access_token')
export const getAllGround:any = createAsyncThunk(
    'getAllGround',
    async () => {
        try {
            const res = apiGroup(token)
            return (await res).data
        }
        catch (error) {
            console.log(error);
        }
    }
);
export const AllGroundSlice = createSlice({
    name: "getAllGround",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // get all kind
            .addCase(getAllGround.pending, (state, action) => {
                state.listGround = [];
            })
            .addCase(getAllGround.fulfilled, (state, action) => {
                state.listGround = action.payload;
            })
            .addCase(getAllGround.rejected, (state, action) => {
                state.listGround = [];
            })
        }
});
export default AllGroundSlice.reducer;