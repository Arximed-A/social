import React from 'react';
import s from "./Post.module.css";

const Post = (props) => {


    return (
        <div className={s.item}>

            <img className={s.imgAvatar}
                 src="https://www.pikpng.com/pngl/m/5-52515_download-svg-download-png-png-avatar-icons-clipart.png"
                 alt=""/>
            <p className={s.postMessage}>
                {props.message}
            </p>
            <div className={s.likes}>
                <img src={props.icons.like} alt="icon like"/>
                <span className={s.likesCount}>
                {props.likesCount}
                </span>
                <img src={props.icons.disLike} alt="icon like"/>
            </div>


        </div>
    )
}

export default Post;