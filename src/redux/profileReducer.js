import iconLike from "../img/profile/like.svg"
import iconDisLike from "../img/profile/dislike.svg"

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hello World !!!', likesCount: 12},
        {id: 2, message: `What's news?`, likesCount: 11},
    ],
    newPostText: 'Say smth',
    icons: {
        like: iconLike,
        disLike: iconDisLike,
    }

};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };
            state.posts.push(newPost)
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }


};
//Переделать имя функции
export const addPostCreator = () => ({type: ADD_POST,})
export const updateNewPostTextCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text,})

export default profileReducer;