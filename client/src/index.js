import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./redux/store/index";

// import App from './App';
import List from './redux/component/List-container';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <List />
    </Provider>,
    document.getElementById('root')
);
