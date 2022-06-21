import { KindType } from './../../DataType/KinhType';
import { createSlice } from '@reduxjs/toolkit';

export const kindState = createSlice({
    name: 'getKind',
    initialState: {
        kinds: [] as KindType[],
    },
    reducers : {
        getKindFetch: (state) => {
           
        },
        getKindSuccess: (state, action) => {
            state.kinds= action.payload;
            
        },
        getKindFalse: (state) => {
        }
    }
})

export const {getKindFetch, getKindSuccess, getKindFalse} = kindState.actions;
export default kindState.reducer;
