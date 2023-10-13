import React from 'react'
import { Avatar } from '@mui/material'
import "./styles/Post.css"

import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';import InputOption from "./InputOption"
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import RepeatIcon from '@mui/icons-material/Repeat';
import SendIcon from '@mui/icons-material/Send';

function Post({name, description, message, photoUrl}) {
  return (
    <div className="post">
        <div className="post__header">
            <Avatar src={photoUrl}/>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post__body">
            <p>{message}</p>
        </div>

        <div className="post__buttons">
          <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray" />
          <InputOption Icon={InsertCommentOutlinedIcon} title="Comment" color="gray" />
          <InputOption Icon={RepeatIcon} title="Repost" color="gray" />
          <InputOption Icon={SendIcon} title="Send" color="gray" />
       </div>
    </div>
  )
}

export default Post