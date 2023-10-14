import React, { useEffect, useState } from "react";
import "./styles/Feed.css";

import InputOption from "./InputOption";
import Post from "./Post";

import { Avatar } from "@mui/material";

import ImageIcon from "@mui/icons-material/Image";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import VerticalSplitIcon from "@mui/icons-material/VerticalSplit";

import { db } from "./firebase";
import { serverTimestamp } from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
   const [input, setInput] = useState("");
   const [posts, setPosts] = useState([]);

   const user = useSelector(selectUser);

   // create a real time listener to the firebase db
   useEffect(() => {
      // connecting to & accessing the firebase db
      db.collection("posts")
         .orderBy("timestamp", "desc")
         .onSnapshot((snapshot) =>
            setPosts(
               snapshot.docs.map((doc) => ({
                  // for every doc in docs, return an object with its id & data
                  id: doc.id,
                  data: doc.data(),
               }))
            )
         );
   }, []);

   // push input data to the db on "Enter"
   const sendPost = (e) => {
      e.preventDefault();

      // push into "posts"
      db.collection("posts").add({
         name: user.displayName,
         description: user.email,
         message: input,
         photoUrl: user.photoUrl || "",
         timestamp: serverTimestamp(),
      });

      setInput("");
   };

   return (
      <div className="feed">
         <div className="feed__inputContainer">
            <div className="feed__input">
               <Avatar src={user.photoUrl} className="sidebar__avatar">
                  {user.displayName ? user.displayName[0] : ""}
               </Avatar>
               <form className="feed__form">
                  {/* sets value of "input" variable to whatever value is typed in the form input by user */}
                  <input
                     type="text"
                     placeholder="Start a post"
                     value={input}
                     onChange={(e) => setInput(e.target.value)}
                  />
                  <button type="submit" onClick={sendPost}>
                     Send
                  </button>
               </form>
            </div>
            <div className="feed__inputOptions">
               <InputOption Icon={ImageIcon} title="Media" color="#378fe9" />
               <InputOption
                  Icon={BusinessCenterIcon}
                  title="Job"
                  color="#a871ea"
               />
               <InputOption
                  Icon={VerticalSplitIcon}
                  title="Write article"
                  color="#e06847"
               />
            </div>
         </div>
         <div className="postDivider">
            <p>Sort by:</p>
            <h4>Top ▼</h4>
         </div>
         {/* Posts */}
         <FlipMove>
            {posts.map(
               ({ id, data: { name, description, message, photoUrl } }) => (
                  <Post
                     key={id}
                     name={name}
                     description={description}
                     message={message}
                     photoUrl={photoUrl}
                  />
               )
            )}
         </FlipMove>
      </div>
   );
}

export default Feed;
