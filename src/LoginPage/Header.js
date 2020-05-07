import React from "react";

export const Header = () => {
  return (
    <section className="menu cid-rYgVEBm8Te" once="menu" id="menu1-b">
      <nav className="navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm bg-color transparent">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div className="menu-logo">
          <div className="navbar-brand">
            <span className="navbar-logo">
              <img
                src="assets/images/mbr-122x140.png"
                alt="Mobirise"
                title=""
                style={{ height: "3.8rem" }}
              />
            </span>
            <span className="navbar-caption-wrap">
              <a className="navbar-caption text-white display-4" href="/#">
                Japan Delivery
              </a>
            </span>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav nav-dropdown nav-right"
            data-app-modern-menu="true"
          >
            <li className="nav-item">
              <a className="nav-link link text-white display-4" href="/#">
                <span className="mbri-home mbr-iconfont mbr-iconfont-btn"></span>
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link text-white display-4" href="/#">
                <span className="mbri-search mbr-iconfont mbr-iconfont-btn"></span>
                About Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};
