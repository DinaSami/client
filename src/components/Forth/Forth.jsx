import React from "react";
import "./Forth.css";
import Qoutes from "../../assets/quotes.svg";
import red from "../../assets/red.svg";
import green from "../../assets/green.svg";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import firstPic from "../../assets/firstPic.svg";
import secondPic from "../../assets/secondPic.svg";
import thirdPic from "../../assets/thirdPic.svg";
import forthPic from "../../assets/ForthPic.svg";
import fifthPic from "../../assets/fifthPic.svg";
import sixthPic from "../../assets/sixthPic.svg";

function Forth() {
  return (
    <>
      <div id="containerForth">
        <p id="ForthP">Trusted by Agencies & Store Owners</p>
        <div id="centerForth">
          <p id="centerForthP">
            No other eCommerce platform allows people to start for free and grow
            their store as their business grows. More importantly, WooCommerce
            doesn't charge you a portion of your profits as your business grows!
          </p>
          <img src={Qoutes} id="qoutes" />
        </div>
        <div id="red">
          <img src={red} id="redImg" />
        </div>
        <div id="green">
          <img src={green} id="greenImg" />
        </div>
        <div id="iconsForth">
          <BsArrowLeft class="iconForth" color="gray" />
          <BsArrowRight class="iconForth" id="next" />
        </div>

        <div id="firstPic" class="pics">
          <img src={firstPic} class="pic"/>
        </div>

        <div id="secondPic" class="pics">
          <img src={secondPic} class="pic"/>
        </div>

        <div id="thirdPic" class="pics">
          <img src={thirdPic} class="pic"/>
        </div>

        <div id="forthPic" class="pics">
          <img src={forthPic} class="pic"/>
        </div>

        <div id="fifthPic" class="pics">
          <img src={fifthPic} class="pic"/>
        </div>

        <div id="sixthPic" class="pics">
          <img src={sixthPic} class="pic"/>
        </div>

      </div>
    </>
  );
}

export default Forth;
