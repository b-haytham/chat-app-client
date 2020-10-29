//import AsyncStorage from '@react-native-community/async-storage'

//import { createStore, applyMiddleware } from 'redux'

//import thunk from 'redux-thunk'

//import { persistStore, persistReducer } from 'redux-persist'

import { Action, configureStore } from '@reduxjs/toolkit'

import { ThunkAction } from 'redux-thunk'

import { useDispatch }from 'react-redux'


import rootReducer, { RootState } from './rootReducer'


// const persistConfig = {
//     key: 'root',
//     storage: AsyncStorage,

// }


// const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
  reducer: rootReducer,
})


export type AppDispatch = typeof store.dispatch

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>

export const useAppDispatch = () => useDispatch<AppDispatch>()



export { store }

//const persistor = persistStore(store)


