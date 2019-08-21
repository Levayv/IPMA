import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./redux/store/index";
import AppRouter from "./AppRouter"; 
import './index.css';


ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
        {/*<LessonList />*/}
        {/*<LessonCreate/>*/}
    </Provider>,
    document.getElementById('root')
);
