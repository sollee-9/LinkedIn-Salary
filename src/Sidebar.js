import { Avatar } from '@mui/material'
import React from 'react'
import "./styles/Sidebar.css";
import gradient from "./images/gradient.jpeg"

function Sidebar() {
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

  return (
    <div className="sidebar">
        <div className="sidebar__top">
            <img src={gradient} alt="" />
            <Avatar src="https://placekitten.com/g/250/300" className="sidebar__avatar"/>
            <h2>
                Melissa Lee
            </h2>
            <h4>email</h4>
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
  )
}

export default Sidebar