import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import "./styles/Widgets.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import starlogo from "./images/starlogo.png";

function Widgets() {
   const user = useSelector(selectUser);

   const newsArticle = (heading, subtitle) => (
      <div className="widgets__article">
         <div className="widgets__articleLeft">
            <FiberManualRecordIcon />
         </div>
         <div className="widgets__articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
         </div>
      </div>
   );

   return (
      <div className="widgets">
         <div className="widgets__news">
            <div className="widgets__header">
               <h2>LinkedIn News</h2>
               <InfoIcon />
            </div>
            <div className="widgets__content">
               {newsArticle("This is news", "This is the subtitle")}
               {newsArticle("This is news", "This is the subtitle")}
               {newsArticle("This is news", "This is the subtitle")}
               {newsArticle("This is news", "This is the subtitle")}
               {newsArticle("This is news", "This is the subtitle")}
               <button>
                  Show more <ExpandMoreIcon />
               </button>
            </div>
         </div>
         <div className="widgets__sticky">
            <div className="widgets__ad">
               <div className="widgets__ad__top">
                  <p>Ad</p>
                  <MoreHorizIcon />
               </div>
               <div className="widgets__ad__content">
                  <p className="widgets__ad__content_text__top">
                     Get the latest jobs and industry news
                  </p>
                  <div className="widgets__ad__content__imgs">
                     <Avatar
                        sx={{ width: 55, height: 55, marginRight: "5px" }}
                     />
                     <img alt="star logo" src={starlogo} />
                  </div>
                  <p className="widgets__ad__content_text__bottom">
                     {user.displayName}, explore relevent opportunities with{" "}
                     <span class="bold">Starstagram</span>
                  </p>
                  <button>Follow</button>
               </div>
            </div>
            <div className="widgets__buttons">
               <span>
                  <button>About</button>
                  <button>Accessibility</button>
                  <button>Help Center</button>
               </span>
               <span>
                  <button>Privacy & Terms ▾</button>
                  <button>Ad Choices</button>
               </span>
               <span>
                  <button>Advertising</button>
                  <button>Business Services ▾</button>
               </span>
               <span>
                  <button>Get the Linkedin app</button>
                  <button>More</button>
               </span>
            </div>
         </div>
      </div>
   );
}

export default Widgets;
