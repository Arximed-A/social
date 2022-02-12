import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

import iconHome from "../img/navBar/home.svg";
import iconProfile from "../img/navBar/profile.svg";
import iconMessages from "../img/navBar/messages.svg";
import iconNews from "../img/navBar/news.svg";
import iconExplore from "../img/navBar/explore.svg";
import iconLanguage from "../img/navBar/language.svg";
import iconLogout from "../img/navBar/logout.svg";
import iconPages from "../img/navBar/pages.svg";
import iconTrending from "../img/navBar/trending.svg";
import iconMusic from "../img/navBar/music.svg";
import iconSettings from "../img/navBar/settings.svg";

// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const SEND_MESSAGE = 'SEND-MESSAGE';
// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
            ],
            newPostText: 'What\'s news?'
        },
        dialogsPage: {
            dialogs: [
                {id: "1", name: 'Andrew', avatar: 'https://svgsilh.com/svg_v2/2027366.svg',},
                {id: "2", name: 'Luda', avatar: 'https://svgsilh.com/svg_v2/2027366.svg',},
                {id: "3", name: 'Masha', avatar: 'https://svgsilh.com/svg_v2/2027366.svg',},
                {id: "4", name: 'Alex', avatar: 'https://svgsilh.com/svg_v2/2027366.svg',},
                {id: "5", name: 'Tanya', avatar: 'https://svgsilh.com/svg_v2/2027366.svg',},
                {id: "6", name: 'Anastacia', avatar: 'https://svgsilh.com/svg_v2/2027366.svg',},
                {id: "7", name: 'Vladimir', avatar: 'https://svgsilh.com/svg_v2/2027366.svg',},
            ],
            messages: [
                {id: '1', message: 'Hi'},
                {id: '2', message: 'What\'s up'},
                {id: '3', message: 'By'},

            ],
            newMessageText: 'новое сообщение',
        },
        sidebar: {},
        menuData:[
            {
                id: 1,
                icon: `${iconHome}`,
                menuName: 'Home'
            },
            {
                id: 2,
                icon: `${iconProfile}`,
                menuName: 'Profile'
            },
            {
                id: 3,
                icon: `${iconMessages}`,
                menuName: 'Messages'
            },
            {
                id: 4,
                icon: `${iconNews}`,
                menuName: 'News(soon)'
            },
            {
                id: 5,
                icon: `${iconExplore}`,
                menuName: 'Explore(soon)'
            },
            {
                id: 6,
                icon: `${iconLanguage}`,
                menuName: 'Language(soon)'
            },
            {
                id: 7,
                icon: `${iconLogout}`,
                menuName: 'Logout(soon)'
            },
            {
                id: 8,
                icon: `${iconPages}`,
                menuName: 'Pages(soon)'
            },
            {
                id: 9,
                icon: `${iconTrending}`,
                menuName: 'Trending(soon)'
            },
            {
                id: 10,
                icon: `${iconMusic}`,
                menuName: 'Music(soon)'
            },
            {
                id: 11,
                icon: `${iconSettings}`,
                menuName: 'Setting(soon)'
            },
        ]

    },
    _callSubscriber() {
        console.log('state changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    },
}


window.store = store;
export default store;
