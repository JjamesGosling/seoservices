"use client";
import TextHoverAnimation from "@/components/TextHoverAnimation";
import Link from "next/link";
import { Fragment, useState } from "react";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      <header>
        <div className="main_menu navbar d-none d-xl-flex">
          <div className="container-fluid">
            <Link href="/" className="navbar-brand">
              <img
                src="images/logo.png"
                alt="Fxotary"
                className="img-fluid w-100"
              />
            </Link>
            <div className="main-menu">
              <nav className="navbar-nav m-auto" id="navbarNav">
                <ul>
                  <li>
                    <Link href="/" className="text_hover_animaiton">
                      <TextHoverAnimation text={"Home"} />
                    </Link>
                  </li>
                  <li>
                    <Link href="about-us" className="text_hover_animaiton">
                      <TextHoverAnimation text={"About"} />
                    </Link>
                  </li>
                  <li className="dropdown-nav">
                    <Link href="services" className="text_hover_animaiton">
                      <TextHoverAnimation text={"Services"} />
                    </Link>
                    <ul className="submenu">
                      <li className="dropdown-nav">
                        <a href="#">Services</a>
                        <ul className="submenu">
                          <li>
                            <Link href="services">Service List</Link>
                          </li>
                          <li>
                            <Link href="service_details">Service Details</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="contact" className="text_hover_animaiton">
                      <TextHoverAnimation text={"Contact"} />
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="right_menu">
              <a
                href="#"
                className="search_icon"
                onClick={() => setToggle(true)}
              >
                <i className="fa-sharp fa-regular fa-magnifying-glass" />
              </a>
              <Link href="contact" className="common_btn">
                Request Quote
              </Link>
            </div>
          </div>
        </div>
        <div className="mobile-menu d-xl-none main_menu d-flex">
          <div className="container-fluid d-flex justify-content-between">
            <div className="d-flex align-items-center justify-content-between w-100">
              <div className="navbar-brand ms-3">
                <Link href="index">
                  <img
                    src="images/logo.png"
                    alt="Fxotary"
                    className="img-fluid w-100"
                  />
                </Link>
              </div>
              <div className="text-end me-3">
                <a
                  className="menu-bar navbar-toggler"
                  href="#"
                >
                  <i className="fa-solid fa-bars" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile_menu_container">
          <div className="mobile_menu_content">
            <div className="d-flex align-items-center justify-content-between">
              <div className="navbar-brand">
                <Link href="index">
                  <img
                    src="images/logo.png"
                    alt="Fxotary"
                    className="img-fluid w-100"
                  />
                </Link>
              </div>
              <div className="close_btn">
                <button>
                  <i className="fal fa-times" />
                </button>
              </div>
            </div>
            <div className="main-menu-mobile" />
          </div>
        </div>
      </header>
      <div className={`menu_search ${toggle ? "show_search" : ""}`}>
        <form>
          <input type="text" placeholder="Search" />
          <button type="submit">Search</button>
          <span
            className="close_search c-pointer"
            onClick={() => setToggle(false)}
          >
            <i className="fa-sharp fa-light fa-xmark" />
          </span>
          <i className="icon-down-arrow" />
        </form>
      </div>
      <div
        className={`body-overlay ${toggle ? "show" : ""}`}
        onClick={() => setToggle(false)}
      />
    </Fragment>
  );
};
export default Header;
