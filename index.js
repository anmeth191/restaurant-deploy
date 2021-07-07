import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
//import { BrowserRouter as Router , Route , Link , Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import menuReducer  from './model/menuReducer';
import style from './styles/style.scss';
import MainApp from './components/MainApp';
const store = createStore(menuReducer);


ReactDOM.render(
    <Provider store={ store }> <MainApp /> </Provider> , document.querySelector('#root')
)

