import React from 'react';
import "../Header/styles.css";
import {Link} from "react-router-dom";

const Profile = () => {
  var name = localStorage.getItem("91Name")
  return (
    <div className='profileclass'>
       <div className='profimage'>
          <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt="" />
          <h3>{name}</h3>
       </div>
       <div>
         {/* <button className='button1'>Manage Profile</button><br></br> */}
         <Link to="/managedocs"><button className='button2'>Manage my documents</button></Link>
       </div>
    </div>
  )
}

export default Profile