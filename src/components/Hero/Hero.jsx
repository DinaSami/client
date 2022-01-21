import React, { useState, useEffect } from "react";
import Logo from "../../assets/LOGO.svg";
import Image from "../../assets/featured-image.png";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Hero.css";

function Hero() {
  const [show, setshow] = useState("hidden");
const [display, setdisplay] = useState('none');
const [background, setbackground] = useState('transparent');

 function handleClick() {
   if (display === 'none') {   
     setdisplay('displayed');
     setbackground('white');
   }else{
    setdisplay('none');
    setbackground('transparent');
   }
 };

  const listenToScroll = () => {
    let heightToHideFrom = 300;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      setshow("visible");
    } else {
      setshow("hidden");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div id="mainContainer">
      <GiHamburgerMenu id='listIcon' onClick={handleClick}/>
      <div
        style={{
          visibility: `${show}`}}
        id="moveUp"
        class="flexHero"
      >
        <a href='#mainContainer'><MdOutlineKeyboardArrowUp size="40px" color="white" /></a>
      </div>
      <div id="Header" class="flex" style={{backgroundColor:`${background}`}}>
        <div id="logo">
          <a href="#">
            <img src={Logo} />
          </a>
        </div>

        <nav id="NavList" class={`${display}  animate__animated animate__fadeIn`}>
          <ul id="Nav" class="flex">
            <li>
              <a href="#">Sell</a>
            </li>
            <li>
              <a href="#">Marketplace</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
            <li>
              <a href="#">Develop</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
          </ul>
        </nav>

        <div id="thirdPart" class={`${display} gg animate__animated animate__fadeIn`}>
          <p id="logIn">
            <a href="#">log In</a>
          </p>
          <p id="btn">Get Started</p>
          <a id='btnSearch'>
            <BiSearchAlt2 size="18px" />
          </a>
        </div>
      </div>

      <div id="HeroBottom" class="flex">
        <div id="left">
          <p id="leftP">Building exactly the eCommerce website you want.</p>
          <p id="leftP2">
            WooCommerce is a customizable, open-source eCommerce platform built
            on WordPress. Get started quickly and make your way.
          </p>
          <a href="#">
            <button>Start a New Store</button>
          </a>
          <span id="span">or</span>
          <a>
            <span id="span2">Customize & Extend ›</span>
          </a>
        </div>

        <div id="right">
          <img src={Image} id="imgHero" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
