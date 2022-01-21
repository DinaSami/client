import React from "react";
import "./Footer.css";
import Logo from "../../assets/btnLogo.svg";
import Vector1 from "../../assets/Vector1.svg";
import Vector2 from "../../assets/vector2.svg";
import Vector3 from "../../assets/vector3.svg";
import FooterLogo from "../../assets/footerBottom.svg";
import { BsTwitter, BsFacebook } from "react-icons/bs";
import { MdRssFeed } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <>
      <div id="mainFooter">
        <div id="topFooter">
          <div id="firstDiv2">
            <p id="topFooterP">
              WooCommerce - the<strong> most customizable eCommerce platform </strong>for
              building <strong>your online business.</strong>
            </p>
          </div>
          <div id="firstDiv1">
            <a href="#">
              <p id="topFooterBtn">GET STARTED</p>
            </a>
          </div>
        </div>
        <div id="mainBottomFooter">
          <div id="bottomFooter">
            <div id="topBottom">
              <div class="divP-vec">
                <div class="imageVector">
                  <img src={Vector1} class="imageVectorImg" />
                </div>
                <p class="divP">30 day money back guarantee</p>
              </div>
              <div class="divP-vec">
                <div class="imageVector">
                  <img src={Vector2} class="imageVectorImg" />
                </div>
                <p class="divP">Support teams across the world</p>
              </div>
              <div class="divP-vec">
                <div class="imageVector">
                  <img src={Vector3} class="imageVectorImg" />
                </div>
                <p class="divP">Safe & Secure online payment</p>
              </div>
            </div>
            <div>
              <img src={Logo} />
            </div>
          </div>
          <hr />

          <div id="bottomBottom">
            <div class="flexDiv">
              <p class="headP">Who we Are</p>
              <p class="styleP">About</p>
              <p class="styleP">Team</p>
              <p class="styleP">Work With Us</p>
            </div>

            <div class="flexDiv">
              <p class="headP">Woocommerce</p>
              <p class="styleP">Features</p>
              <p class="styleP">Payments</p>
              <p class="styleP">Marketing</p>
              <p class="styleP">Shipping</p>
              <p class="styleP">Extension Store</p>
              <p class="styleP">eCommerce blog</p>
              <p class="styleP">Development blog</p>
              <p class="styleP">Ideas board</p>
              <p class="styleP">Mobile App</p>
              <p class="styleP">Community</p>
              <p class="styleP">Style Guide</p>
              <p class="styleP">Email Newsletter</p>
            </div>

            <div class="flexDiv">
              <p class="headP">Support</p>
              <p class="styleP">Documentation</p>
              <p class="styleP">Customizations</p>
              <p class="styleP">Support Policy</p>
              <p class="styleP">Contact</p>
              <p class="styleP">Privacy Notice for</p>
              <p class="styleP">COVID-19 Resources</p>
              <p class="styleP">California Users</p>
            </div>

            <div class="flexDiv">
              <p class="headP">Other products</p>
              <p class="styleP">Storefront</p>
              <p class="styleP">WooSlider</p>
              <p class="styleP">Sensei</p>
              <p class="styleP">Sensei Extensions</p>
            </div>

            <div class="flexDiv">
              <p class="headP">We recommend</p>
              <p class="styleP">WooExperts</p>
              <p class="styleP">Hosting Solutions</p>
              <p class="styleP">Pre-sales FAQ</p>
              <p class="styleP">Success Stories</p>
              <p class="styleP">Design Feedback Group</p>
            </div>
          </div>
        </div>
        <div id="thirdBottom">
          <div id='iconsFooter'>
              <div id='editIcons'>
            <a href='#'><BsTwitter size='20px'/></a>
            <a href='#'><BsFacebook size='20px'/></a>
            <a href='#'><MdRssFeed size='20px'/></a>
            <a href='#'><AiFillInstagram size='20px'/></a>
              </div>
          </div>
          <p id='footerPar'>
            COPYRIGHT WOOCOMMERCE 2020 -{" "}
            <a href='#'>
              <span><strong>TERMS & CONDITIONS PRIVACY POLICY</strong></span>
            </a>
          </p>
          <div id='finalImg'>
              <img src={FooterLogo} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
