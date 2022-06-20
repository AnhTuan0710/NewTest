import { log } from 'console';
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";


export interface CartProduct {
    id: any;
    name: string;
    image: string;
    price: number;
    count: number;
}
export const getAllProductCart = createSlice({
    name: 'productCart',
    initialState: [] as CartProduct[],
    reducers: {
        addPro: {
            reducer: (state, action: PayloadAction<CartProduct>) => {
                state.push(action.payload)
                return state;
            },
            prepare: (name: string, image: string, price: number, count: number) => {
                const id = nanoid()
                return { payload: { id, name, image, price, count } }
            }
        },
        deletePro: (state,action) => {
            for (let i = 0; i < state.length; i++) {
                if (state[i].id === action.payload) {
                    state.splice(i,1)
                    console.log(state);
                }
            }
            return state
        },
        editPro: {
            reducer: (state, action: PayloadAction<CartProduct>) => {
                for (let i = 0; i < state.length; i++) {
                    if (state[i].id === action.payload.id) {
                        state[i].count = action.payload.count + 1
                    }
                }
            },
            prepare: (id: string, image: string, name: string, price: number, count: number) => {
                return { payload: { id, image, name, price, count } }
            }
        },
        editTru: {
            reducer: (state, action: PayloadAction<CartProduct>) => {
                for (let i = 0; i < state.length; i++) {
                    if (state[i].id === action.payload.id) {
                        state[i].count = action.payload.count - 1
                    }
                }
            },
            prepare: (id: string, image: string, name: string, price: number, count: number) => {
                return { payload: { id, image, name, price, count } }
            }
        },
    }
})

const { reducer, actions } = getAllProductCart;
export const { addPro, deletePro, editPro , editTru} = actions;
export default reducer;