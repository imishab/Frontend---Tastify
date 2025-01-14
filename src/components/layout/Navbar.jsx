import React from "react";
import { Menu, ShoppingBag } from "lucide-react";

export default function Navbar() {
  return (
    <>
      {/* Header */}
      <div className="header-area" id="headerArea">
        <div className="container-md px-3">
          {/* Header Content */}
          <div className="header-content header-style-five position-relative d-flex align-items-center justify-content-between">
            {/* Logo Wrapper */}
            <div className="logo-wrapper">
              <a href="/">
                {/* <img src="img/core-img/logo.png" alt="" /> */}
                <h5 className="mt-2"> Tastify.</h5>
              </a>
            </div>
            {/* Navbar Toggler */}
            <div className="d-flex gap-3 justify-content-between align-items-center">
              <ShoppingBag size={20} color="black" />
              <div
                className="navbar--toggler"
                id="affanNavbarToggler"
                data-bs-toggle="offcanvas"
                data-bs-target="#affanOffcanvas"
                aria-controls="affanOffcanvas"
              >
                <Menu color="black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
