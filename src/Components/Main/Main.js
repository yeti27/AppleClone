import React, { Component } from "react";

import appletv4 from "../../images/icons/tv4k_logo_large.png";

// import series5 from "../../images/icons/watch-series5-logo.png";
import card from "../../images/icons/logo_card_large.png"
import arcade from "../../images/icons/arcade-lg.png";
import watch from "../../images/icons/promo_logo_watch_series_6_small.png"

import Fourth from "./Fourth/Fourth";
import Rating from "./Rating/Rating";
import Youtube from "../Youtube/Youtube";

function Main() {
  return (
    <div>
      <section className="alert-section top-50">
        <div className="container">
          
          <div className="alert-text">
            <a href="https://support.apple.com/">Shop online </a> and get Specialist help, free no-contact delivery, and more.
          </div>
        </div>
      </section>

      <section className="first-hightlight-wrapper">
        <div className="container">
          

          <div className="title-wraper bold black">iPad Pro</div>
          <div className="description-wrapper white">
Supercharged by the Apple M1 chip.

</div>
<div className="description-wrapper grey">
  Available second half of May
</div>

          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Order</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="second-hightlight-wrapper">
        <div className="container">
          <div className="title-wraper  bold ">iPhone 12 </div>
          
        <div className="description-wrapper black">
          Purple. Now in season.
          </div>

          <div className="price-wrapper grey">From $29.12/mo. for 24 mo. or $699 before trade‑in1
          <br/>Buy directly from Apple with special carrier offers
          </div>

          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Buy</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="third-hightlight-wrapper">
        <div className="container">
          <div className="title-wraper bold1 ">iMac</div>

          <div className="description-wrapper">
            Say hello.
             
          </div>

           <div className="price-wrapper gray">
           Available second half of May
           </div>

          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more Order</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="fourth-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="title-wraper bold ">iPhone 12 Pro</div>
                <div className="description-wraper white">
                
                         It’s a leap year.


                </div>
                <div className="price-wrapper gray">
                From $41.62/mo. for 24 mo. or $999 before trade‑in

                   <sup>2</sup>
                   <br/>Buy directly from Apple with special carrier offers
                </div>

                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href="">Learn more
                     </a>
                    </li>
                    <li>
                      <a href="">Buy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <div className="img-wrapper">
                  <a href=""><img src={watch}/></a>
                </div>
                <div className="description-wraper white">
                  The future of health is on your wrist.
                </div>

                <div className="links-wrapper white">
                  <ul>
                    <li>
                      <a href="">Learn more</a>
                    </li>
                    <li>
                      <a href="">Buy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fifth-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="top-logo-wrapper">
                    <div className="new-alert">New</div>
                  <div className="logo-wrapper">

                    <img src={appletv4} />
                  </div>

                </div>

                <div className="tvshow-logo-wraper">
                  
                </div>

                <div className="watch-more-wrapper">
                  A higher<br/> definition of TV.
                </div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href="">Learn more</a>
                    </li>
                    <li>
                      <a href="">Buy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <div className="top-logo-wrapper">
                </div>
                <div className="description-wraper ">
                <div className="title-wraper ">
           Save more with <br/>Apple Trade In.
              </div>
            <div className="description-wraper">
                    Get creadit toward a new  device when you <br/>trade your current one.<sup>3</sup>
                    it's easy to do <br/>online or in stores.
              </div>  
                </div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href="">Learn more</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sixth-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="top-logo-wrapper">
                  <div className="logo-wrapper">
                    <img src={card} />
                  </div>
                </div>
                <div className="description-wraper black">
                Get 3% Daily cash bank on<br/>
				 purchases from Apple when<br/> you use Apple card.

                </div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href="">Learn more</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
              <div className="logo-wrapper">
                    <img src={arcade} />
                  </div>
                <div className="title-wraper">
                  The Oregon Trail.play now.
                </div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href="">Learn more</a>
                    </li>
                    <li>
                      <a href="">Try it free <sup>4</sup></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="youtubeVideosWrapper top-10">
        <Youtube />
      </section>
    </div>
  );
}

export default Main;
