import React from 'react'
import { NavLink } from 'react-router-dom'
import linkedInLogo from './../Assets/images/linkedin-brands.svg'
import homeIcon from './../Assets/images/house-chimney-solid (1).svg'
import jobicon from './../Assets/images/briefcase-solid.svg'
import connectIcon from './../Assets/images/user-group-solid.svg'
import meICon from './../Assets/images/Abdulsemed Mohammed.png'
import notificationIcon from './../Assets/images/bell-solid.svg'
import Search from './Search';
import messageIcon from './../Assets/images/comment-dots-solid.svg'
export default function Nav () {
  return (
    <div className="appBar">
    <div className="navigation">
      <div className="search">
      <img src={linkedInLogo} className="logo"/>
      <Search/>
      </div>
    <div className="nav">
      
    <NavLink activeClassName="active" to="/"><img className="navcIcon" src={homeIcon} alt="" /> Home  <hr/> </NavLink>
        <NavLink  activeClassName="active" to="/Connect"><img className="navcIcon" src={connectIcon} alt="" /> My Connect <hr/></NavLink>
        <NavLink activeClassName="active" to="/Jobs"><img className="navcIcon" src={jobicon} alt="" />Jobs <hr/></NavLink>
        <NavLink activeClassName="active" to="/Messages"><img className="navcIcon me-icon" src={messageIcon} alt="" />Messages <hr/></NavLink>
        <NavLink activeClassName="active" to="/Notifications"><img className="navcIcon me-icon" src={notificationIcon} alt="" />Notification <hr/></NavLink>
        <NavLink activeClassName="active" to="/Me"><img className="navcIcon me-icon" src={meICon} alt="" />Me <hr/></NavLink>
    </div>
    </div>
    </div>
  )
}
