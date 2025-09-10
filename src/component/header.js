import React, { useState } from "react";
import logo from "../assets/image/logo.svg";
import "../assets/style.css";

const menuItems = [
  { title: "Home", href: "#home" },
  { title: "Services", href: "#service" },
  { title: "Blog", href: "#blog" },
  { title: "Contact", href: "#contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = (e, href) => {
    // Prevent default jump
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
    // Close menu in mobile view
    setMenuOpen(false);
  };

  return (
    <header
      className="cs_site_header header_style_2 header_style_2_0 cs_style_1 header_sticky_style1 cs_sticky_header cs_site_header_full_width"
      style={{ backgroundColor: "InfoBackground", color: "#fff" }} // background and text color
    >
      <div className="cs_main_header">
        <div className="container">
          <div className="cs_main_header_in">
            {/* Logo */}
            <div className="cs_main_header_left">
              <a className="cs_site_branding" href="index.html">
                <img
                  alt="Logo"
                  loading="lazy"
                  decoding="async"
                  src={logo}
                  className="logo"
                />
              </a>
            </div>

            {/* Navigation */}
            <div className="cs_main_header_center">
              <div className="cs_nav cs_primary_font fw-medium">
                {/* Mobile Toggle */}
                <span
                  className={`cs-munu_toggle ${menuOpen ? "active" : ""}`}
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <span></span>
                </span>

                {/* Menu */}
                <ul
                  className="cs_nav_list fw-medium"
                  style={{ display: menuOpen ? "block" : "none" }}
                >
                  {menuItems.map((item, idx) => (
                    <li
                      key={idx}
                      className={item.children ? "menu-item-has-children" : ""}
                    >
                      <a
                        href={item.href}
                        onClick={(e) => handleMenuClick(e, item.href)}
                      >
                        {item.title}
                      </a>

                      {item.children && (
                        <>
                          <span
                            className="cs-munu_dropdown_toggle"
                            onClick={(e) => {
                              e.currentTarget.parentElement.classList.toggle(
                                "open"
                              );
                            }}
                          >
                            <span></span>
                          </span>
                          <ul>
                            {item.children.map((child, cidx) => (
                              <li key={cidx}>
                                <a
                                  href={child.href}
                                  onClick={(e) =>
                                    handleMenuClick(e, child.href)
                                  }
                                >
                                  {child.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Section */}
            <div className="cs_main_header_right">
              <div className="header-btn d-flex align-items-center">
                <div className="main-button">
                  <a
                    className="cs_btn cs_style_1 cs_fs_14 text-uppercase"
                    href="#contact"
                    onClick={(e) => handleMenuClick(e, "#contact")}
                  >
                    <span>Lets Talk</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
