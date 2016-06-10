import React from 'react'

import { createStore } from 'redux'
import { render } from 'react-redux'
import{ Provider } from 'react-redux'

import RootReducer from './reducers'

let store = createStore(RootReducer)

let rootElement = document.getElementById('app-root')

render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
)
