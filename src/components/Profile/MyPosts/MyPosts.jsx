import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profileReducer";


const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    // let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostCreator());
    }
    let onPostChange = (e) => {
        let text = e.target.value;
        let action = updateNewPostTextCreator(text);
        props.dispatch(action);
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea
                    onChange={onPostChange}
                    value={props.newPostText}
                    placeholder="What's news?"
                />

            </div>
            <div>
                <button onClick={addPost}>
                    Add post
                </button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;