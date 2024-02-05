import React from "react";
import NetflixLogo from "../assets/img/netflix_logo.png";
import bg1 from "../assets/img/background1.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto flex justify-between relative z-20">
        <Link to={'/'}>
          <img src={NetflixLogo} alt="logo" className="w-40"/>
        </Link>
        <div>
          <Link to="sign-in">Sign In</Link>
        </div>
      </div>
      <img src={bg1} alt="bg1" className="absolute top-0 left-0 z-0 w-full h-screen object-cover bg-black/[.70]"/>
    </header>
  );
};

export default Header;
