import React from "react";
import "./styles/Header.css";
import "./styles/LoginHeader.css";

import LinkedinLogo2 from "./images/linkedin2.png";
import HeaderOption from "./HeaderOption";

import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import Divider from "@mui/material/Divider";

function LoginHeader({ setJoin }) {
   return (
      <div className="header__login">
         <div className="header__left__login">
            <img src={LinkedinLogo2} alt="Linkedin logo" />
         </div>
         <div className="header__right__login">
            <HeaderOption Icon={ArticleOutlinedIcon} title="Articles" />
            <HeaderOption Icon={SupervisorAccountIcon} title="People" />
            <HeaderOption Icon={OndemandVideoOutlinedIcon} title="Learning" />
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
            <Divider
               className="header__right__divider"
               orientation="vertical"
               variant="middle"
               flexItem
            />
            <button className="loginheader__join" onClick={() => setJoin(true)}>
               Join now
            </button>
            <button className="loginheader__signin">Sign in</button>
         </div>
      </div>
   );
}

export default LoginHeader;
