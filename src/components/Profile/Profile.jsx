import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'

// import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
            {/*<ProfileInfo/>*/}
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}
                     icons={props.profilePage.icons}
            />
            </div>
        </div>
    )
}

export default Profile;