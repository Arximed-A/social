import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

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
        menuData: [
            {
                id: 1,
                icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Home_free_icon.svg/1200px-Home_free_icon.svg.png',
                menuName: 'Profile'
            },
            {
                id: 2,
                icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Home_free_icon.svg/1200px-Home_free_icon.svg.png',
                menuName: 'Messages'
            },
            // {
            //     id: 3,
            //     icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Home_free_icon.svg/1200px-Home_free_icon.svg.png',
            //     menuName: 'News'
            // },
            // {
            //     id: 4,
            //     icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Home_free_icon.svg/1200px-Home_free_icon.svg.png',
            //     menuName: 'Feed'
            // },
            // {
            //     id: 5,
            //     icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Home_free_icon.svg/1200px-Home_free_icon.svg.png',
            //     menuName: 'Explore'
            // },
            // {
            //     id: 6,
            //     icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Home_free_icon.svg/1200px-Home_free_icon.svg.png',
            //     menuName: 'Language'
            // },
            // {
            //     id: 7,
            //     icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Home_free_icon.svg/1200px-Home_free_icon.svg.png',
            //     menuName: 'Logout'
            // },
            // {
            //     id: 8,
            //     icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Home_free_icon.svg/1200px-Home_free_icon.svg.png',
            //     menuName: 'Pages'
            // },
            // {
            //     id: 9,
            //     icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Home_free_icon.svg/1200px-Home_free_icon.svg.png',
            //     menuName: 'Trending'
            // },
            // {
            //     id: 10,
            //     icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Home_free_icon.svg/1200px-Home_free_icon.svg.png',
            //     menuName: 'Music'
            // },
            // {
            //     id: 11,
            //     icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Home_free_icon.svg/1200px-Home_free_icon.svg.png',
            //     menuName: 'Setting'
            // },
        ],

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
