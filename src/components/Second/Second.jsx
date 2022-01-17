import React from "react";
import "./Second.css";
import Image1 from "../../assets/firstCard.png";
import Image2 from "../../assets/secondCard.png";
import Image3 from "../../assets/thirdCard.png";
function Second() {
  return (
    <div id="cointainer">
      <p id='SecondP'>Your eCommerce made simple</p>
      <div id="cardContainer">

        <div class="card">
          <div class="topCard">
            <img src={Image1} />
          </div>
          <div class="bottomCard">
            <p class='cardP'>All You Need to Start</p>
            <p class='cardP2'>
              Add WooCommerce plugin to any WordPress site and set up a new
              store in minutes.
            </p>
            <p class='cardP3'>Ecommerce for Wordpress ›</p>
          </div>
        </div>
  
        <div class="card" id='centerCard'>
          <div class="topCard" >
            <img src={Image2} />
          </div>
          <div class="bottomCard">
            <p class='cardP'>Customize and Extend</p>
            <p class='cardP2'>
            From subscriptions to gym classes to luxury cars, WooCommerce is fully customizable.
            </p>
            <p class='cardP3'>Ecommerce for Wordpress ›</p>
          </div>
        </div>

        <div class="card">
          <div class="topCard" id='thirdCard'>
            <img src={Image3} />
          </div>
          <div class="bottomCard">
            <p class='cardP'>Active Community</p>
            <p class='cardP2'>
            WooCommerce is one of the fastest-growing eCommerce communities.
            </p>
            <p  class='cardP3'>Check our Forums ›</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Second;
