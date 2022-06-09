import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";


export interface CartProduct {
	id: any;
    name: string;
    image: string;
    price: number;
    count: number;
}
export const getAllProductCart= createSlice({
    name: 'productCart',  
    initialState: [] as CartProduct[],
    reducers: {
       addPro: {
           reducer :  (state , action: PayloadAction<CartProduct>) => {
            state.push(action.payload)
            console.log(action.payload);
            
            return state;
          }, 
           prepare: (name: string,image: string, price: number, count: number ) => {
              const id = nanoid()
              return {payload: {id, name, image, price, count}}
          }
       }
    }
})
const {reducer, actions} = getAllProductCart;
export const {addPro} = actions;
export default reducer;