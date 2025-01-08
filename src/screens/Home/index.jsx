import { useState, useEffect } from "react";

import Slider from "react-slick";

import logowhiteabs from "../../assets/images/logo-white-abs.png";
import reagan from "../../assets/images/reagan.mp4";

import rateimg from "../../assets/images/rateimg.png";
import gpartner from "../../assets/images/gpartner.png";
import binsider from "../../assets/images/binsider.png";

import cl5 from "../../assets/images/cl-5.png";
import cl3 from "../../assets/images/cl-3.png";
import cl2 from "../../assets/images/cl-2.png";
import brands1 from "../../assets/images/brands-1.png";
import brands2 from "../../assets/images/brands-2.png";
import brands3 from "../../assets/images/brands-3.png";
import brands4 from "../../assets/images/brands-4.png";
import brand5 from "../../assets/images/brand-5.png";
import brand6 from "../../assets/images/brand-6.png";
import brand8 from "../../assets/images/brand-8.png";
import brand7 from "../../assets/images/brand-7.png";

import fiction_1 from "../../assets/images/fiction/1.png";
import fiction_2 from "../../assets/images/fiction/2.png";
import fiction_3 from "../../assets/images/fiction/3.png";
import fiction_4 from "../../assets/images/fiction/4.png";
import fiction_5 from "../../assets/images/fiction/5.png";
import fiction_6 from "../../assets/images/fiction/6.png";
import fiction_7 from "../../assets/images/fiction/7.png";
import fiction_8 from "../../assets/images/fiction/8.png";

import NonFiction06_669x1024 from "../../assets/images/non-fiction/Non-Fiction-06-669x1024.webp";
import NonFiction07_669x1024 from "../../assets/images/non-fiction/Non-Fiction-07-669x1024.webp";
import NonFiction08_669x1024 from "../../assets/images/non-fiction/Non-Fiction-08-669x1024.webp";
import NonFiction01_669x1024 from "../../assets/images/non-fiction/Non-Fiction-01-669x1024.webp";
import NonFiction02_669x1024 from "../../assets/images/non-fiction/Non-Fiction-02-669x1024.webp";

import Biography_04_669x1024 from "../../assets/images/bio/Biography-04-669x1024.webp";
import Biography_05_669x1024 from "../../assets/images/bio/Biography-05-669x1024.webp";
import Biography_06_669x1024 from "../../assets/images/bio/Biography-06-669x1024.webp";
import Biography_07_669x1024 from "../../assets/images/bio/Biography-07-669x1024.webp";
import Biography_08_669x1024 from "../../assets/images/bio/Biography-08-669x1024.webp";

import Health_04_669x1024 from "../../assets/images/heal/Health-04-669x1024.webp";
import Health_03_669x1024 from "../../assets/images/heal/Health-03-669x1024.webp";
import Health_02_669x1024 from "../../assets/images/heal/Health-02-669x1024.webp";
import Health_08_669x1024 from "../../assets/images/heal/Health-08-669x1024.webp";
import Health_07_669x1024 from "../../assets/images/heal/Health-07-669x1024.webp";

import Romance_04_669x1024 from "../../assets/images/rom/Romance-04-669x1024.webp";
import Romance_03_669x1024 from "../../assets/images/rom/Romance-03-669x1024.webp";
import Romance_02_669x1024 from "../../assets/images/rom/Romance-02-669x1024.webp";
import Romance_01_669x1024 from "../../assets/images/rom/Romance-01-669x1024.webp";
import Romance_07_669x1024 from "../../assets/images/rom/Romance-07-669x1024.webp";

import memoirs_1 from "../../assets/images/memoirs/1.png";
import memoirs_2 from "../../assets/images/memoirs/2.png";
import memoirs_3 from "../../assets/images/memoirs/3.png";
import memoirs_4 from "../../assets/images/memoirs/4.png";
import memoirs_5 from "../../assets/images/memoirs/5.png";
import memoirs_6 from "../../assets/images/memoirs/6.png";
import memoirs_7 from "../../assets/images/memoirs/7.png";

import children_book_1 from "../../assets/images/children-book/1.png";
import children_book_2 from "../../assets/images/children-book/2.png";
import children_book_3 from "../../assets/images/children-book/3.png";
import children_book_4 from "../../assets/images/children-book/4.png";
import children_book_5 from "../../assets/images/children-book/5.png";

import other_1 from "../../assets/images/other/1.png";
import other_2 from "../../assets/images/other/2.png";
import other_3 from "../../assets/images/other/3.png";
import other_4 from "../../assets/images/other/4.png";
import other_5 from "../../assets/images/other/5.png";
import other_6 from "../../assets/images/other/6.png";
import other_7 from "../../assets/images/other/7.png";
import other_8 from "../../assets/images/other/8.png";
import other_9 from "../../assets/images/other/9.png";
import other_10 from "../../assets/images/other/10.png";
import other_11 from "../../assets/images/other/11.png";
import other_12 from "../../assets/images/other/12.png";
import other_13 from "../../assets/images/other/13.png";
import other_14 from "../../assets/images/other/14.png";
import other_15 from "../../assets/images/other/15.png";
import other_16 from "../../assets/images/other/16.png";

import processicon1 from "../../assets/images/process-icon-1.webp";
import processicon2 from "../../assets/images/process-icon-2.webp";
import processicon3 from "../../assets/images/process-icon-3.webp";
import processicon4 from "../../assets/images/process-icon-4.webp";
import processicon5 from "../../assets/images/process-icon-5.webp";
import processicon6 from "../../assets/images/process-icon-6.webp";
import processicon7 from "../../assets/images/process-icon-7.webp";
import processicon8 from "../../assets/images/process-icon-8.webp";

import s5right1 from "../../assets/images/s5right-1.png";

import footericon1 from "../../assets/images/footericon1.png"
import footericon2 from "../../assets/images/footericon2.png"
import footericon3 from "../../assets/images/footericon3.png"
import footericon5 from "../../assets/images/footericon5.png"

import testiimg1 from "../../assets/images/testi-img-1.png"
import testiimg2 from "../../assets/images/testi-img-2.png"
import testiimg3 from "../../assets/images/testi-img-3.jpg"


