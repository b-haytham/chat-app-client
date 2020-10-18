/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';

//import {PersistGate} from 'redux-persist/es/integration/react';
import {Provider} from 'react-redux';
import {  store } from './redux/store';


import Navigation from './navigation/Navigation';


declare const global: {HermesInternal: null | {}};


const App: React.FC = () => {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <SafeAreaProvider>
          <Navigation/>
        </SafeAreaProvider>
      {/* </PersistGate> */}
    </Provider>
  );
};

export default App;
