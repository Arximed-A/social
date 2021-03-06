import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Home from "./components/Home/Home";


const App = (props) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar menuData={props.state.menuData}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/messages"
                           element={<Dialogs
                               dialogsPage={props.state.dialogsPage}
                               avatars={props.state.avatars}
                               dispatch={props.dispatch}
                           />}
                    />
                    <Route path="/profile"
                           element={<Profile
                               profilePage={props.state.profilePage}
                               dispatch={props.dispatch}
                           />}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/" element={<Home/>} />
                </Routes>
            </div>
        </div>
    );
}
export default App;
