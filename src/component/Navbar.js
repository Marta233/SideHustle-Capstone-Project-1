import React,{useState,useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [showBtn, setShowBtn]=useState(false);

    return (
        <div className='header'>
            <div className="logo">AYD MEDIA</div>
        <input type="checkbox" name="chk" id="chk" />
        <label htmlFor='chk' className="show"><i className="fa fa-bars"></i> </label>
           <div className="menu">
            <NavLink to="/home" className="menu-item na">Home</NavLink>
            <NavLink to="/product" className="menu-item na">Product</NavLink>
            <NavLink to="contact" className="menu-item na">Contact</NavLink>
            <NavLink to="about" className="menu-item na">About</NavLink>
            <label htmlFor='chk' className="na hide"><i className="fa fa-times"></i> </label>
            
           </div>
          
        </div>
    )
}

export default Navbar
