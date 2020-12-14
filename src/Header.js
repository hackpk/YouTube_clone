import React ,{useState} from 'react';
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import Logo from './download.png';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {Link} from 'react-router-dom';
 
const Header = () => {
    const [inputSearch ,setInputSearch] = useState('');
    return (
        <div className='header'>
            <div className="header_leg">
                <MenuIcon />
                <Link to ='/'>
                    <img className = 'header_logo'
                    src ={Logo} alt ='' />
                </Link>
                
            </div>
            <div className="header_input">
                <input onChange={e=>setInputSearch(e.target.value)} value={inputSearch} placeholder = 'Search' type = 'text' />
                <Link to ={`/search/ ${inputSearch}`}>
                    <SearchIcon className ='header_inputButton' />
                </Link>
    
            </div>
            <div className="header_icons">
                <VideoCallIcon className="header_icon" />
                <AppsIcon className="header_icon" />
                <NotificationsIcon className="header_icon" />
                <Avatar
                    alt ='Pooja Kadian'
                    src =''
                />
            </div>   

        </div>
    )
}

export default Header
