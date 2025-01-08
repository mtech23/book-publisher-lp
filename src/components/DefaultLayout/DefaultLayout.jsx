import React, { useEffect, useState } from 'react'

import logowhiteabs from "../../assets/images/logo-white-abs.png";
import cardbrands from "../../assets/images/card-brands.webp"

import satisfied2 from "../../assets/images/satisfied2.png"
import satisfied4 from "../../assets/images/satisfied4.png"
import satisfied7 from "../../assets/images/satisfied7.png"
import girlImage from "../../assets/images/girl-pop.png"

const DefaultLayout = (props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State to toggle the form visibility

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY >= 70) {
        setIsScrolled(true);  // Add class when scroll position is >= 70
      } else {
        setIsScrolled(false); // Remove class when scroll position is < 70
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleForm = () => {
    setIsOpen((prev) => !prev); // Toggle open/close state
  };
  return (
    <>
      <header className={`header-main ${isScrolled ? 'showmenu' : ''}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="logowrp">
                <a href="/">
                  <img src={logowhiteabs} />
                </a>
              </div>
            </div>
            <div className="col-md-8 my-auto">
              <div className="navwrp">
                <ul>
                  <li>
                    <a className="nmbrrr" href="tel:+(855) 277-7768">
                      <i className="fa fa-phone" aria-hidden="true"></i> (855)
                      277-7768
                    </a>
                  </li>
                  <li>
                    <a className="" href="mailto:info@absoluteghostwriting.com">
                      <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
                      info@absoluteghostwriting.com{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="chatbtn  openChatButton"
                      // onclick="setButtonURL();"
                      onClick={() => { $zopim.livechat.window.toggle() }}
                    >
                      Live Chat
                    </a>
                  </li>
                  <li>
                    <a className="btnmain eggoffer" onClick={() => { setShowModal(true) }}>
                      {" "}
                      <span className="blink">Get Started</span>{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      {props.children}




      <footer>
        <div class="container">
          <div class="row bdr">
            <div class="col-md-4">
              <div class="txtdiv">
                <h4>UNITED STATES</h4>
                <a href="tel:+(855) 277-7768"><i class="fa fa-phone" aria-hidden="true"></i>(855) 277-7768</a>
                <a href="javascript:;"> <i class="fa fa-map-marker" aria-hidden="true"></i> 710 N Florida Ave, <br />Tampa, FL 33602, USA</a>
              </div>
            </div>
            <div class="col-md-4 my-auto">
              <div class="txtdiv">
                <img class="lazy" src={cardbrands}
                  data-src={cardbrands} />
              </div>
            </div>
            <div class="col-md-4 my-auto">
              <div class="btnwrp">
                <a class="btn-1" href="tel:+(855) 277-7768"> <span>Contact Us</span> </a>
                <a class="btn-2 openChatButton" onClick={() => { $zopim.livechat.window.toggle() }} href="javascript:;"> <span style={{ color: '#000' }}>Chat Now</span> </a>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 my-auto">
              <div class="txtwrp">
                <p> Copyright © 2014 - 2024 Absolute Ghostwriting. All rights reserved</p>
                <ul>
                  <li>
                    <a href="javascript:;">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="javascript:;">Terms and Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6 ">
              <div class="awordslogowrp">
                <ul>
                  <li>
                    <img src={satisfied2} />
                  </li>
                  <li>
                    <img src={satisfied4} />
                  </li>
                  <li>
                    <img src={satisfied7} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className={`floating-form ${isOpen ? "open" : ""}`}>
        <div className="inner-float">
          {/* Header section with toggle button */}
          <div className="strip" onClick={toggleForm}>
            <p className="enq blink2">{isOpen ? "Close" : "Enquiry"}</p>
            <span className="icon-paper-plane plane"></span>
            <a href="#" className="btn-close">
              <div className="hamb">
                <div className="bar one"></div>
                <div className="bar second"></div>
                <div className="bar two"></div>
              </div>
            </a>
          </div>

          {/* Form Section */}
          <div className="f-whole">
            <div className="left-sec">
              <h3>What makes Absolute Ghostwriting stand apart?</h3>
              <p>
                So whether it is an autobiography, a self-help book, a business publication, or a work of fiction, we
                have got you covered!
              </p>
              <form method="POST" action="https://www.absoluteghostwriting.com/webpages/lppublisher-bannerFormController.php">
                <div>
                  <input type="text" className="form-control" placeholder="Full Name" name="Name" required />
                  <input type="email" className="form-control" placeholder="Email" name="Email" required />
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Phone Number"
                    name="Number"
                    minLength="11"
                    maxLength="11"
                    required
                  />
                  <textarea
                    className="form-control"
                    name="Message"
                    placeholder="Talk about services you're looking for."
                    required
                  ></textarea>
                  <div className="form-bottom formb-floating">
                    <div className="formb-right">
                      <input className="btn-fill btn-quote" type="submit" value="SIGN UP NOW" />
                      <input className="" type="hidden" name="ctry" value="" />
                      {/* <input className="" type="hidden" name="ctry" value="" /> */}
                      <input type="hidden" name="pc" value="" />
                      <input type="hidden" name="cip" value="" className="form-1-ip" />
                      <input type="hidden" name="hiddencapcha" value="" />
                      <a onClick={() => { $zopim.livechat.window.toggle() }} className="btn-2 blink" style={{ color: "#fff" }}>
                        <span>Live Support</span>
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="f-rght rght-sec"></div>
          </div>
        </div>
      </div>


      <div class="mypopup-wrap" style={{ display: 'none' }}>
        <div class="mypopup">
          <div class="left">
            <figure>
              <img class="lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                data-src="assets/images/girl-pop.png" />
            </figure>
          </div>
          <div class="right">
            <div class="closebutton">x</div>
            <div class="mypopup-innerwrap">
              <h3 class="text-center"> <br />Let's Get Started</h3>
              <div class="form_wrap">
                <div class="analyzeform ">
                  <form class="" method="post" action="../webpages/lppublisher-bannerFormController.php">
                    <div class="row">
                      <div class="wrap">
                        <div class="dtf">
                          <input name="Name" class="round" type="text" placeholder="Enter Name" required="" />
                        </div>
                        <div class="dtf">
                          <input type="email" name="Email" placeholder="Enter email here" required="" />
                        </div>
                        <div class="dtf">
                          <input type="number" name="Number" minlength="11" maxlength="11" placeholder="Enter contact number here" required="" />
                        </div>
                        <div class="dtf">
                          <textarea class="form-control" name="Message"
                            placeholder="Talk about services you're looking for." required></textarea>
                        </div>
                        <div class="dtf text-left">
                          <input class="submit" type="submit" value="Submit" />
                          <input class="" type="hidden" name="ctry" value="" />
                          <input class="" type="hidden" name="ctry" value="" />
                          <input type="hidden" name="pc" value="" />
                          <input type="hidden" name="cip" value="" class="form-1-ip" />
                          <input type="hidden" name="hiddencapcha" value="" />
                          <input type="hidden" id="location" name="locationURL"
                            value="<?php echo 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']; ?>" />

                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <a href="tel:(855) 277-7768" target="_blank" class="whatsapp"><i class="fa fa-phone"></i></a>

      {
        showModal && (
          <div className="mypopup-wrap" bis_skin_checked="1">
            <div className="mypopup" bis_skin_checked="1">
              <div className="left" bis_skin_checked="1">
                <figure>
                  <img className="lazy loaded" src={girlImage} data-src="assets/images/girl-pop.png" data-was-processed="true" />
                </figure>
              </div>
              <div className="right" bis_skin_checked="1">
                <div className="closebutton" bis_skin_checked="1" onClick={() => { setShowModal(false) }}>x</div>
                <div className="mypopup-innerwrap" bis_skin_checked="1">
                  <h3 className="text-center"> Let's Get Started</h3>
                  <div className="form_wrap" bis_skin_checked="1">
                    <div className="analyzeform " bis_skin_checked="1">
                      <form className="" method="post" action="../webpages/lppublisher-bannerFormController.php">
                        <div className="row" bis_skin_checked="1">
                          <div className="wrap" bis_skin_checked="1">
                            <div className="dtf" bis_skin_checked="1">
                              <input name="Name" className="round" type="text" placeholder="Enter Name" required="" />
                            </div>
                            <div className="dtf" bis_skin_checked="1">
                              <input type="email" name="Email" placeholder="Enter email here" required="" />
                            </div>
                            <div className="dtf" bis_skin_checked="1">
                              <input type="number" name="Number" minlength="11" maxlength="11" placeholder="Enter contact number here" required="" />
                            </div>
                            <div className="dtf" bis_skin_checked="1">
                              <textarea className="form-control" name="Message" placeholder="Talk about services you're looking for." required="" >
                              </textarea>
                            </div>
                            <div className="dtf text-left" bis_skin_checked="1">
                              <input className="submit" type="submit" value="Submit" />
                              <input className="" type="hidden" name="ctry" value="" />
                              <input className="" type="hidden" name="ctry" value="" />
                              <input type="hidden" name="pc" value="" />
                              <input type="hidden" name="cip" value="" className="form-1-ip" />
                              <input type="hidden" name="hiddencapcha" value="" />
                              <input type="hidden" id="location" name="locationURL" value="http://www.absoluteghostwriting.com/book-publisher-lp/" />

                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }


    </>
  )
}

export default DefaultLayout