import secondfoldpublishing2 from "../../assets/images/second-fold-publishing-2.png"


import satisfied2 from "../../assets/images/satisfied2.png"
import satisfied4 from "../../assets/images/satisfied4.png"
import satisfied7 from "../../assets/images/satisfied7.png"
import girlImage from "../../assets/images/girl-pop.png"

import cardbrands from "../../assets/images/card-brands.webp"
import DefaultLayout from "../../components/DefaultLayout/DefaultLayout";
import Notify from "../../components/Notify";


const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track which accordion is active
  // State to track whether the class should be added or not
  const [isScrolled, setIsScrolled] = useState(false);

  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("tabs-memoirs");
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State to toggle the form visibility
  
  const toggleForm = () => {
    setIsOpen((prev) => !prev); // Toggle open/close state
  };

  // Tabs navigation data
  const tabsData = [
    { id: "tabs-fiction", label: "Fiction" },
    { id: "tabs-non-fiction", label: "Non Fiction" },
    { id: "tabs-biography", label: "Biography" },
    { id: "tabs-health", label: "Health" },
    { id: "tabs-romance", label: "Romance" },
    { id: "tabs-memoirs", label: "Autobiographies & Memoirs" },
    { id: "tabs-children-book", label: "Children’s Book" },
    { id: "tabs-others", label: "Best Seller" },
  ];


  useEffect(() => {
    const box = document.getElementById('boxid');
  
    box.addEventListener('mouseover', (event) => {
      // Only proceed if the hovered element is a '.navlist'
      const target = event.target.closest('.navlist');
  
      if (target) {
        const tabIdx = Array.from(target.parentNode.children).indexOf(target);
  
        // Select all '.textboxcontainer' elements and toggle 'active' class
        document.querySelectorAll('.textboxcontainer').forEach((textboxcontainer, index) => {
          textboxcontainer.classList.toggle('active', index === tabIdx);
        });
      }
    });
  }, [])

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

  // Data for accordion
  const accordionData = [
    {
      title: "What Is Absolute Ghostwriting?",
      content:
        "Absolute Ghostwriting provides a number of eBook services, including copywriting, editing, formatting, cover design and publishing. From the novel you always wanted to write to a business guide that would make the future perfect, our professional team will make your dreams come true.",
    },
    {
      title: "How Does Ghostwriting Work?",
      content:
        "Our ghostwriting services process begins with consulting about your vision, target audience, and unique needs. We then assign you a qualified writer who will work closely with you so that we can create a personalized outline. Once we have your permission, the writer will begin creating the eBook draft, utilizing all of your suggestions until it is ready for its final stage.",
    },
    {
      title: "Will I Own The eBook Rights?",
      content:
        "Yes, you will retain full ownership rights to your eBook. After the project is completed, all the rights, title, and cover design will be fully yours. We can assure you that your intellectual property will be safe at every step of this process.",
    },
    {
      title: "How Long Does A Period Take To Complete An eBook Project?",
      content:
        "The eBook time span might differ depending on length and complicatedness; other related services may vary. However, the average or standard eBook takes around weeks, though we work with a client for them to come out perfectly at the right time for them.",
    },
  ];

  // Handle click to toggle accordion sections
  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };


  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1281, // For screens <= 1024px
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // For screens <= 1024px
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800, // For screens <= 768px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For screens <= 480px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const portffSlider = {
    dots: true, // Show navigation dots
    arrows: false, // Hide arrows
    infinite: true, // Enable infinite loop
    autoplay: true, // Slide automatically
    speed: 1000, // Slide transition speed (1s)
    slidesToShow: 5, // 5 slides on large screens
    slidesToScroll: 1, // Scroll 1 slide at a time
    responsive: [
      // Adjust for responsive screens
      {
        breakpoint: 1200, // For screens <= 1200px
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992, // For screens <= 992px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For screens <= 768px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576, // For screens <= 576px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testiwrprslider = {
    dots: false,            // Disable dots navigation
    arrows: true,           // Enable arrows for navigation
    infinite: true,         // Enable infinite looping of slides
    speed: 1000,            // Slide transition speed (in ms) - 1 second (1000 ms)
    autoplay: true,         // Enable autoplay for automatic sliding
    autoplaySpeed: 2000,    // Delay between each slide transition (in ms)
    centerMode: true,       // Enable center mode
    centerPadding: "0",     // No extra padding around the centered slide
    slidesToShow: 2,        // Show 2 slides at a time
    slidesToScroll: 1,      // Scroll 1 slide at a time
    responsive: [           // Adjust for responsive screens
      {
        breakpoint: 1200,   // For screens <= 1200px
        settings: {
          slidesToShow: 2,  // Show 2 slides at a time
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,    // For screens <= 992px
        settings: {
          slidesToShow: 1,  // Show 1 slide at a time
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,    // For screens <= 768px
        settings: {
          slidesToShow: 1,  // Show 1 slide at a time
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,    // For screens <= 576px
        settings: {
          slidesToShow: 1,  // Show 1 slide at a time
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <DefaultLayout>
        {/* <header className={`header-main ${isScrolled ? 'showmenu' : ''}`}>
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
                       onClick={()=>{$zopim.livechat.window.toggle()}}
                      href="javascript:;"
                    >
                      Live Chat
                    </a>
                  </li>
                  <li>
                    <a className="btnmain eggoffer" href="javascript:;">
                      {" "}
                      <span className="blink">Get Started</span>{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header> */}

        <section className="home-banner-wrp">
          <video
            className="myVideo"
            src={reagan}
            autoPlay
            loop
            muted
            playsinline
            preload
            poster="assets/images/banner-11.png"
          ></video>
          <div className="container">
            <div className="row">
              <div className="col-md-6 my-auto">
                <div className="txtwrp">
                  <h2>Creating Books That Are Worth As The Best Sellers!</h2>
                  <p>
                    Known as the best Ghost Writing Company, we know that every
                    idea should be presented in a remembering way. That’s why our
                    experts ghostwriters work closely with you to make your
                    concept an engaging story that your readers can’t put down.
                    Our top most priority is to maintain our quality,
                    storytelling, and attention to detail from start to finish of
                    your book. With us by your side, we make sure your book not
                    only reach the highest selling tag but should be the one that
                    your readers should love.
                  </p>
                </div>
                <div className="imgwrp">
                  <ul>
                    <li>
                      <img
                        className="lazy"
                        // src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                        src={rateimg}
                        data-src={rateimg}
                      />
                    </li>
                    <li>
                      <img
                        className="lazy"
                        // src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                        src={gpartner}
                        data-src={gpartner}
                      />
                    </li>
                    <li>
                      <img
                        className="lazy"
                        // src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                        src={brand6}
                        data-src={brand6}
                      />
                    </li>
                    <li>
                      <img
                        className="lazy"
                        // src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                        src={binsider}
                        data-src={binsider}
                      />
                    </li>
                  </ul>
                </div>
                <div className="btnwrp">
                  <a className="btn-1 eggoffer blink" onClick={()=>{setShowModal(true)}}>
                    {" "}
                    <span className="blink">Let's Get Started</span>{" "}
                  </a>
                  <a
                    className="btn-2 openChatButton blink"
                     onClick={()=>{$zopim.livechat.window.toggle()}}
                    href="javascript:;"
                  >
                    {" "}
                    <span>Chat Now</span>{" "}
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="inner-published-form">
                  <h3>
                    Begin Your Authorship <span>Journey Now! </span>
                  </h3>
                  <form
                    className="serv-published-form"
                    action="https://www.absoluteghostwriting.com/webpages/publishing-bannerFormController.php"
                    method="POST"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="Name"
                            placeholder="Your Name"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="number"
                            name="Number"
                            placeholder="Phone Number"
                            minlength="11"
                            maxlength="11"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-group">
                          <input
                            type="email"
                            name="Email"
                            placeholder="Email Address"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-group-select">
                          <h4>What services are you looking for?</h4>
                          <div className="form-check-flex">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="Service[]"
                                value="Self Publishing"
                                id="selfPublishing"
                              />
                              <label
                                className="form-check-label"
                                for="selfPublishing"
                              >
                                Publishing & Printing
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="Service[]"
                                value="Editing"
                                id="editing"
                              />
                              <label className="form-check-label" for="editing">
                                Editing & Formatting
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="Service[]"
                                value="Cover Design"
                                id="coverDesign"
                              />
                              <label className="form-check-label" for="coverDesign">
                                Cover Design
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="Service[]"
                                value="Printing"
                                id="printing"
                              />
                              <label className="form-check-label" for="printing">
                                Marketing
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="Service[]"
                                value="Interior Formatting"
                                id="interiorFormatting"
                              />
                              <label
                                className="form-check-label"
                                for="interiorFormatting"
                              >
                                Ghostwriting
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="Service[]"
                                value="Illustration"
                                id="illustration"
                              />
                              <label className="form-check-label" for="illustration">
                                Illustration
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>



                      <div className="col-12">
                        <div className="form-group">
                          <button type="submit" className="submit-btn btn-1">
                            <span>Get Started</span>
                          </button>
                          <input type="hidden" name="hiddencapcha" value="" />
                          <input type="hidden" name="ctry" value="" />
                          <input type="hidden" name="pc" value="" />
                          <input
                            type="hidden"
                            name="cip"
                            value=""
                            className="form-1-ip"
                          />
                          <input
                            type="hidden"
                            id="location"
                            name="locationURL"
                            value="<?php echo 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']; ?>"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="client-logowrp">
          <div className="container-fluid">
            <div className="col-md-10 offset-md-1">
              <div className="mainwrp">
                <ul className="amazon_market_slider">
                  <Slider {...settings}>
                    <li>
                      <img className="lazy" src={cl5} data-src={cl5} />
                    </li>
                    <li>
                      <img className="lazy" src={cl3} data-src={cl3} />
                    </li>
                    <li>
                      <img className="lazy" src={cl2} data-src={cl2} />
                    </li>
                    <li>
                      <img className="lazy" src={brands1} data-src={brands1} />
                    </li>
                    <li>
                      <img className="lazy" src={brands2} data-src={brands2} />
                    </li>
                    <li>
                      <img className="lazy" src={brands3} data-src={brands3} />
                    </li>
                    <li>
                      <img className="lazy" src={brands4} data-src={brands4} />
                    </li>
                    <li>
                      <img className="lazy" src={brand5} data-src={brand5} />
                    </li>
                    {/* <li>
                      <img className="lazy" src={brand6} data-src={brand6} />
                    </li> */}

                    <li>
                      <img className="lazy" src={brand8} data-src={brand8} />
                    </li>
                    <li>
                      <img
                        className="lazy"
                        src={brand7}
                        data-src={brand7}
                        style={{ filter: "unset" }}
                      />
                    </li>
                  </Slider>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="secnd-fld mobile-resp">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="tabs_inner">
                  <h2 className="main-heading">Services We Provide</h2>
                </div>
                <div className="row" id="boxid">
                  <div className="col-md-4 navlist">
                    <a href="https://www.absoluteghostwriting.com/publishing-services">
                      <div className="service-thumbnail mc-b-3">
                        <h3 className="">Book Publishing</h3>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-4 navlist">
                    <a href="https://www.absoluteghostwriting.com/ghostwriting-services">
                      <div className="service-thumbnail mc-b-3">
                        <h3 className="">GhostWriting</h3>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-4 navlist">
                    <a href="https://www.absoluteghostwriting.com/book-printing">
                      <div className="service-thumbnail mc-b-3">
                        <h3 className="">Book Printing</h3>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-4 navlist">
                    <a href="https://www.absoluteghostwriting.com/childrens-book">
                      <div className="service-thumbnail mc-b-3">
                        <h3 className="">
                          Childrens Book
                        </h3>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-4 navlist">
                    <a href="https://www.absoluteghostwriting.com/featured-authors">
                      <div className="service-thumbnail mc-b-3">
                        <h3 className="">Featured Authors</h3>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-4 navlist">
                    <a href="https://www.absoluteghostwriting.com/childrens-illustrations">
                      <div className="service-thumbnail mc-b-3">
                        <h3 className="">Illustration</h3>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 my-auto">
                <div className="textbox">
                  <div className="textboxcontainer active">
                    <h2 className="main-heading">
                      Making Great Books Mark Their Way With Our Book Publishing
                      Service
                    </h2>
                    <p className="main-pera">
                      We believe in making your story reach out to every reader
                      globally which is why we are here to help you publish your
                      book smoothly. Our service includes everything that is
                      required for a successful book. Whether it is editing, cover
                      design, formatting, and marketing we are the pros in it.
                      However, with our service we ensure your book stands out in
                      a packed market. Moreover, with our skilled team your book
                      will get published and will capture all the readers. Contact
                      us now for the peace of mind and to bring your book to live!
                    </p>
                  </div>
                  <div className="textboxcontainer">
                    <h2 className="main-heading">
                      Stories Told Your Way, Written By Professionals
                    </h2>
                    <p className="main-pera">
                      Do you have a story to tell? Well, we believe that you do!
                      So, what are you waiting for? Our Ghost Book Writers would
                      be there to help you tell the world your story. Share all of
                      our ideas or unique experiences with them and they'll surely
                      transform those ideas into an interesting book. So, stop
                      waiting and book Ghost Writing Company now for the
                      exceptional ghost writing service in the USA
                    </p>
                  </div>
                  <div className="textboxcontainer">
                    <h2 className="main-heading">
                      Let’s Make Your Words Pop – Quality Book Printing Services!
                    </h2>
                    <p className="main-pera">
                      Who would not want their book to get print with the
                      astonishing colors and text? No one guessed, maybe. We will
                      make sure that your printing experience is seamless from
                      start to finish. We remind ourselves of your budget and
                      ensure things go on fast so we can depend on ourselves in
                      helping you produce a beautiful book according to your
                      vision. Don’t wait before its too late! Get your book print
                      now!
                    </p>
                  </div>
                  <div className="textboxcontainer">
                    <h2 className="main-heading">
                      Books That Make Little Heart Jump!
                    </h2>
                    <p className="main-pera">
                      Our service focus on creating stories that captures the
                      attention of little kids. No matter the story, we know how
                      to make it popular among kids, however we have provided
                      children book writing services to many of our clients and
                      they are well satisfied with it. No doubt, our talented team
                      knows what a child loves to read or to see, they make sure
                      to keep them engage with beautiful characters and engaging
                      content throughout the book. Get a quote today!
                    </p>
                  </div>
                  <div className="textboxcontainer">
                    <h2 className="main-heading">
                      Want To Be In The List? Then Get Into The Spotlight Now!
                    </h2>
                    <p className="main-pera">
                      As an author nothing is prouder then being recognized as a
                      well-known author! That’s why absolute ghostwriting is here
                      with its featured author service. Get yourself among the
                      best authors and imagine being featured author more readers
                      will come across your tales and thoughts. We can help you
                      boost your writing career so that you will reach a million
                      readers worldwide. Do not miss this chance to stand out.
                      Join us now and let the world hear your voice!
                    </p>
                  </div>
                  <div className="textboxcontainer">
                    <h2 className="main-heading">
                      Visual Storytelling At Its Peak, With Our Illustrations
                      Service
                    </h2>
                    <p className="main-pera">
                      Do you believe that the most attracting thing you can do in
                      your book is ‘Illustrations’? Well, we do as making your
                      book with catchy custom illustrations will make the reader
                      engage and get involved into the book. As our priority is to
                      make sure that every great story should have outstanding
                      visuals, undoubtedly this will make your story more
                      appealing and your book a well created. Our team work
                      according to you and keeping your vision in mind, while
                      making sure you get the best of it with us by your side. We
                      work closely with you to ensure every illustration reflects
                      your vision and enhances your story.
                    </p>
                  </div>
                </div>
                <div className="btnwrp">
                  <a className="btn-1 blink eggoffer" onClick={()=>{setShowModal(true)}}>
                    {" "}
                    <span className="blink">Lets Get Started</span>{" "}
                  </a>
                  <a
                    className="btn-2 blink openChatButton"
                     onClick={()=>{$zopim.livechat.window.toggle()}}
                    href="javascript:;"
                  >
                    {" "}
                    <span>Live Chat</span>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="our-published">
          <div className="container">
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8 text-center">
                <h2>Done With The Writing? Lets Publish It Now!</h2>
                <div className="btnwrp">
                  <a className="btn-1 eggoffer" onClick={()=>{setShowModal(true)}}>
                    {" "}
                    <span className="blink">Get a Quote</span>{" "}
                  </a>
                  <a
                    href="javascript:;"
                     onClick={()=>{$zopim.livechat.window.toggle()}}
                    className="btn-2 blink"
                    style={{ color: "#fff" }}
                  >
                    {" "}
                    <span>Live Support</span>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="portfoliowrp">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="txtwrp">
                  <h2 className="main-heading wow fadeInDown">Our Portfolio</h2>
                  <p className="main-pera wow fadeInDown">
                    We ensure that your work is disseminated across key channels,
                    enhancing its visibility. Many of the books we've published
                    have become bestsellers, and yours may be the next big
                    success!
                  </p>
                </div>
                <div className="navwrp">
                  {/* <ul className="tabbing-links">
                  <li data-targetit="tabs-fiction">Fiction</li>
                  <li data-targetit="tabs-non-fiction">Non Fiction</li>
                  <li data-targetit="tabs-biography">Biography</li>
                  <li data-targetit="tabs-health">Health</li>
                  <li data-targetit="tabs-romance">Romance</li>
                  <li className="current" data-targetit="tabs-memoirs">
                    Autobiographies & Memoirs{" "}
                  </li>
                  <li data-targetit="tabs-children-book">Children’s Book</li>
                  <li data-targetit="tabs-others">Best Seller</li>
                </ul> */}
                  <ul className="tabbing-links">
                    {tabsData.map((tab) => (
                      <li
                        key={tab.id}
                        className={activeTab === tab.id ? "current" : ""}
                        onClick={() => setActiveTab(tab.id)}
                        data-targetit={tab.id}
                      >
                        {tab.label}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {activeTab === "tabs-fiction" && (
              <div className="tabs ser-port current tabs-fiction wbport">
                <div className="row">
                  <div className="col-md-12">
                    <div className="port-box">
                      <ul className="portff-slider">
                        <Slider {...portffSlider}>
                          <li className="">
                            <a
                              href="assets/images/fiction/1.png"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={fiction_1}
                                  data-src={fiction_1}
                                  alt="t-1"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/fiction/2.png"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={fiction_2}
                                  data-src={fiction_2}
                                  alt="t-2"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/fiction/3.png"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={fiction_3}
                                  data-src={fiction_3}
                                  alt="t-3"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/fiction/4.png"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={fiction_4}
                                  data-src={fiction_4}
                                  alt="t-4"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/fiction/5.png"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={fiction_5}
                                  data-src={fiction_5}
                                  alt="t-5"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/fiction/6.png"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={fiction_6}
                                  data-src={fiction_6}
                                  alt="t-6"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/fiction/7.png"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={fiction_7}
                                  data-src={fiction_7}
                                  alt="t-7"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/fiction/8.png"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={fiction_8}
                                  data-src={fiction_8}
                                  alt="t-8"
                                />
                              </figure>
                            </a>
                          </li>
                        </Slider>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "tabs-non-fiction" && (
              <div className="tabs ser-port current tabs-non-fiction wbport">
                <div className="row">
                  <div className="col-md-12">
                    <div className="port-box">
                      <ul className="portff-slider">
                        <Slider {...portffSlider}>
                          <li className="">
                            <a
                              href="assets/images/non-fiction/Non-Fiction-06-669x1024.webp"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={NonFiction06_669x1024}
                                  data-src={NonFiction06_669x1024}
                                  alt="t-1"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/non-fiction/Non-Fiction-07-669x1024.webp"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={NonFiction07_669x1024}
                                  data-src={NonFiction07_669x1024}
                                  alt="t-2"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/non-fiction/Non-Fiction-08-669x1024.webp"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={NonFiction08_669x1024}
                                  data-src={NonFiction08_669x1024}
                                  alt="t-3"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/non-fiction/Non-Fiction-01-669x1024.webp"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={NonFiction01_669x1024}
                                  data-src={NonFiction01_669x1024}
                                  alt="t-4"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/non-fiction/Non-Fiction-02-669x1024.webp"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={NonFiction02_669x1024}
                                  data-src={NonFiction02_669x1024}
                                  alt="t-5"
                                />
                              </figure>
                            </a>
                          </li>
                        </Slider>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "tabs-biography" && (
              <div className="tabs ser-port current tabs-biography wbport">
                <div className="row">
                  <div className="col-md-12">
                    <div className="port-box">
                      <ul className="portff-slider">
                        <Slider {...portffSlider}>
                          <li className="">
                            <a
                              href="assets/images/bio/Biography-04-669x1024.webp"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={Biography_04_669x1024}
                                  data-src={Biography_04_669x1024}
                                  alt="t-1"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/bio/Biography-05-669x1024.webp"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={Biography_05_669x1024}
                                  data-src={Biography_05_669x1024}
                                  alt="t-2"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/bio/Biography-06-669x1024.webp"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={Biography_06_669x1024}
                                  data-src={Biography_06_669x1024}
                                  alt="t-3"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/bio/Biography-07-669x1024.webp"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={Biography_07_669x1024}
                                  data-src={Biography_07_669x1024}
                                  alt="t-4"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/bio/Biography-08-669x1024.webp"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={Biography_08_669x1024}
                                  data-src={Biography_08_669x1024}
                                  alt="t-5"
                                />
                              </figure>
                            </a>
                          </li>
                        </Slider>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "tabs-health" && (
              <div className="tabs ser-port current tabs-health wbport">
                <div className="row">
                  <div className="col-md-12">
                    <div className="port-box">
                      <ul className="portff-slider">
                        <Slider {...portffSlider}>
                          <li className="">
                            <a
                              href="assets/images/heal/Health-04-669x1024.webp"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={Health_04_669x1024}
                                  data-src={Health_04_669x1024}
                                  alt="t-1"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/heal/Health-03-669x1024.webp"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={Health_03_669x1024}
                                  data-src={Health_03_669x1024}
                                  alt="t-2"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/heal/Health-02-669x1024.webp"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={Health_02_669x1024}
                                  data-src={Health_02_669x1024}
                                  alt="t-3"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/heal/Health-08-669x1024.webp"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={Health_08_669x1024}
                                  data-src={Health_08_669x1024}
                                  alt="t-4"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/heal/Health-07-669x1024.webp"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={Health_07_669x1024}
                                  data-src={Health_07_669x1024}
                                  alt="t-5"
                                />
                              </figure>
                            </a>
                          </li>
                        </Slider>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "tabs-romance" && (
              <div className="tabs ser-port current tabs-romance wbport">
                <div className="row">
                  <div className="col-md-12">
                    <div className="port-box">
                      <ul className="portff-slider">
                        <Slider {...portffSlider}>
                          <li className="">
                            <a
                              href="assets/images/rom/Romance-04-669x1024.webp"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={Romance_04_669x1024}
                                  data-src={Romance_04_669x1024}
                                  alt="t-1"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/rom/Romance-03-669x1024.webp"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={Romance_03_669x1024}
                                  data-src={Romance_03_669x1024}
                                  alt="t-2"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/rom/Romance-02-669x1024.webp"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={Romance_02_669x1024}
                                  data-src={Romance_02_669x1024}
                                  alt="t-3"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/rom/Romance-01-669x1024.webp"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={Romance_01_669x1024}
                                  data-src={Romance_01_669x1024}
                                  alt="t-4"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/rom/Romance-07-669x1024.webp"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={Romance_07_669x1024}
                                  data-src={Romance_07_669x1024}
                                  alt="t-5"
                                />
                              </figure>
                            </a>
                          </li>
                        </Slider>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "tabs-memoirs" && (
              <div className="tabs ser-port current tabs-memoirs wbport">
                <div className="row">
                  <div className="col-md-12">
                    <div className="port-box">
                      <ul className="portff-slider">
                        <Slider {...portffSlider}>
                          <li className="">
                            <a
                              href="assets/images/memoirs/1.png"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={memoirs_1}
                                  data-src={memoirs_1}
                                  alt="t-1"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/memoirs/2.png"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={memoirs_2}
                                  data-src={memoirs_2}
                                  alt="t-2"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/memoirs/3.png"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={memoirs_3}
                                  data-src={memoirs_3}
                                  alt="t-3"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/memoirs/4.png"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={memoirs_4}
                                  data-src={memoirs_4}
                                  alt="t-4"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/memoirs/5.png"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={memoirs_5}
                                  data-src={memoirs_5}
                                  alt="t-5"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/memoirs/6.png"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={memoirs_6}
                                  data-src={memoirs_6}
                                  alt="t-6"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/memoirs/7.png"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={memoirs_7}
                                  data-src={memoirs_7}
                                  alt="t-7"
                                />
                              </figure>
                            </a>
                          </li>
                        </Slider>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "tabs-children-book" && (
              <div className="tabs ser-port current tabs-children-book wbport">
                <div className="row">
                  <div className="col-md-12">
                    <div className="port-box">
                      <ul className="portff-slider">
                        <Slider {...portffSlider}>
                          <li className="">
                            <a
                              href="assets/images/children-book/1.png"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={children_book_1}
                                  data-src={children_book_1}
                                  alt="t-1"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/children-book/2.png"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={children_book_2}
                                  data-src={children_book_2}
                                  alt="t-2"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/children-book/3.png"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={children_book_3}
                                  data-src={children_book_3}
                                  alt="t-3"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/children-book/4.png"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={children_book_4}
                                  data-src={children_book_4}
                                  alt="t-4"
                                />
                              </figure>
                            </a>
                          </li>

                          <li className="">
                            <a
                              href="assets/images/children-book/5.png"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={children_book_5}
                                  data-src={children_book_5}
                                  alt="t-6"
                                />
                              </figure>
                            </a>
                          </li>
                        </Slider>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "tabs-others" && (
              <div className="tabs ser-port current tabs-others wbport">
                <div className="row">
                  <div className="col-md-12">
                    <div className="port-box">
                      <ul className="portff-slider">
                        <Slider {...portffSlider}>
                          <li className="">
                            <a
                              href="assets/images/other/1.png"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={other_1}
                                  data-src={other_1}
                                  alt="t-1"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/other/2.png"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={other_2}
                                  data-src={other_2}
                                  alt="t-2"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/other/3.png"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={other_3}
                                  data-src={other_3}
                                  alt="t-3"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/other/4.png"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={other_4}
                                  data-src={other_4}
                                  alt="t-4"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/other/5.png"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={other_5}
                                  data-src={other_5}
                                  alt="t-5"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/other/6.png"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={other_6}
                                  data-src={other_6}
                                  alt="t-6"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/other/7.png"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={other_7}
                                  data-src={other_7}
                                  alt="t-7"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/other/8.png"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={other_8}
                                  data-src={other_8}
                                  alt="t-8"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/other/9.png"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={other_9}
                                  data-src={other_9}
                                  alt="t-9"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/other/10.png"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={other_10}
                                  data-src={other_10}
                                  alt="t-10"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/other/11.png"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={other_11}
                                  data-src={other_11}
                                  alt="t-11"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/other/12.png"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={other_12}
                                  data-src={other_12}
                                  alt="t-12"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/other/13.png"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={other_13}
                                  data-src={other_13}
                                  alt="t-12"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/other/14.png"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={other_14}
                                  data-src={other_14}
                                  alt="t-12"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/other/15.png"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={other_15}
                                  data-src={other_15}
                                  alt="t-12"
                                />
                              </figure>
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="assets/images/other/16.png"
                              data-fancybox="port"
                            >
                              <figure>
                                <img
                                  className="lazy"
                                  src={other_16}
                                  data-src={other_16}
                                  alt="t-12"
                                />
                              </figure>
                            </a>
                          </li>
                        </Slider>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}


          </div>
        </section>

        <section className="awards-new-sec">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="hd-txt">
                  <h4>Our Awards</h4>
                  <h2>You Can Call Us Multiple Times <span>We are Recognized with the</span> Quality</h2>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="award-list-st">
                  <ul>
                    <li>
                      <img src={footericon1} />
                    </li>
                    <li>
                      <img src={footericon2} />
                    </li>
                    <li>
                      <img src={footericon3} />
                    </li>
                    <li>
                      <img src={footericon5} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="process-sec scroll-invisible">
          <div className="container">
            <div className="process-sec-head">
              <div className="row">
                <div className="col-md-7">
                  <h3>What Makes Us Apart?</h3>
                </div>
                <div className="col-md-5">
                  <p>
                    Absolute Ghostwriting is the best option for making your
                    writing aspirations come true. We are dedicated in making you
                    stand at the top as the well-known author. Our dedicated team
                    believes in ensuring a smooth and successful publishing
                    experience for you.
                  </p>
                </div>
              </div>
            </div>
            <div className="row process-box-slider">
              <div className="col-md-3">
                <div className="process-box">
                  <img src={processicon1} />
                  <span>01</span>

                  <h4>Expertise Across Genres</h4>
                  <p>
                    Absolute Ghostwriting's skilled crew has considerable
                    experience in a range of genres. We want to help you see your
                    manuscript in print, no matter how intense the mystery is in
                    your novel or how romantic your book will be, for that
                    matter-even if it is a non-fiction work but highly
                    thought-provoking. From writing in every genre, we know how to
                    help your work reach the right audience.
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="process-box">
                  <img src={processicon2} />

                  <span>02</span>
                  <h4>Personalized Publishing Plans</h4>
                  <p>
                    We understand that every author's journey is unique. That is
                    why we create personalized publishing services that are suited
                    to your specific demands and goals. From the earliest concept
                    to the final publication, our tailored approach guarantees
                    that every aspect of your project is consistent with your
                    vision and maximizes its commercial potential.
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="process-box">
                  <img src={processicon3} />
                  <span>03</span>

                  <h4>Strong Industry Connections</h4>
                  <p>
                    Use our wide network of industry contacts to give your book
                    the best chance of success. Our links with publishers,
                    literary agents, and marketing specialists provide your
                    manuscript with insider knowledge and prospects. We connect
                    you with the people who can help your book reach its greatest
                    potential.
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="process-box">
                  <img src={processicon4} />
                  <span>04</span>

                  <h4>Comprehensive Services</h4>
                  <p>
                    Absolute Ghostwriting provides a broad range of services to
                    help you through every stage of your publishing journey. From
                    ghostwriting and editing to formatting, design, and marketing
                    services, we do it all. Our comprehensive approach means you
                    have a single, dependable source for all of your publishing
                    needs, expediting the process and assuring a consistent final
                    product.{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="process-box">
                  <img src={processicon5} />
                  {/* <!-- • : --> */}
                  <span>05</span>
                  <h4>Guaranteed Success</h4>
                  <p>
                    Our historical performance speaks for itself. Absolute
                    Ghostwriting has a proven track record of converting
                    manuscripts into profitable, well-received products. With
                    innumerable satisfied clients and successful projects under
                    our belt, we are proud of our track record of delivering
                    results and exceeding expectations in the highly competitive
                    publishing industry.
                  </p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="process-box">
                  <img src={processicon6} />
                  <span>06</span>
                  <h4>The Epic Launch Day</h4>
                  <p>
                    After all, it is knowing that the day of launch makes all the
                    difference in success, which puts a book into smooth sailing.
                    Absolute Ghostwriting presents some awe-inspiring launch plans
                    and executes them aggressively to create buzz and attract the
                    target audience for your book. We take care of advertising and
                    various engaging events so that your book makes an indelible
                    mark and reaches as many potential readers as possible on the
                    day of its launch.
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="process-box">
                  <img src={processicon7} />
                  <span>07</span>
                  <h4>Sustained Buzz</h4>
                  <p>
                    Our dedication to your book does not end with the launch. We
                    use continuing marketing techniques to maintain momentum and
                    keep your book in the spotlight. We ensure that your book
                    attracts attention and generates sales long after it is
                    published by utilizing social media, media placements, and
                    ongoing promotional activities.
                  </p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="process-box">
                  <img src={processicon8} />
                  <span>08</span>
                  <h4>Analytical Perspectives</h4>
                  <p>
                    Understanding how your book performs is essential for making
                    educated decisions. Absolute Ghostwriting delivers precise
                    metrics and insights into your book's sales, reader
                    engagement, and market trends. You can analyze success,
                    optimize strategy, and plan for future initiatives with
                    confidence thanks to our data-driven approach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="secnd-fld">
          <div className="container">
            <div className="row">
              <div className="col-md-6 ">
                <div className="">
                  <img className="lazy" src={s5right1}
                    data-src={s5right1} />
                </div>
              </div>
              <div className="col-md-6 my-auto">
                <div className="txtwrp">
                  <h2 className="main-heading">How To Make More Money From Your Book By Targeted Campaigning</h2>
                  <p className="main-pera">At Absolute Ghostwriting, we specialize in connecting authors with a global audience, turning your literary dreams into reality, and maximizing your earnings. Our comprehensive services ensure your book reaches readers worldwide through targeted marketing strategies, global distribution networks, and personalized promotional efforts. By leveraging our expertise, you can tap into new markets, increase your visibility, and enjoy the financial rewards of a wider audience. Partner with us to amplify your reach and boost your earnings, turning your book into a global success story. </p>
                </div>
                <div className="btnwrp">
                  <a className="btn-1 eggoffer blink" onClick={()=>{setShowModal(true)}}> <span className="blink">Lets Get Started</span> </a>
                  <a className="btn-2 openChatButton blink" href="javascript:;"  onClick={()=>{$zopim.livechat.window.toggle()}}> <span>Live Chat</span> </a>
                </div>
              </div>
            </div>
          </div>
        </section>



        <section className="roleswrp">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-left">
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 p-0">
                <h2 className="main-heading">Frequently Asked Questions</h2>
                <div className="boxwrp">
                  <h4>Have More Questions?</h4>
                  <p className="main-pera">Check our FAQ page for instant answers to common questions you may have regarding our services.</p>
                  <a className="btn-img blink" href="javascript:;"  onClick={()=>{$zopim.livechat.window.toggle()}}>
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                      data-src="assets/images/image-69.png" />
                  </a>
                  <a className="btn-2 blink" href="javascript:;"  onClick={()=>{$zopim.livechat.window.toggle()}}> <span>Speak with our strategist</span> <i
                    className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="accordion">
                  {/* <div className="quest-section active"> <a className="quest-title active" href="#accordion-1"> What Is Absolute Ghostwriting? </a>
                  <div id="accordion-1" className="quest-content open" style={{display: 'block'}}>
                    <div className="row bodrbtm">
                      <div className="col-md-12">
                        <h4>Absolute Ghostwriting provides a number of eBook services, including copywriting, editing, formatting, cover design and publishing. From the novel you always wanted to write to a business guide that would make the future perfect, our professional team will make your dreams come true.</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="quest-section"> <a className="quest-title " href="#accordion-3">How Does Ghostwriting Work?</a>
                  <div id="accordion-3" className="quest-content">
                    <div className="row bodrbtm">
                      <div className="col-md-12">
                        <h4>Our ghostwriting services process begins with consulting about your vision, target audience, and unique needs. We then assign you a qualified writer who will work closely with you so that we can create a personalized outline. Once we have your permission, the writer will begin creating the eBook draft, utilizing all of your suggestions until it is ready for its final stage.</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="quest-section"> <a className="quest-title" href="#accordion-4">Will I Own The eBook Rights?</a>
                  <div id="accordion-4" className="quest-content">
                    <div className="row bodrbtm">
                      <div className="col-md-12">
                        <h4>Yes, you will retain full ownership rights to your eBook. After the project is completed, all the rights, title, and cover design will be fully yours. We can assure you that your intellectual property will be safe at every step of this process.</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="quest-section"> <a className="quest-title " href="#accordion-5"> How Long Does A Period Take To Complete An eBook Project? </a>
                  <div id="accordion-5" className="quest-content">
                    <div className="row bodrbtm">
                      <div className="col-md-12">
                        <h4>The eBook time span might differ depending on length and complicatedness; other related services may vary. However, the average or standard eBook takes around weeks, though we work with a client for them to come out perfectly at the right time for them.</h4>
                      </div>
                    </div>
                  </div>
                </div> */}
                  {accordionData.map((item, index) => (
                    <div
                      key={index}
                      className={`quest-section ${activeIndex === index ? "active" : ""}`}
                    >
                      <a
                        className={`quest-title ${activeIndex === index ? "active" : ""}`}
                        href="#!"
                        onClick={() => handleClick(index)}
                      >
                        {item.title}
                      </a>
                      <div
                        className={`quest-content ${activeIndex === index ? "open" : ""}`}
                        style={{ display: activeIndex === index ? "block" : "none" }}
                      >
                        <div className="row bodrbtm">
                          <div className="col-md-12">
                            <h4>{item.content}</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="testimnl">
          <div className="container">
            <div className="row">
              <div className="col-md-4 my-auto">
                <div className="txt-wrp">
                  <h3 className="">The most trusted SEO agency in america</h3>
                  <h4 className="">Have A Look At <br /> Our Loyal Customers</h4>
                  <p className="wow fadeInUp">Client happiness is at the center of all we do, and it is critical to our success. We thrive because our clients trust us, and hundreds of satisfied customers are the foundation of our success.</p>
                </div>
              </div>
              <div className="col-md-8">
                <div className="abstl">
                  <div className="testiwrprslider">
                    <Slider {...testiwrprslider}>
                      <div>
                        <div className="testim-wrp">
                          <i className="fa fa-quote-right" aria-hidden="true"></i>
                          <h4 className="list-scroll">Absolute Ghostwriting did an excellent job with my book publication! They made the entire process very simple, from book editing to designing the cover. I didn't have to worry about anything; everything was handled with professionalism. My book is now available to readers worldwide, and I couldn't be happier!</h4>
                          <div className="img-wrp">
                            <img src={testiimg1} />
                          </div>
                          <div className="desgnt-sec">
                            <b>– Michael James</b>
                            <h6> Author </h6>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="testim-wrp">
                          <i className="fa fa-quote-right" aria-hidden="true"></i>
                          <h4 className="list-scroll">Absolute Ghostwriting did an amazing illustration for my children's book! Colorful, interesting, and just right for what I wanted. The team collaborated with me to get all my characters and settings just right. The readers love it!</h4>
                          <div className="img-wrp">
                            <img src={testiimg2} />
                          </div>
                          <div className="desgnt-sec">
                            <b>– Ava Isabella</b>
                            <h6>Author</h6>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="testim-wrp">
                          <i className="fa fa-quote-right" aria-hidden="true"></i>
                          <h4 className="list-scroll">I was unable to put my thoughts into words, but Absolute Ghostwriting saved the day. Absolutely, they caught my concept well and created a book that exhibits my story vividly. The ghostwriter was always available. The end outcome was better than what I expected.</h4>
                          <div className="img-wrp">
                            <img src={testiimg3} />
                          </div>
                          <div className="desgnt-sec">
                            <b>– William David</b>
                            <h6>Author</h6>
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="myprocess main-ghst-sec">
          <div className="container ">
            <div className="row">
              <div className="col-md-6">
                <div className="form-ryt-img">
                  <img className="lazy" src={secondfoldpublishing2}
                    data-src={secondfoldpublishing2} />
                </div>
              </div>
              <div className=" col-md-6 text-center my-auto">
                <div className="home-banner-content">
                  <div className="col-md-12 inner-content mtpx-100 text-left">
                    <div className="form-box-main clearfix">
                      <h2>We would love to hear from you</h2>
                      <form method="POST" action="https://www.absoluteghostwriting.com/webpages/lppublisher-bannerFormController.php" enctype="multipart/form-data">
                        <div className="row">
                          <div className="col-md-6">
                            <label className="field-txt">Name <span>*</span></label>
                            <input id="username" name="Name" minlength="2" type="text" placeholder="Enter your name"
                              required />
                          </div>
                          <div className="col-md-6">
                            <label className="field-txt">Email <span>*</span></label>
                            <input id="cemail" type="email" name="Email" placeholder="Enter email here" required />
                          </div>
                          <div className="col-md-12 numss">
                            <label className="field-txt">Phone Number<span>*</span></label>
                            <input className="numwrp" name="Number" minlength="11" maxlength="11" type="text" placeholder="Phone Number" required />
                          </div>
                          <div className="col-md-12">
                            <label className="field-txt">Additional Comments <span>*</span></label>
                            <textarea name="Message" placeholder="Enter message here"></textarea>
                          </div>
                          <div className="col-md-12">
                            <input className="btn-theme" type="submit" value="Submit" />
                            <input type="hidden" name="hiddencapcha" value="" />
                            <input type="hidden" name="ctry" value="" />
                            <input type="hidden" name="pc" value="" />
                            <input type="hidden" name="cip" value="" className="form-1-ip" />
                            <input type="hidden" id="location" name="locationURL"
                              value="<?php echo 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']; ?>" />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
                  <div className="closebutton" bis_skin_checked="1" onClick={()=>{setShowModal(false)}}>x</div>
                  <div className="mypopup-innerwrap" bis_skin_checked="1">
                    <h3 className="text-center"> Let's Get Started</h3>
                    <div className="form_wrap" bis_skin_checked="1">
                      <div className="analyzeform " bis_skin_checked="1">
                        <form className="" method="post" action="https://www.absoluteghostwriting.com/webpages/lppublisher-bannerFormController.php">
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
                                <input type="hidden" name="cip" value="119.73.110.172" className="form-1-ip" />
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

        <Notify />

      </DefaultLayout>
    </>
  )
}

export default Home
