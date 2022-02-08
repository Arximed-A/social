import feed from '../img/navBar/feed.svg'
import language from '../img/navBar/language.svg'
import pages from '../img/navBar/pages.svg'
import profile from '../img/navBar/profile.svg'
import trending from '../img/navBar/trending.svg'
import messages from '../img/navBar/messages.svg'
import explore from '../img/navBar/explore.svg'
import news from '../img/navBar/news.svg'
import music from '../img/navBar/music.svg'
import settings from '../img/navBar/settings.svg'
import logout from '../img/navBar/logout.svg'

let initialState = [
    {
        id: 1,
        icon: `${profile}`,
        menuName: 'Profile'
    },
    {
        id: 2,
        icon: `${messages}`,
        menuName: 'Messages'
    },
    {
        id: 3,
        icon: `${news}`,
        menuName: 'News(soon)'
    },
    {
        id: 4,
        icon: `${feed}`,
        menuName: 'Feed(soon)'
    },
    {
        id: 5,
        icon: `${explore}`,
        menuName: 'Explore(soon)'
    },
    {
        id: 6,
        icon: `${language}`,
        menuName: 'Language(soon)'
    },
    {
        id: 7,
        icon: `${logout}`,
        menuName: 'Logout(soon)'
    },
    {
        id: 8,
        icon: `${pages}`,
        menuName: 'Pages(soon)'
    },
    {
        id: 9,
        icon: `${trending}`,
        menuName: 'Trending(soon)'
    },
    {
        id: 10,
        icon: `${music}`,
        menuName: 'Music(soon)'
    },
    {
        id: 11,
        icon: `${settings}`,
        menuName: 'Setting(soon)'
    },
];
export const menuReducer = (state = initialState, action) => {

    return state;
};

export default menuReducer;