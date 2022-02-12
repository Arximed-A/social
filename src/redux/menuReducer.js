import iconHome from '../img/navBar/home.svg'
import iconProfile from '../img/navBar/profile.svg'
import iconMessages from '../img/navBar/messages.svg'
import iconNews from '../img/navBar/news.svg'
import iconExplore from '../img/navBar/explore.svg'
import iconLanguage from '../img/navBar/language.svg'
import iconLogout from '../img/navBar/logout.svg'
import iconPages from '../img/navBar/pages.svg'
import iconTrending from '../img/navBar/trending.svg'
import iconMusic from '../img/navBar/music.svg'
import iconSettings from '../img/navBar/settings.svg'


let initialState = [
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
];
export const menuReducer = (state = initialState, action) => {

    return state;
};

export default menuReducer;