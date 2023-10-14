import React, { useState } from "react";
import "./styles/Header.css";

import LinkedinLogo from "./images/linkedin.png";
import HeaderOption from "./HeaderOption";

import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
import { logout } from "./features/userSlice";
import { selectUser } from "./features/userSlice";
import { Avatar, Divider } from "@mui/material";

function Header() {
   const [profileCard, setProfileCard] = useState(false);
   const dispatch = useDispatch();
   const user = useSelector(selectUser);

   const logoutOfApp = () => {
      dispatch(logout());
      auth.signOut();
   };

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
            <button
               className="avatar__button"
               onClick={() => setProfileCard(!profileCard)}
            >
               <HeaderOption avatar={true} title="me ▾" />
            </button>
            {profileCard ? (
               <ProfileCard logoutOfApp={logoutOfApp} user={user} />
            ) : null}
         </div>
      </div>
   );
}

export function ProfileCard({ logoutOfApp, user }) {
   return (
      <div className="profileCard">
         <div className="profileCard__profile">
            <Avatar src={user.photoUrl}>
               {user.displayName ? user.displayName[0] : ""}
            </Avatar>
            <h3>{user.displayName}</h3>
         </div>
         <button>View Profile</button>
         <div className="profileCard__other">
            <Divider />
            <h3>Account</h3>
            <button>Settings & Privacy</button>
            <button>Help</button>
            <button>Language</button>
            <Divider />
            <h3>Manage</h3>
            <button>Posts & Activity</button>
            <button>Job Posting Account</button>
            <Divider />
            <button onClick={() => logoutOfApp()}>Sign Out</button>
         </div>
      </div>
   );
}

export default Header;
