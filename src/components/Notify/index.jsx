import React, { useState, useEffect } from "react";
import "./style.css"; // Create a CSS file for styles
// import { map } from "../../asser/images";
import map from "../../assets/images/fiction/map-1.jpg";

const Notify = () => {
    // Arrays for names, locations, maps, and products
    const r_names = ["John cowell", "Jane Smith", "David Brown", "Lisa Johnson", "Chris Evans", "Emily Davis", "Mark Wilson"];
    const r_text = ["California", "Texas", "New York", "Florida", "Washington", "Illinois", "Arizona", "Georgia"];
    const r_map = [
        "<img src={map}/>]",
        "<img src={map}/>]",
        "<img src={map}/>]",
        "<img src={map}/>]",
        "<img src={map}/>]",
        "<img src={map}/>]"
    ];
    const r_product = ["Ghostwriting services", "Book Editing", "Manuscript Review", "Book Publishing Consultation", "Content Development", "Book Marketing", "Cover Design"];

    // State to manage notification content
    const [notification, setNotification] = useState({
        name: "",
        location: "",
        map: "",
        product: "",
        time: 0,
    });

    const [show, setShow] = useState(false); // State to show/hide notification

    // Function to generate random notification content
    const generateNotification = () => {
        const randomName = r_names[Math.floor(Math.random() * r_names.length)];
        const randomLocation = r_text[Math.floor(Math.random() * r_text.length)];
        const randomMap = r_map[Math.floor(Math.random() * r_map.length)];
        const randomProduct = r_product[Math.floor(Math.random() * r_product.length)];
        const randomTime = Math.floor(Math.random() * 6) + 1;

        setNotification({
            name: randomName,
            location: randomLocation,
            map: randomMap,
            product: randomProduct,
            time: randomTime,
        });

        setShow(true);

        // Auto-hide the notification after 6 seconds
        setTimeout(() => {
            setShow(false);
        }, 6000);
    };

    useEffect(() => {
        // Show the first notification immediately
        generateNotification();

        // Show a new notification every 14 seconds
        const interval = setInterval(() => {
            generateNotification();
        }, 14000);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    const [activeCase, setActiveCase] = useState(0);
    const [showBox, setShowBox] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowBox(true);
            setActiveCase((prev) => (prev >= 6 ? 1 : prev + 1));
            setTimeout(()=>{
                setShowBox(false);
            },6000)
        }, 15000);

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [activeCase]);
    const notiFicationShow = () => {
        switch (activeCase) {
            case 1:
                return (
                    <div className="custom-notification">
                        <div className="custom-notification-image-wrapper">
                            <img id="map1" src={map} alt="Map" />
                        </div>
                        <div className="custom-notification-content-wrapper">
                            <p className="custom-notification-content">
                                <span id="name">Jane Smith</span> from{" "}
                                <span id="country">{notification?.location}</span>
                                <br />
                                recently signed up for <span id="product">{notification?.product}</span>
                                <small>
                                    <span id="time">1</span> hour ago
                                </small>
                            </p>
                        </div>
                        <div className="custom-close" onClick={() => setShowBox(false)}>
                            &times;
                        </div>

                    </div>
                )

            case 2:
                return (
                    <div className="custom-notification">
                        <div className="custom-notification-image-wrapper">
                            <img id="map1" src={map} alt="Map" />
                        </div>
                        <div className="custom-notification-content-wrapper">
                            <p className="custom-notification-content">
                                <span id="name">David Brown</span> from{" "}
                                <span id="country">{notification?.location}</span>
                                <br />
                                recently signed up for <span id="product">{notification?.product}</span>
                                <small>
                                    <span id="time">2</span> hours ago
                                </small>
                            </p>
                        </div>
                        <div className="custom-close" onClick={() => setShowBox(false)}>
                            &times;
                        </div>

                    </div>
                )

            case 3:
                return (
                    <div className="custom-notification">
                        <div className="custom-notification-image-wrapper">
                            <img id="map1" src={map} alt="Map" />
                        </div>
                        <div className="custom-notification-content-wrapper">
                            <p className="custom-notification-content">
                                <span id="name">Lisa Johnson</span> from{" "}
                                <span id="country">{notification?.location}</span>
                                <br />
                                recently signed up for <span id="product">{notification?.product}</span>
                                <small>
                                    <span id="time">3</span> hours ago
                                </small>
                            </p>
                        </div>
                        <div className="custom-close" onClick={() => setShowBox(false)}>
                            &times;
                        </div>

                    </div>
                )

            case 4:
                return (
                    <div className="custom-notification">
                        <div className="custom-notification-image-wrapper">
                            <img id="map1" src={map} alt="Map" />
                        </div>
                        <div className="custom-notification-content-wrapper">
                            <p className="custom-notification-content">
                                <span id="name">Emily Davis</span> from{" "}
                                <span id="country">{notification?.location}</span>
                                <br />
                                recently signed up for <span id="product">{notification?.product}</span>
                                <small>
                                    <span id="time">4</span> hours ago
                                </small>
                            </p>
                        </div>
                        <div className="custom-close" onClick={() => setShowBox(false)}>
                            &times;
                        </div>

                    </div>
                )

            case 5:
                return (
                    <div className="custom-notification">
                        <div className="custom-notification-image-wrapper">
                            <img id="map1" src={map} alt="Map" />
                        </div>
                        <div className="custom-notification-content-wrapper">
                            <p className="custom-notification-content">
                                <span id="name">Mark Wilson</span> from{" "}
                                <span id="country">{notification?.location}</span>
                                <br />
                                recently signed up for <span id="product">{notification?.product}</span>
                                <small>
                                    <span id="time">5</span> hours ago
                                </small>
                            </p>
                        </div>
                        <div className="custom-close" onClick={() => setShowBox(false)}>
                            &times;
                        </div>

                    </div>
                )

            case 6:
                return (
                    <div className="custom-notification">
                        <div className="custom-notification-image-wrapper">
                            <img id="map1" src={map} alt="Map" />
                        </div>
                        <div className="custom-notification-content-wrapper">
                            <p className="custom-notification-content">
                                <span id="name">John cowell</span> from{" "}
                                <span id="country">{notification?.location}</span>
                                <br />
                                recently signed up for <span id="product">{notification?.product}</span>
                                <small>
                                    <span id="time">6</span> hour ago
                                </small>
                            </p>
                        </div>
                        <div className="custom-close" onClick={() => setShowBox(false)}>
                            &times;
                        </div>

                    </div>
                )

            default:
                return ('')
        }
    }

    return (
        <>
            {
                showBox && (
                    <section className={`custom-social-proof`}>
                        <div>{notiFicationShow()}</div>

                    </section>
                )
            }
        </>
    );
};

export default Notify;
