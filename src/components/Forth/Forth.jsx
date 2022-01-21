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
      <div id="centerForthContainer">
        <p id="ForthP">Trusted by Agencies & Store Owners</p>
        <div id="containerForth">
          <div id="firstPics">
          <div id="secondPic" class="flex">
              <img src={secondPic} class="pic" data-aos="zoom-in" data-aos-duration="3000"  data-aos-offset="200"
    data-aos-delay="50"/>
            </div>

            <div id="firstPic" class="flex">
              <img src={firstPic} class="pic" data-aos="zoom-in" data-aos-duration="3000" data-aos-offset="200"
    data-aos-delay="50"/>
            </div>

            <div id="thirdPic" class="flex">
              <img src={thirdPic} class="pic" data-aos="zoom-in" data-aos-duration="3000"  data-aos-offset="200"
    data-aos-delay="50"/>
            </div>
          </div>
          <div id="centerForth">
            <p id="centerForthP">
              No other eCommerce platform allows people to start for free and
              grow their store as their business grows. More importantly,
              WooCommerce doesn't charge you a portion of your profits as your
              business grows!
            </p>
            <img src={Qoutes} id="qoutes" />
            <div id="iconsForth">
              <BsArrowLeft class="iconForth"  id="back"/>
              <BsArrowRight class="iconForth" id="next" />
            </div>
          </div>

          <div id="secondPics">
          <div id="fifthPic" class="flex">
              <img src={fifthPic} class="pic" data-aos="zoom-in" data-aos-duration="3000"  data-aos-offset="200"
    data-aos-delay="50"/>
            </div>
            
            <div id="forthPic" class="flex">
              <img src={forthPic} class="pic" data-aos="zoom-in" data-aos-duration="3000"  data-aos-offset="200"
    data-aos-delay="50"/>
            </div>

            <div id="sixthPic" class="flex">
            
              <img src={sixthPic} class="pic" data-aos="zoom-in" data-aos-duration="3000"  data-aos-offset="200"
    data-aos-delay="50"/>
            </div>
          </div>
        </div>

        <div id="red">
          <img src={red} id="redImg" />
        </div>
        <div id="green">
          <img src={green} id="greenImg" />
        </div>
      </div>
    </>
  );
}

export default Forth;
