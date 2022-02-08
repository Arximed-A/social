import React from 'react';
import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://www.pikpng.com/pngl/m/5-52515_download-svg-download-png-png-avatar-icons-clipart.png" alt=""/>
            {props.message}
            <div><span>like {props.likesCount}</span></div>

        </div>
    )
}

export default Post;