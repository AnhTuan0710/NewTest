import { createAsyncThunk } from '@reduxjs/toolkit';

import listProducts from '../Redux/ProductSlice'
import listUser from '../Redux/UserSlice'
import listProCart from '../Redux/CartSlice'
import listReceipts from '../Redux/ReceiptSlice'
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

const saga= createSagaMiddleware();
export const store = configureStore({
  reducer: {
      listProduct: listProducts,
      listUser: listUser,
      listProCart: listProCart, 
      listReceipt: listReceipts, 
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
