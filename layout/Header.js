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
                        <Link href="services">SEO Services</Link>
                        <ul className="submenu">
                          <li>
                            <Link href="services-details">On-Page SEO</Link>
                          </li>
                          <li>
                            <Link href="service-details">SEO Audit</Link>
                          </li>
                          <li>
                            <Link href="service-details">Keyword Research</Link>
                          </li>
                          <li>
                            <Link href="service-details">Off-Page SEO</Link>
                          </li>
                          <li>
                            <Link href="service-details">Page Link Building</Link>
                          </li>
                          <li>
                            <Link href="service-details">Content Marketing</Link>
                          </li>
                          <li>
                            <Link href="service-details">Blog & Article Writing</Link>
                          </li>
                          <li>
                            <Link href="service-details">News Publishing</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-nav">
                        <Link href="services">Digital Services</Link>
                        <ul className="submenu">
                          <li>
                            <Link href="services-details">Website Design</Link>
                          </li>
                          <li>
                            <Link href="service-details">B2B Website Design</Link>
                          </li>
                          <li>
                            <Link href="service-details">Corporate Website</Link>
                          </li>
                          <li>
                            <Link href="service-details">Informative Website</Link>
                          </li>
                          <li>
                            <Link href="service-details">Small Business Website
                            Design</Link>
                          </li>
                          <li>
                            <Link href="service-details">Social Media Marketing</Link>
                          </li>
                          <li>
                            <Link href="service-details">Pay Per Click</Link>
                          </li>
                          <li>
                            <Link href="service-details">E-Commerce PPC</Link>
                          </li>
                          <li>
                            <Link href="service-details">Google Adwords</Link>
                          </li>
                          <li>
                            <Link href="service-details">PPC Audit</Link>
                          </li>
                          <li>
                            <Link href="service-details">PPC Consultancy</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-nav">
                        <Link href="services">E-Commerce SEO</Link>
                        <ul className="submenu">
                          <li>
                            <Link href="services-details">WooCommerce SEO</Link>
                          </li>
                          <li>
                            <Link href="service-details">Big commerce SEO</Link>
                          </li>
                          <li>
                            <Link href="service-details">Word Press SEO</Link>
                          </li>
                          <li>
                            <Link href="service-details">Laravel SEO</Link>
                          </li>
                          <li>
                            <Link href="service-details">Shopify SEO</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-nav">
                        <Link href="services">Industry SEO</Link>
                        <ul className="submenu">
                          <li>
                            <Link href="services-details">Agriculture SEO</Link>
                          </li>
                          <li>
                            <Link href="service-details">Automative SEO</Link>
                          </li>
                          <li>
                            <Link href="service-details">Aviation SEO</Link>
                          </li>
                          <li>
                            <Link href="service-details">Business Services SEO</Link>
                          </li>
                          <li>
                            <Link href="service-details">Beauty & healthcare SEO</Link>
                          </li>
                          <li>
                            <Link href="service-details">Construction SEO</Link>
                          </li>
                          <li>
                            <Link href="service-details">Education SEO</Link>
                          </li>
                          <li>
                            <Link href="service-details">Entertainment & Recreation SEO</Link>
                          </li>
                          <li>
                            <Link href="service-details">Financial Services SEO</Link>
                          </li>
                          <li>
                            <Link href="service-details">Food & Beverage SEO</Link>
                          </li>
                          <li>
                            <Link href="service-details">Home Services SEO</Link>
                          </li>
                          <li>
                            <Link href="service-details">Industrial SEO</Link>
                          </li>
                          <li>
                            <Link href="service-details">Legal SEO</Link>
                          </li>
                          <li>
                            <Link href="service-details">Logistics & Supply Chain SEO</Link>
                          </li>
                          <li>
                            <Link href="service-details">Marine SEO</Link>
                          </li>
                          <li>
                            <Link href="service-details">Medical SEO</Link>
                          </li>
                          <li>
                            <Link href="service-details">Personal Services SEO</Link>
                          </li>
                          <li>
                            <Link href="service-details">Retail & E-commerce SEO</Link>
                          </li>
                          <li>
                            <Link href="service-details">Pharmaceuticals SEO</Link>
                          </li>
                          <li>
                            <Link href="service-details">Professional Services SEO</Link>
                          </li>
                          <li>
                            <Link href="service-details">Software & Technology SEO</Link>
                          </li>
                          <li>
                            <Link href="service-details">Sports & Hospitality SEO</Link>
                          </li>
                          <li>
                            <Link href="service-details">Tourism SEO</Link>
                          </li>
                          <li>
                            <Link href="service-details">Toys & Hobbies SEO</Link>
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
