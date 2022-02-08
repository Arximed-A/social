// import state, {subscribe} from "./redux/state";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {addMessage, addPost, updateNewMessageText, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/reduxStore";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            {/*Возможно придётся обернуть всё в роутер*/}
            <BrowserRouter>
                <App
                    state={state}
                    dispatch={store.dispatch.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(()=>{
    let state= store.getState();
    rerenderEntireTree(state);
});
