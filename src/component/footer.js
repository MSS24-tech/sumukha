import React from "react";
import FooterLogo from "../assets/image/footer_logo.svg";
import FooterIcon from "../assets/image/footer_img_icon6477.png";
import ArrowIcon from "../assets/image/icons/arrow_right_2.svg";
import FooterShape from "../assets/image/footer_shape_1.svg";
import FooterBg from "../assets/image/footer_bg_1.jpg";

const Footer = () => {
  return (
    <footer
      className="cs_footer cs_style_1 cs_bg_filed cs_heading_bg position-relative"
      style={{
        backgroundImage: `url(${FooterBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Footer Top */}
      <div
        className="cs_footer_top position-relative z-1"
        style={{ marginTop: "42%" }}
      >
        <div className="container-fluid">
          <div className="cs_footer_content">
            <div className="cs_footer_top_content">
              <div className="wow fadeInLeft">Let's talk!</div>
              <a
                className="cs_footer_top_img cs_radius_50 wow zoomIn"
                href="contact.html"
              >
                <img
                  src={FooterIcon}
                  alt="Footer Icon"
                  width={128}
                  height={128}
                  style={{ display: "block", borderRadius: "50%" }}
                />
                <span className="cs_center">
                  <img
                    src={ArrowIcon}
                    alt="Arrow Icon"
                    width={54}
                    height={56}
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="cs_main_footer cs_white_color_2 position-relative z-1">
        <div className="container-fluid">
          <div className="cs_footer_content cs_footer_row">
            {/* Footer Widget 1 */}
            <div className="cs_footer_widget cs_footer_text">
              <div className="cs_text_widget">
                {/* <img
                  src={FooterLogo}
                  alt="Logo"
                  width={212}
                  height={38}
                  className="cs_mb_30 wow zoomIn"
                  style={{ display: "block" }}
                /> */}
                <p className="cs_mb_37">
                  Phasellus ultricies aliquam volutpat ullamcorper laoreet
                  neque, a lacinia curabitur lacinia mollis
                </p>
              </div>
              <div className="cs_social_btns cs_style_1">
                {[
                  {
                    icon: "facebook",
                    url: "https://www.facebook.com/yourpage",
                  },
                  { icon: "twitter-x", url: "https://x.com/techsumukha?s=11" },
                  {
                    icon: "linkedin",
                    url: "https://www.linkedin.com/company/sumukha-tech-solutions/",
                  },
                  {
                    icon: "instagram",
                    url: "https://www.instagram.com/sumukha_tech",
                  },
                ].map(({ icon, url }) => (
                  <a
                    key={icon}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Social link ${icon}`}
                    className="cs_center cs_radius_50"
                  >
                    <i className={`bi bi-${icon}`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            <div className="cs_footer_links_wrapper">
              {/* Quick Links */}
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_27 position-relative">
                  Quick Links
                </h2>
                <ul className="cs_footer_menu cs_mp_0">
                  {[
                    { name: "About Sumukha", link: "#about" },
                    { name: "Our Services", link: "#service" },
                    { name: "Our Blogs", link: "#blog" },
                    { name: "Contact Us", link: "#contact" },
                  ].map((item) => (
                    <li key={item.name}>
                      <a href={item.link} aria-label={`Page link ${item.name}`}>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_27 position-relative">
                  Contact Us
                </h2>
                <p className="cs_mb_24">
                  Sumukha, Mudkani, Honavar, Uttara Kannada - 581334
                </p>
                <h3 className="cs_fs_16 cs_white_color cs_mb_10">
                  Phone Call:
                </h3>
                <ul className="cs_footer_contact_list cs_mp_0">
                  {["917676169998"].map((phone) => (
                    <li key={phone}>
                      <a
                        href={`tel:${phone.replace(/-/g, "")}`}
                        aria-label={`Phone call ${phone}`}
                      >
                        {phone}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_27 position-relative">
                  Newsletter
                </h2>
                <p className="cs_mb_27">
                  Sign up to our weekly newsletter to get the latest updates.
                </p>
                <div className="cs_footer_newsletter cs_style_1">
                  <form
                    className="cs_footer_newsletter_form cs_radius_8"
                    action="#"
                  >
                    <input type="email" placeholder="Enter Email Address" />
                    <button
                      aria-label="Subscribe button"
                      className="cs_btn cs_style_1 cs_center"
                    >
                      <span>
                        <i className="bi bi-send"></i>
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="cs_footer_bottom cs_white_color_2 position-relative z-1">
        <div className="container-fluid">
          <div className="cs_footer_bottom_in cs_footer_content">
            <div className="cs_footer_copyright">
              © All Copyright 2025 by{" "}
              <a href="#" aria-label="Site link">
                Sumukha Tech Solutions
              </a>
            </div>
            <div>
              <ul className="cs_footer_menu cs_mp_0">
                <li>
                  <a href="#" aria-label="Footer link">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Footer link">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Shapes */}
      <div className="cs_footer_shape_1 position-absolute">
        <img src={FooterShape} alt="Shape" width={148} height={556} />
      </div>
      <div className="cs_footer_shape_2 position-absolute">
        <img src={FooterShape} alt="Shape" width={148} height={556} />
      </div>
    </footer>
  );
};

export default Footer;
