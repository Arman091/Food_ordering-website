import React from "react";
import classes from './Header.module.css'
import mealsimage from '../store/meals.jpg'
import HeaderCartButton from "./HeaderCartButton";
function Header(props) {
   

    return (
      <React.Fragment>
        <header className={classes.header}>
          <h1>My Meals</h1>
          <HeaderCartButton onclick={props.onshowCart} />
        </header>
        <div className={classes["main-image"]}>
          <img src={mealsimage} />
        </div>
      </React.Fragment>
    );
}

export default Header;