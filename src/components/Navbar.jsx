import React from "react";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { state, dispatch } = useContext(ThemeContext);

  return (
    <>
    <nav className={state.theme === "light" ? "light" : "dark" }>

      <div className="nav-logo">ShopKart</div>

  <div className = "nav-links"></div>

      <Link to="/">Home</Link>&nbsp;&nbsp;
      
      <Link to="/Products">Products</Link>&nbsp;&nbsp;
      
      <Link to="/Cart">cart</Link>&nbsp;&nbsp;
      
      <Link to="/Login">login</Link>&nbsp;&nbsp;

       <button className = "theme-btn" 
       onClick = {() => dispatch({type: "TOGGLE_THEME" })}   
      >
        {state.theme === "light" ? "dark" : "light"}
        </button> 
    </nav>
    </>
  );
}