import React from 'react';
import { Provider } from 'react-redux';
import {PersistGate} from "redux-persist/integration/react"
import { Router } from './components/Router';
import { persistor, store } from './store';

import './App.scss';

export const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
    <Router/>
    </PersistGate>
  </Provider>
)
