import React, {useEffect, useState} from 'react';
import "./styles/Feed.css";

import InputOption from './InputOption';
import Post from './Post';

import { Avatar } from '@mui/material';

import ImageIcon from '@mui/icons-material/Image';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import VerticalSplitIcon from '@mui/icons-material/VerticalSplit';

import { db } from "./firebase";
import firebase from 'firebase/compat/app';
import {serverTimestamp} from "firebase/firestore";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  // create a real time listener to the firebase db 
  useEffect(() => {
    // connecting to & accessing the firebase db
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => 
      setPosts(
        snapshot.docs.map((doc) => ({
          // for every doc in docs, return an object with its id & data
          id: doc.id,
          data: doc.data(),
        }))
      )
    )
  },[])

  // push input data to the db on "Enter"
  const sendPost = (e) => {
    e.preventDefault();

    // push into "posts"
    db.collection("posts").add({
      name: "SS",
      description: "This is a test",
      message: input, 
      photoUrl: "",
      timestamp: serverTimestamp(),
    });

    setInput("");
  }

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Avatar src="https://placekitten.com/g/250/300" className="sidebar__avatar"/>
          <form className="feed__form">
            {/* sets value of "input" variable to whatever value is typed in the form input by user */}
            <input 
              type="text" 
              placeholder="Start a post" 
              value={input}
              onChange={e => setInput(e.target.value)}
            />
            <button type="submit" onClick={sendPost}>Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Media" color="#378fe9"/>
          <InputOption Icon={BusinessCenterIcon} title="Job" color="#a871ea"/>
          <InputOption Icon={VerticalSplitIcon} title="Write article" color="#e06847"/>
        </div>
     </div>
     {/* Posts */}
     {posts.map(({id, data: {name, description, message, photoUrl}}) => (
        <Post 
          key={id} 
          name={name} 
          description={description} 
          message={message} 
          photoUrl={photoUrl}/>
     ))}
    </div>
  )
}

export default Feed