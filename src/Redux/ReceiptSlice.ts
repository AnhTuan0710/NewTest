import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
export interface ReceiptType {
	  id: any;
    idSP: ListProduct[];
    idUser: string;
    address: string;
    totalPrice: number;
}
export interface ListProduct {
	id: any;
    name: string;
    image: string;
    price: number;
    count: number;
}
export const getAllReceipt= createSlice({
    name: 'productCart',  
    initialState: [] as ReceiptType[],
    reducers: {
      addReceipt: {
           reducer :  (state , action: PayloadAction<ReceiptType>) => {
            state.push(action.payload)
            return state;
          }, 
           prepare: (idSP : ListProduct[], idUser: string, address: string, totalPrice: number ) => {
              const id = nanoid()
              return {payload: {id, idSP, idUser, address,totalPrice }}
          }
       }
    }
})
const {reducer, actions} = getAllReceipt;
export const {addReceipt} = actions;
export default reducer;