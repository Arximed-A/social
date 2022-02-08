const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState={
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
    };
export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: // let newMessage = {id: '4', message: this._state.dialogsPage.newMessageText};
            let newMessage = state.newMessageText;
            state.messages.push({id: '4', message: newMessage});
            state.newMessageText = ''
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state
        default:
            return state
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE,})
//Переделать имя функции
export const updateNewMessageTextCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text,})

export default dialogsReducer;