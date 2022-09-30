import React from 'react';
import "../Styles/Styles.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
      const token = false;
  return (
    <>
    {token ? <>
    <div className="topnav" id="myTopnav">
    <a href="#home" className="active">PharmEasy</a>
    <a href="#news">Products</a>
    <a href="#about">Profile</a>
    <a href="#contact">Logout</a>
    <a href="javascript:void(0);" className="icon" onClick={myFunction}>
    <ArrowDropDownIcon></ArrowDropDownIcon>
    </a>
    </div>
    </>: <>
    <div className="topnav" id="myTopnav">
    <a href="#home" className="active">PharmEasy</a>
    <a href="products">Products</a>
    <a href="#about">About</a>
    <a href="#contact">Login</a>
    <a href="javascript:void(0);" className="icon" onClick={myFunction}>
    <ArrowDropDownIcon></ArrowDropDownIcon>
    </a>
    </div>
    </>}
    
    
    </>
  )
}

export default Header