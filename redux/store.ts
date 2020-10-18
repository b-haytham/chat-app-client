//import AsyncStorage from '@react-native-community/async-storage'

import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

//import { persistStore, persistReducer } from 'redux-persist'
import rootReducer from './rootReducer'


// const persistConfig = {
//     key: 'root',
//     storage: AsyncStorage,

// }


// const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = createStore(rootReducer,applyMiddleware(thunk))

//const persistor = persistStore(store)


export {
    store, 
  //  persistor
}