import React from "react";
import "./Third.css";
import img1 from "../../assets/top.png";
import img2 from "../../assets/bottom.png";

function Third() {
  return (
    <div id="ThirdContainer">
      <div class="topThird">
        <div class="thirdImg">
          <img src={img1} class="thirdImgSelf" id="thirdImgSelf1" />
        </div>
        <div class="thirdP">
            <div id='innerDiv2'>
            <p>
            Develop <br /> Without Limits
          </p>
          <p class="thirdPBottom">
            WooCommerce is developer friendly, too. Built with a REST API,
            WooCommerce is scalable and can integrate with virtually any
            service. Design a complex store from scratch, extend a store for a
            client, or simply add a single product to a WordPress site—your
            store, your way.
          </p>
          <a href="#">
            <p class="anchorP">Read the Documentation</p>
          </a>
            </div>
         
        </div>
      </div>

      <div class="topThird">
        <div class="thirdP" id='test'>
          <div id="innerDiv1">
            <p>
              Develop <br /> Without Limits
            </p>
            <p class="thirdPBottom">
              WooCommerce is developer friendly, too. Built with a REST API,
              WooCommerce is scalable and can integrate with virtually any
              service. Design a complex store from scratch, extend a store for a
              client, or simply add a single product to a WordPress site—your
              store, your way.
            </p>
            <a href="#">
              <p class="anchorP">Read the Documentation</p>
            </a>
          </div>
        </div>
        <div class="thirdImg">
          <img src={img2} class="thirdImgSelf" id="thirdImgSelf2" />
        </div>
      </div>
    </div>
  );
}

export default Third;
