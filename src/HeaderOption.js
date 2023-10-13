import React from 'react'
import './styles/HeaderOption.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function HeaderOption({avatar, Icon, title}) {
  const user = useSelector(selectUser);

  return (
    <div className="headerOption">
        {Icon && <Icon className="headerOption__icon"/>}
        {/* && syntax makes the Icon component render only when its value is not null */}
        {avatar && <Avatar className="headerOption__icon" src={user.photoUrl}/> }
        <h3 className="headerOption__title">{title}</h3>
    </div>
  )
}

export default HeaderOption