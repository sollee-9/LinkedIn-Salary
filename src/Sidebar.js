import { Avatar } from "@mui/material";
import React from "react";
import "./styles/Sidebar.css";
import gradient from "./images/gradient.jpeg";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Sidebar() {
   const user = useSelector(selectUser);

   const recentItem = (topic) => (
      <div className="sidebar__recentItem">
         <span className="sidebar__hash">#</span>
         <p>{topic}</p>
      </div>
   );

   return (
      <div className="sidebar">
         <div className="sidebar__top">
            <img src={gradient} alt="" />
            <Avatar
               sx={{ width: 55, height: 55, border: "1.5px solid white" }}
               src={user.photoUrl}
               className="sidebar__avatar"
            >
               {user.displayName ? user.displayName[0] : ""}
            </Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
         </div>
         <div className="sidebar__stats">
            <div className="sidebar__stat">
               <p>Profile viewers</p>
               <p className="sidebar__statNumber">3,493</p>
            </div>
            <div className="sidebar__stat">
               <p>Post impressions</p>
               <p className="sidebar__statNumber">20,493</p>
            </div>
         </div>
         <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem("reactjs")}
            {recentItem("programming")}
            {recentItem("frontenddevelopment")}
            {recentItem("softwarengineering")}
            {recentItem("developer")}
         </div>
      </div>
   );
}

export default Sidebar;
