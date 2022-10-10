import Link from "next/link";
import PropTypes from "prop-types";

// Icons Import
import Shoe from "@assets/images/svg/shoe.svg";
import MenIcon from "@assets/images/svg/men.svg";
import BuyTemplate from "@assets/images/svg/buy.svg";
import WomenIcon from "@assets/images/svg/womenLarge.svg";
import GiftCard from "@assets/images/svg/gift-card.svg";
import Clearance from "@assets/images/svg/clearance.svg";
import Accessories from "@assets/images/svg/accessories.svg";
import NewArrivals from "@assets/images/svg/new-arrivals.svg";
import SpecialOffers from "@assets/images/svg/special-offers.svg";
import styles from "./dropDown.module.css";
import React, { useState, useRef, useEffect } from 'react'


const CategoriesMenu = ({ className, initialVisibility }) => {
  const node = useRef();
  const [dropdownToggle, setDropdownToggle] = useState(initialVisibility);

  const clickOutside = (e) => {
    if (node.current?.contains(e.target)) {
      // inside click
      // console.log('clicked inside')
      return;
    }
    // outside click
    // console.log('clicked outside scope')
    setDropdownToggle(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', clickOutside);

    // clean up function before running new effect
    return () => {
      document.removeEventListener('mousedown', clickOutside);
    }
  }, [initialVisibility])

  const handlemobiles = (e) => {
    console.log(e.target.value);
  };

  const onToggleHandler = () => {
    setDropdownToggle((prevState) => !prevState);
  };

  return (
    <div ref={node} className={`tt-menu-categories ${className ? className : ""}`}>
      <button
        className={`tt-dropdown-toggle ${dropdownToggle ? "active" : ""}`}
        onClick={onToggleHandler}
      >
        CATEGORIES
      </button>
      <div className={`pb-2 tt-dropdown-menu ${dropdownToggle ? "active" : ""}`}>
        {/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */}

        <ul className={styles["top-level-menu"]}>

          <li>
            <div className={styles.topLevelMenuLiDiv}>
              <div>
                <WomenIcon />
              </div>
              <div style={{ display: "flex", flex: 2 }}>
                <a href="#">Electronic Devices</a>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="15"
                  height="15"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                  ></path>
                </svg>
              </div>
            </div>
            <ul className={styles["second-level-menu"]}>      <li>
              <a style={{ flex: 5 }} href="#">
                Smart Phones{" "}
              </a>
              <div style={{ flex: 1 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="15"
                  height="15"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                  ></path>
                </svg>
              </div>
              <ul className={styles["third-level-menu"]}><li>
                <Link href="/category?category=nokia mobiles">
                  Nokia Mobiles
                </Link>

              </li>
                <li>
                  <Link href="/category?category=apple iphones">
                    Apple Iphones
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=xiaomi mi mobiles">
                    Xiaomi Mi Mobiles
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=redmi mobiles">
                    Redmi Mobiles
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=realme mobiles">
                    Realme Mobiles
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=oppo mobile phones">
                    Oppo Mobile Phones
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=oneplus mobiles">
                    Oneplus Mobiles
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=infinix mobiles">
                    Infinix Mobiles
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=honor mobiles">
                    Honor Mobiles
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=tecno mobiles">
                    Tecno Mobiles
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=samsung mobile phones">
                    Samsung Mobile Phones
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=vivo mobiles">
                    Vivo Mobiles
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=asus mobiles">
                    Asus Mobiles
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=gfive mobiles">
                    Gfive Mobiles
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=huawei mobiles">
                    Huawei Mobiles
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=lenovo mobiles">
                    Lenovo Mobiles
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=infinix mobiles">
                    Infinix Mobiles
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=oneplus mobiles">
                    Oneplus Mobiles
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=itel mobiles">
                    Itel Mobiles
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=realme mobiles">
                    Realme Mobiles
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=tecno mobiles">
                    Tecno Mobiles
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=zte mobiles">
                    Zte Mobiles
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=motorola mobiles">
                    Motorola Mobiles
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=google mobiles">
                    Google Mobiles
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=qmobile mobiles">
                    Qmobile Mobiles
                  </Link>

                </li>
              </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Feature Phones{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=feature phones">
                    Feature Phones
                  </Link>

                </li>
                </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Tablets{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=tablets">
                    Tablets
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=ios tablet">
                      Ios Tablet
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=windows tablets">
                      Windows Tablets
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=android tablets">
                      Android Tablets
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=amazon tablets">
                      Amazon Tablets
                    </Link>

                  </li>
                </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Laptops{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=gaming laptops">
                    Gaming Laptops
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=refurbished laptops">
                      Refurbished Laptops
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=traditional laptops">
                      Traditional Laptops
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=notebooks">
                      Notebooks
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=reversible laptops">
                      Reversible Laptops
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=detechable laptops">
                      Detechable Laptops
                    </Link>

                  </li>
                </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Desktops{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=gaming desktops">
                    Gaming Desktops
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=all-in-one">
                      All-In-One
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=diy">
                      Diy
                    </Link>

                  </li>
                </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Smart Watches{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=smart watches">
                    Smart Watches
                  </Link>

                </li>
                </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Gaming Consoles{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=playstation consoles">
                    Playstation Consoles
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=playstation games">
                      Playstation Games
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=playstation controllers">
                      Playstation Controllers
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=nintendo games">
                      Nintendo Games
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=xbox games">
                      Xbox Games
                    </Link>

                  </li>
                </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Cameras & Drones{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=video camera">
                    Video Camera
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=dslr">
                      Dslr
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=drones">
                      Drones
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=point & shoot">
                      Point & Shoot
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=instant cameras">
                      Instant Cameras
                    </Link>

                  </li>
                </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Security Cameras{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=ip security cameras">
                    Ip Security Cameras
                  </Link>

                </li>
                </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Apple{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=apple display">
                    Apple Display
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=mac mini">
                      Mac Mini
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=macbook pro retina display">
                      Macbook Pro Retina Display
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=mac desktop">
                      Mac Desktop
                    </Link>

                  </li>
                </ul></li>
            </ul></li><li>
            <div className={styles.topLevelMenuLiDiv}>
              <div>
                <WomenIcon />
              </div>
              <div style={{ display: "flex", flex: 2 }}>
                <a href="#">Electronic Accessories</a>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="15"
                  height="15"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                  ></path>
                </svg>
              </div>
            </div>
            <ul className={styles["second-level-menu"]}>      <li>
              <a style={{ flex: 5 }} href="#">
                Mobile Accessories{" "}
              </a>
              <div style={{ flex: 1 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="15"
                  height="15"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                  ></path>
                </svg>
              </div>
              <ul className={styles["third-level-menu"]}><li>
                <Link href="/category?category=power banks">
                  Power Banks
                </Link>

              </li>
                <li>
                  <Link href="/category?category=screen protectors">
                    Screen Protectors
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=cases & covers">
                    Cases & Covers
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=handsfree">
                    Handsfree
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=chargers & cables">
                    Chargers & Cables
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=wireless chargers">
                    Wireless Chargers
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=gadgets & accessories">
                    Gadgets & Accessories
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=memory cards">
                    Memory Cards
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=phone cases">
                    Phone Cases
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=cables & converters">
                    Cables & Converters
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=wall chargers">
                    Wall Chargers
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=wireless chargers">
                    Wireless Chargers
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=tablet accessories">
                    Tablet Accessories
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=parts & tools">
                    Parts & Tools
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=car chargers">
                    Car Chargers
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=screen protectors">
                    Screen Protectors
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=phone camera flash lights">
                    Phone Camera Flash Lights
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=selfie sticks">
                    Selfie Sticks
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=docks & stands">
                    Docks & Stands
                  </Link>

                </li>
              </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Headphones & Headsets{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=bluetooth headsets">
                    Bluetooth Headsets
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=headphones & headsets access">
                      Headphones & Headsets Access
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=in-ear headphones">
                      In-Ear Headphones
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=mono headsets">
                      Mono Headsets
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=over-the-ear headphones">
                      Over-The-Ear Headphones
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=wired headsets">
                      Wired Headsets
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=wireless earbuds">
                      Wireless Earbuds
                    </Link>

                  </li>
                </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Camera Accessories{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=memory cards">
                    Memory Cards
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=lenses">
                      Lenses
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=tripods & monopods">
                      Tripods & Monopods
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=camera cases, covers and bags">
                      Camera Cases, Covers And Bags
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=action camera accessories">
                      Action Camera Accessories
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=lighting & studio equipment">
                      Lighting & Studio Equipment
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=batteries">
                      Batteries
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=gimbals & stabilizers">
                      Gimbals & Stabilizers
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=bags & cases">
                      Bags & Cases
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=camera & rigs supports">
                      Camera & Rigs Supports
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=gopro">
                      Gopro
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=lighting & studio">
                      Lighting & Studio
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=tripods">
                      Tripods
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=blackmagic accessories">
                      Blackmagic Accessories
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=digital voice recorder">
                      Digital Voice Recorder
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=digital photo frame">
                      Digital Photo Frame
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=camera battery charger">
                      Camera Battery Charger
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=camera battery">
                      Camera Battery
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=camera straps">
                      Camera Straps
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=dslr screen protectors">
                      Dslr Screen Protectors
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=lens cap">
                      Lens Cap
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=battery grip">
                      Battery Grip
                    </Link>

                  </li>
                </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Computer Accessories{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=cooling pads/cooling stands">
                    Cooling Pads/Cooling Stands
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=keyboards">
                      Keyboards
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=mice">
                      Mice
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=adapters & cables">
                      Adapters & Cables
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=pc audio">
                      Pc Audio
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=gaming headsets">
                      Gaming Headsets
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=gaming mice">
                      Gaming Mice
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=gaming keyboards">
                      Gaming Keyboards
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=mac accessories">
                      Mac Accessories
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=printers & scanners">
                      Printers & Scanners
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=laptop accessories">
                      Laptop Accessories
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=hard drives & ssd">
                      Hard Drives & Ssd
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=charger & cables">
                      Charger & Cables
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=processors">
                      Processors
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=motherboards">
                      Motherboards
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=desktops">
                      Desktops
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=keyboard / mouse combo">
                      Keyboard / Mouse Combo
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=network products">
                      Network Products
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=flash drives & hub">
                      Flash Drives & Hub
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=power supply">
                      Power Supply
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=mouse">
                      Mouse
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=mouse pads">
                      Mouse Pads
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=speakers">
                      Speakers
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=headphones & mic">
                      Headphones & Mic
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=projectors">
                      Projectors
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=webcames">
                      Webcames
                    </Link>

                  </li>
                </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Storage{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=external hard drives">
                    External Hard Drives
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=internal hard drives">
                      Internal Hard Drives
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=flash drives">
                      Flash Drives
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=otg drives">
                      Otg Drives
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=storage for mac">
                      Storage For Mac
                    </Link>

                  </li>
                </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Computer Components{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=graphic cards">
                    Graphic Cards
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=desktop casings">
                      Desktop Casings
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=motherboards">
                      Motherboards
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=fans & heatsinks">
                      Fans & Heatsinks
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=processors">
                      Processors
                    </Link>

                  </li>
                </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Portable Speakers{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=portable speakers">
                    Portable Speakers
                  </Link>

                </li>
                </ul></li>
            </ul></li><li>
            <div className={styles.topLevelMenuLiDiv}>
              <div>
                <WomenIcon />
              </div>
              <div style={{ display: "flex", flex: 2 }}>
                <a href="#">Health & Beauty</a>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="15"
                  height="15"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                  ></path>
                </svg>
              </div>
            </div>
            <ul className={styles["second-level-menu"]}>      <li>
              <a style={{ flex: 5 }} href="#">
                Bath & Body{" "}
              </a>
              <div style={{ flex: 1 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="15"
                  height="15"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                  ></path>
                </svg>
              </div>
              <ul className={styles["third-level-menu"]}><li>
                <Link href="/category?category=body & massage oils">
                  Body & Massage Oils
                </Link>

              </li>
                <li>
                  <Link href="/category?category=body soaps & shower gels">
                    Body Soaps & Shower Gels
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=foot care">
                    Foot Care
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=hair removal">
                    Hair Removal
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=hand care">
                    Hand Care
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=body moisturizers">
                    Body Moisturizers
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=breast care">
                    Breast Care
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=talcum powder">
                    Talcum Powder
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=bath & body accessories">
                    Bath & Body Accessories
                  </Link>

                </li>
              </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Fragrances{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=women fragrances">
                    Women Fragrances
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=men fragrances">
                      Men Fragrances
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=unisex">
                      Unisex
                    </Link>

                  </li>
                </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Hair Care{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=shampoo">
                    Shampoo
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=hair treatments">
                      Hair Treatments
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=hair accessories">
                      Hair Accessories
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=hair care accessories">
                      Hair Care Accessories
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=hair brushes & combs">
                      Hair Brushes & Combs
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=hair coloring">
                      Hair Coloring
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=hair conditioner">
                      Hair Conditioner
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=hair styling">
                      Hair Styling
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=wig & hair extensions & pads">
                      Wig & Hair Extensions & Pads
                    </Link>

                  </li>
                </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Makeup{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=foundation">
                    Foundation
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=lips">
                      Lips
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=eyes">
                      Eyes
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=nails">
                      Nails
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=brushes & sets">
                      Brushes & Sets
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=makeup accessories">
                      Makeup Accessories
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=makeup removers">
                      Makeup Removers
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=body">
                      Body
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=makeup palettes & sets">
                      Makeup Palettes & Sets
                    </Link>

                  </li>
                </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Men's Care{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=bath & body">
                    Bath & Body
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=hair care">
                      Hair Care
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=hair dryers">
                      Hair Dryers
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=shaving & grooming">
                      Shaving & Grooming
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=sports nutrition">
                      Sports Nutrition
                    </Link>

                  </li>
                </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Skin Care{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=serum & essence">
                    Serum & Essence
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=dermacare">
                      Dermacare
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=face scrubs & exfoliators">
                      Face Scrubs & Exfoliators
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=facial cleansers">
                      Facial Cleansers
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=sunscreen & aftersun">
                      Sunscreen & Aftersun
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=eye care">
                      Eye Care
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=face mask & packs">
                      Face Mask & Packs
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=moisturizers and cream">
                      Moisturizers And Cream
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=toner & mists">
                      Toner & Mists
                    </Link>

                  </li>
                </ul></li>
            </ul></li><li>
            <div className={styles.topLevelMenuLiDiv}>
              <div>
                <WomenIcon />
              </div>
              <div style={{ display: "flex", flex: 2 }}>
                <a href="#">Women's Fashion</a>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="15"
                  height="15"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                  ></path>
                </svg>
              </div>
            </div>
            <ul className={styles["second-level-menu"]}>      <li>
              <a style={{ flex: 5 }} href="#">
                Unstitched Fabric{" "}
              </a>
              <div style={{ flex: 1 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="15"
                  height="15"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                  ></path>
                </svg>
              </div>
              <ul className={styles["third-level-menu"]}><li>
                <Link href="/category?category=branded unstitched">
                  Branded Unstitched
                </Link>

              </li>
                <li>
                  <Link href="/category?category=sarees">
                    Sarees
                  </Link>

                </li>
              </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Kurtas & Shalwar Kameez{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=kurtis">
                    Kurtis
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=shalwar kameez">
                      Shalwar Kameez
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=branded pret">
                      Branded Pret
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=trousers & palazzos">
                      Trousers & Palazzos
                    </Link>

                  </li>
                </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Muslim Wear{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=abayas & hijabs">
                    Abayas & Hijabs
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=dupattas, stoles & shawls">
                      Dupattas, Stoles & Shawls
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=scarves">
                      Scarves
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=hair accessories">
                      Hair Accessories
                    </Link>

                  </li>
                </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Tops{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=blouses & shirts">
                    Blouses & Shirts
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=tunics">
                      Tunics
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=t-shirts">
                      T-Shirts
                    </Link>

                  </li>
                </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Pants, Jeans & Leggings{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=pants">
                    Pants
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=leggings">
                      Leggings
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=jeans">
                      Jeans
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=shorts">
                      Shorts
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=jeggings">
                      Jeggings
                    </Link>

                  </li>
                </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Winter Clothing{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=jackets & coats">
                    Jackets & Coats
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=hoodies & sweatshirts">
                      Hoodies & Sweatshirts
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=sweaters & cardigans">
                      Sweaters & Cardigans
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=shawls and poncho's">
                      Shawls And Poncho'S
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=shrugs">
                      Shrugs
                    </Link>

                  </li>
                </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Shoes{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=sandals">
                    Sandals
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=flat shoes">
                      Flat Shoes
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=heels">
                      Heels
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=khussa & kohlapuri">
                      Khussa & Kohlapuri
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=slides & flip flops">
                      Slides & Flip Flops
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=wedges">
                      Wedges
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=sneakers">
                      Sneakers
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=boots">
                      Boots
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=shoes accessories">
                      Shoes Accessories
                    </Link>

                  </li>
                </ul></li>
            </ul></li><li>
            <div className={styles.topLevelMenuLiDiv}>
              <div>
                <WomenIcon />
              </div>
              <div style={{ display: "flex", flex: 2 }}>
                <a href="#">Men's Fashion</a>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="15"
                  height="15"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                  ></path>
                </svg>
              </div>
            </div>
            <ul className={styles["second-level-menu"]}>      <li>
              <a style={{ flex: 5 }} href="#">
                T-Shirts & Tanks{" "}
              </a>
              <div style={{ flex: 1 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="15"
                  height="15"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                  ></path>
                </svg>
              </div>
              <ul className={styles["third-level-menu"]}><li>
                <Link href="/category?category=v neck">
                  V Neck
                </Link>

              </li>
                <li>
                  <Link href="/category?category=round neck">
                    Round Neck
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=graphic tees">
                    Graphic Tees
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=top rated">
                    Top Rated
                  </Link>

                </li>
              </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Shirts & Polo{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=casual shirts">
                    Casual Shirts
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=formal shirts">
                      Formal Shirts
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=polos">
                      Polos
                    </Link>

                  </li>
                </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Pants & Jeans{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=chinos">
                    Chinos
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=cargo">
                      Cargo
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=jeans">
                      Jeans
                    </Link>

                  </li>
                </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Shorts, Joggers & Sweats{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=shorts">
                    Shorts
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=joggers & sweats">
                      Joggers & Sweats
                    </Link>

                  </li>
                </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Kurtas & Shalwar Kameez{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=unstitched fabric">
                    Unstitched Fabric
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=kurtas">
                      Kurtas
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=shalwar">
                      Shalwar
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=shawls">
                      Shawls
                    </Link>

                  </li>
                </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Winter Clothing{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=jackets & coats">
                    Jackets & Coats
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=hoodies & sweatshirts">
                      Hoodies & Sweatshirts
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=sweaters & cardigans">
                      Sweaters & Cardigans
                    </Link>

                  </li>
                </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Inner Wear{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=briefs">
                    Briefs
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=trunk & boxers">
                      Trunk & Boxers
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=nightwear">
                      Nightwear
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=vests">
                      Vests
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=thermal">
                      Thermal
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=socks">
                      Socks
                    </Link>

                  </li>
                </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Shoes{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=slip-ons & loafers">
                    Slip-Ons & Loafers
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=flip flops & sandals">
                      Flip Flops & Sandals
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=sneakers">
                      Sneakers
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=formal shoes">
                      Formal Shoes
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=boots">
                      Boots
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=khusa & kolapuri">
                      Khusa & Kolapuri
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=shoes accessories">
                      Shoes Accessories
                    </Link>

                  </li>
                </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Men's Accessories{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=belts">
                    Belts
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=sunglasses">
                      Sunglasses
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=ties & bow ties">
                      Ties & Bow Ties
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=hats & caps">
                      Hats & Caps
                    </Link>

                  </li>
                </ul></li>
            </ul></li><li>
            <div className={styles.topLevelMenuLiDiv}>
              <div>
                <WomenIcon />
              </div>
              <div style={{ display: "flex", flex: 2 }}>
                <a href="#">TV & Home Appliances</a>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="15"
                  height="15"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                  ></path>
                </svg>
              </div>
            </div>
            <ul className={styles["second-level-menu"]}>      <li>
              <a style={{ flex: 5 }} href="#">
                LED Televisions{" "}
              </a>
              <div style={{ flex: 1 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="15"
                  height="15"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                  ></path>
                </svg>
              </div>
              <ul className={styles["third-level-menu"]}><li>
                <Link href="/category?category=led televisions">
                  Led Televisions
                </Link>

              </li>
              </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Smart Televisions{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=oled televisions">
                    Oled Televisions
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=laser televisions">
                      Laser Televisions
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=4k televisions">
                      4K Televisions
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=uled televisions">
                      Uled Televisions
                    </Link>

                  </li>
                </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Home Audio{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=home entertainment">
                    Home Entertainment
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=portable players">
                      Portable Players
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=live sound & stage equipment">
                      Live Sound & Stage Equipment
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=home theater systems">
                      Home Theater Systems
                    </Link>

                  </li>
                </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  TV Accessories{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=tv receivers">
                    Tv Receivers
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=wall mounts & protectors">
                      Wall Mounts & Protectors
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=tv adapters">
                      Tv Adapters
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=tv remote controllers">
                      Tv Remote Controllers
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=3d glasses">
                      3D Glasses
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=antennas">
                      Antennas
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=cables">
                      Cables
                    </Link>

                  </li>
                </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Home Audio & Theater{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=bookshelf speakers">
                    Bookshelf Speakers
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=center-channel speakers">
                      Center-Channel Speakers
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=floorstanding speakers">
                      Floorstanding Speakers
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=satellite speakers">
                      Satellite Speakers
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=soundbar speakers">
                      Soundbar Speakers
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=subwoofers">
                      Subwoofers
                    </Link>

                  </li>
                </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Kitchen Appliances{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=refrigerators">
                    Refrigerators
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=microwave">
                      Microwave
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=oven">
                      Oven
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=freezer">
                      Freezer
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=cooktop & range">
                      Cooktop & Range
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=water generators">
                      Water Generators
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=water dispensers">
                      Water Dispensers
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=dishwashers">
                      Dishwashers
                    </Link>

                  </li>
                </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Small Kitchen Appliances{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=rice cooker">
                    Rice Cooker
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=blender, mixer & grinder">
                      Blender, Mixer & Grinder
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=electric kettle">
                      Electric Kettle
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=juicer & fruit extraction">
                      Juicer & Fruit Extraction
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=fryer">
                      Fryer
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=water purifier">
                      Water Purifier
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=pressure cookers">
                      Pressure Cookers
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=specialty cookware">
                      Specialty Cookware
                    </Link>

                  </li>
                </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Cooling & Heating{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=fan">
                    Fan
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=air conditioner">
                      Air Conditioner
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=air cooler">
                      Air Cooler
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=air purifier">
                      Air Purifier
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=dehumidifier">
                      Dehumidifier
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=humidifier">
                      Humidifier
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=water heater">
                      Water Heater
                    </Link>

                  </li>
                </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Irons & Garment Care{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=irons">
                    Irons
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=garment steamer">
                      Garment Steamer
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=sewing machine">
                      Sewing Machine
                    </Link>

                  </li>
                </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Vacuums & Floor Care{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=vacuum cleaner">
                    Vacuum Cleaner
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=floor polisher">
                      Floor Polisher
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=steam mops">
                      Steam Mops
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=electric brooms">
                      Electric Brooms
                    </Link>

                  </li>
                </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Washers & Dryers{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=washing machine">
                    Washing Machine
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=twin tub washer & dryers">
                      Twin Tub Washer & Dryers
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=washers & dryers">
                      Washers & Dryers
                    </Link>

                  </li>
                </ul></li>
            </ul></li><li>
            <div className={styles.topLevelMenuLiDiv}>
              <div>
                <WomenIcon />
              </div>
              <div style={{ display: "flex", flex: 2 }}>
                <a href="#">Sports & Outdoor</a>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="15"
                  height="15"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                  ></path>
                </svg>
              </div>
            </div>
            <ul className={styles["second-level-menu"]}>      <li>
              <a style={{ flex: 5 }} href="#">
                Supplements{" "}
              </a>
              <div style={{ flex: 1 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="15"
                  height="15"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                  ></path>
                </svg>
              </div>
              <ul className={styles["third-level-menu"]}><li>
                <Link href="/category?category=proteins">
                  Proteins
                </Link>

              </li>
                <li>
                  <Link href="/category?category=post workouts and recovery">
                    Post Workouts And Recovery
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=pre workouts">
                    Pre Workouts
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=fat burners">
                    Fat Burners
                  </Link>

                </li>
              </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Team Sports{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=cricket">
                    Cricket
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=football">
                      Football
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=hockey">
                      Hockey
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=basket ball">
                      Basket Ball
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=volley balls">
                      Volley Balls
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=baseballs">
                      Baseballs
                    </Link>

                  </li>
                </ul></li>
            </ul></li><li>
            <div className={styles.topLevelMenuLiDiv}>
              <div>
                <WomenIcon />
              </div>
              <div style={{ display: "flex", flex: 2 }}>
                <a href="#">Watches, Bags & Jewellery</a>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="15"
                  height="15"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                  ></path>
                </svg>
              </div>
            </div>
            <ul className={styles["second-level-menu"]}>      <li>
              <a style={{ flex: 5 }} href="#">
                Men's Watches{" "}
              </a>
              <div style={{ flex: 1 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="15"
                  height="15"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                  ></path>
                </svg>
              </div>
              <ul className={styles["third-level-menu"]}><li>
                <Link href="/category?category=chronograph">
                  Chronograph
                </Link>

              </li>
                <li>
                  <Link href="/category?category=branded watches">
                    Branded Watches
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=analog">
                    Analog
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=digital">
                    Digital
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=accessories">
                    Accessories
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=smart watches">
                    Smart Watches
                  </Link>

                </li>
              </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Women's Watches{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=chronograph">
                    Chronograph
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=branded watches">
                      Branded Watches
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=analog">
                      Analog
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=digital">
                      Digital
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=accessories">
                      Accessories
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=smart watches">
                      Smart Watches
                    </Link>

                  </li>
                </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Womens Bags{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=cross body & shoulder bags">
                    Cross Body & Shoulder Bags
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=top-handle bags">
                      Top-Handle Bags
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=tote bags">
                      Tote Bags
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=backpacks">
                      Backpacks
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=clutches">
                      Clutches
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=wallets & accessories">
                      Wallets & Accessories
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=wristlets">
                      Wristlets
                    </Link>

                  </li>
                </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Mens Bags{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=wallets & cardholders">
                    Wallets & Cardholders
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=backpacks">
                      Backpacks
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=crossbody bags">
                      Crossbody Bags
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=business bags">
                      Business Bags
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=messenger bags">
                      Messenger Bags
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=cardholders & keychains">
                      Cardholders & Keychains
                    </Link>

                  </li>
                </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Sunglasses & Eyewear{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=men sunglasses">
                    Men Sunglasses
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=women eyeglasses">
                      Women Eyeglasses
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=women sunglasses">
                      Women Sunglasses
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=men eyeglasses">
                      Men Eyeglasses
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=lenses">
                      Lenses
                    </Link>

                  </li>
                </ul></li>
            </ul></li><li>
            <div className={styles.topLevelMenuLiDiv}>
              <div>
                <WomenIcon />
              </div>
              <div style={{ display: "flex", flex: 2 }}>
                <a href="#">automotive</a>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="15"
                  height="15"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                  ></path>
                </svg>
              </div>
            </div>
            <ul className={styles["second-level-menu"]}>      <li>
              <a style={{ flex: 5 }} href="#">
                Car Accessories{" "}
              </a>
              <div style={{ flex: 1 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="15"
                  height="15"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                  ></path>
                </svg>
              </div>
              <ul className={styles["third-level-menu"]}><li>
                <Link href="/category?category=car accessories">
                  Car Accessories
                </Link>

              </li>
                <li>
                  <Link href="/category?category=car electronics">
                    Car Electronics
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=modification accessories">
                    Modification Accessories
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=audio & video accessories">
                    Audio & Video Accessories
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=security gadgets">
                    Security Gadgets
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=exterior accessories">
                    Exterior Accessories
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=led & lightening">
                    Led & Lightening
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=interior accessories">
                    Interior Accessories
                  </Link>

                </li>
              </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Car Parts & Spares{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=car oils & fluids">
                    Car Oils & Fluids
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=car tires & wheels">
                      Car Tires & Wheels
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=car tools & equipment">
                      Car Tools & Equipment
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=car parts & spares">
                      Car Parts & Spares
                    </Link>

                  </li>
                </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Car Care{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=car care">
                    Car Care
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=top covers">
                      Top Covers
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=perfume & fragrances">
                      Perfume & Fragrances
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=mats">
                      Mats
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=car care accessories">
                      Car Care Accessories
                    </Link>

                  </li>
                </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Car Safety & Security{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=car safety & security">
                    Car Safety & Security
                  </Link>

                </li>
                </ul></li>
            </ul></li><li>
            <div className={styles.topLevelMenuLiDiv}>
              <div>
                <WomenIcon />
              </div>
              <div style={{ display: "flex", flex: 2 }}>
                <a href="#">health-and-care</a>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="15"
                  height="15"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                  ></path>
                </svg>
              </div>
            </div>
            <ul className={styles["second-level-menu"]}>      <li>
              <a style={{ flex: 5 }} href="#">
                Medical Equipment{" "}
              </a>
              <div style={{ flex: 1 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="15"
                  height="15"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                  ></path>
                </svg>
              </div>
              <ul className={styles["third-level-menu"]}><li>
                <Link href="/category?category=heating pad">
                  Heating Pad
                </Link>

              </li>
                <li>
                  <Link href="/category?category=nebulizer">
                    Nebulizer
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=hearing amplifier">
                    Hearing Amplifier
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=air dehumidifier">
                    Air Dehumidifier
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=air purifier">
                    Air Purifier
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=hygrometer">
                    Hygrometer
                  </Link>

                </li>
                <li>
                  <Link href="/category?category=ecg monitor">
                    Ecg Monitor
                  </Link>

                </li>
              </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Medical Accessories{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=thermometer">
                    Thermometer
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=pillow">
                      Pillow
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=blanket">
                      Blanket
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=test strips">
                      Test Strips
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=pulse oximeter">
                      Pulse Oximeter
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=weighing scale">
                      Weighing Scale
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=adult diapers & pads">
                      Adult Diapers & Pads
                    </Link>

                  </li>
                </ul></li>
              <li>
                <a style={{ flex: 5 }} href="#">
                  Drugs{" "}
                </a>
                <div style={{ flex: 1 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
                <ul className={styles["third-level-menu"]}><li>
                  <Link href="/category?category=blood pressure">
                    Blood Pressure
                  </Link>

                </li>
                  <li>
                    <Link href="/category?category=body temperature">
                      Body Temperature
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=blood glucose">
                      Blood Glucose
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=sleep & rest">
                      Sleep & Rest
                    </Link>

                  </li>
                  <li>
                    <Link href="/category?category=hemoglobin">
                      Hemoglobin
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

CategoriesMenu.defaultProps = {
  initialVisibility: false,
};

CategoriesMenu.propTypes = {
  initialVisibility: PropTypes.bool,
};

export default CategoriesMenu;


// import Link from "next/link";
// import { useState } from "react";
// import PropTypes from "prop-types";
// import { useRouter } from "next/router";
// import { Col, Row } from "react-bootstrap";

// // Icons Import
// import Shoe from "@assets/images/svg/shoe.svg";
// import MenIcon from "@assets/images/svg/men.svg";
// import BuyTemplate from "@assets/images/svg/buy.svg";
// import WomenIcon from "@assets/images/svg/womenLarge.svg";
// import GiftCard from "@assets/images/svg/gift-card.svg";
// import Clearance from "@assets/images/svg/clearance.svg";
// import Accessories from "@assets/images/svg/accessories.svg";
// import NewArrivals from "@assets/images/svg/new-arrivals.svg";
// import SpecialOffers from "@assets/images/svg/special-offers.svg";
// import styles from "./dropDown.module.css";

// const CategoriesMenu = ({ className, initialVisibility }) => {

//   const [dropdownToggle, setDropdownToggle] = useState(initialVisibility);
//   const router = useRouter();
//   const handlemobiles = (e) => {
//     console.log(e.target.value);
//   };
//   const onToggleHandler = () => {
//     setDropdownToggle((prevState) => !prevState);
//   };

//   return (
//     <div className={`tt-menu-categories ${className ? className : ""}`}>
//       <button
//         className={`tt-dropdown-toggle ${dropdownToggle ? "active" : ""}`}
//         onClick={onToggleHandler}
//       >
//         CATEGORIES
//       </button>
//       <div className={`pb-2 tt-dropdown-menu ${dropdownToggle ? "active" : ""}`}>
//         {/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */}

//         <ul className={styles["top-level-menu"]}>
//           <li>
//             <div className={styles.topLevelMenuLiDiv}>
//               <div>
//                 <WomenIcon />
//               </div>
//               <div style={{ display: "flex", flex: 2 }}>
//                 <a href="#">Electronic goods & accessories</a>
//               </div>
//               <div>
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15"><path fill-rule="evenodd" d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"></path></svg>
//               </div>
//             </div>

//             <ul className={styles["second-level-menu"]}>
//               <li>
//                 <a style={{ flex: 5 }} href="#">Electronic goods & accessories </a>
//                 <div style={{ flex: 1 }}>
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15"><path fill-rule="evenodd" d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"></path></svg>
//                 </div>
//                 <ul className={styles["third-level-menu"]}>
//                   <li><a href="#">Electronic goods & accessories</a></li>
//                 </ul>
//               </li>
//             </ul>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// CategoriesMenu.defaultProps = {
//   initialVisibility: false,
// };

// CategoriesMenu.propTypes = {
//   initialVisibility: PropTypes.bool,
// };

// export default CategoriesMenu;
