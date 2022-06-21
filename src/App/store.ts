import listProducts from '../Redux/ProductSlice'
import listUser from '../Redux/UserSlice'
import listProCart from '../Redux/CartSlice'
import listReceipts from '../Redux/ReceiptSlice'
import listKinds from '../Redux/KindSlice'
import listGroups from '../Redux/GroupSlice'
import kindReducer from '../Redux/saga/Kind'

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger';
import rootSaga from '../Redux/saga/rootSaga'
import kindSaga from '../Redux/saga/KindSliceNew'

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer: {
    listProduct: listProducts,
    listUser: listUser,
    listProCart: listProCart,
    listReceipt: listReceipts,
    listKind: listKinds,
    listGroup: listGroups, 
    kinds: kindReducer
  },
  middleware: [...getDefaultMiddleware(),logger, sagaMiddleware]
})

sagaMiddleware.run(kindSaga)
// sagaMiddleware.run(rootSaga)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
