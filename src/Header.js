import React from 'react'
import './styles/Header.css'

import LinkedinLogo from './images/linkedin.png';
import HeaderOption from './HeaderOption';

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={LinkedinLogo} alt="" />

        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div> 
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={MessageIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notificaitons" />
        <HeaderOption avatar="https://placekitten.com/g/250/300" title="me" />
      </div>
    </div>
  )
}

export default Header