import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './app.js';
import rootReducer from './rootReducer.js';
import css from "./index.less";

let store = createStore(rootReducer);
const root = document.getElementById('root');
render(
    <Provider store={store}>
        <App />
    </Provider>,
    root
);

