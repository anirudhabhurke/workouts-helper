import React from 'react';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer/reducer';
const store = createStore(reducer);

import Navigator from './Navigator.js';

export default function App() {
      let [fontsLoaded] = useFonts({
            SourceSansPro: require('./assets/Fonts/SourceSansPro.ttf'),
      });
      if (!fontsLoaded) return <AppLoading />;
      else
            return (
                  <Provider store={store}>
                        <Navigator />
                  </Provider>
            );
}
