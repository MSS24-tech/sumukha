import React, { useEffect, useState } from "react";

// Import images
import heroBg from "../assets/image/hero_bg_1.webp";
import heroImg from "../assets/image/hero-img-68d83.webp";
import starShape from "../assets/image/star_shape.webp";
import circularText from "../assets/image/circular_text.webp";
import arrowRight from "../assets/image/icons/arrow_right.webp";
// import growthBalance from "../assets/image/icons/growth_balance.webp";
// import playerIcon from "../assets/image/icons/player_1.webp";
import userIcon from "../assets/image/icons/user_1.webp";
import facebook from "../assets/image/letter-f_9182827.webp";
import instagram from "../assets/image/instagram-logo_4103007.webp";
import linkedIn from "../assets/image/linkedin_3670045.webp";
import x from "../assets/image/twitter.webp";
import "../assets/style.css";

const socialLinks = [
  { name: "Facebook", icon: "bi-facebook", href: "#" },
  {
    name: "Instagram",
    icon: "bi-instagram",
    href: "https://www.instagram.com/sumukha_tech",
  },
  {
    name: "LinkedIn",
    icon: "bi-linkedin",
    href: "https://www.linkedin.com/company/sumukha-tech-solutions/",
  },
  {
    name: "Twitter",
    icon: "bi-twitter-x",
    href: "https://x.com/techsumukha?s=11",
  },
];

const mobileSocialLinks = [
  { name: "Facebook", img: facebook, href: "#" },
  {
    name: "Instagram",
    img: instagram,
    href: "https://www.instagram.com/sumukha_tech",
  },
  {
    name: "LinkedIn",
    img: linkedIn,
    href: "https://www.linkedin.com/company/sumukha-tech-solutions/",
  },
  { name: "Twitter", img: x, href: "https://x.com/techsumukha?s=11" },
];

function Hero() {
  // const phrases = [
  //   "Dreams That Break Rules",
  //   "Thoughts That Spark Fire",
  //   "Visions That Won’t Quit",
  //   "Ideas That Bite Back",
  // ];

  // const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
  //   }, 4000);
  //   return () => clearInterval(interval);
  // }, []);
  const staticText = "Share Your Ideas With ";
  const word = "Sumukha";
  const [active, setActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(true); // trigger animation
      setTimeout(() => setActive(false), 1000); // reset for next cycle
    }, 3000); // repeat every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="cs_hero cs_style_1 cs_bg_filled position-relative"
      style={{ backgroundImage: `url(${heroBg})` }}
      id="home"
    >
      <div className="container">
        <div className="cs_hero_content">
          {/* Hero Image */}
          <div className="cs_hero_thumbnail wow fadeInLeft">
            <img
              src={heroImg}
              alt="Hero"
              loading="lazy"
              width="100%"
              height="473"
              decoding="async"
              style={{ color: "transparent" }}
            />
            <span className="position-absolute">
              {/* Inline SVG */}
              <svg
                width="83"
                height="96"
                viewBox="0 0 83 96"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG paths omitted for brevity */}
              </svg>
            </span>
          </div>

          {/* Hero Text */}
          <div className="cs_hero_text position-relative">
            <div className="cs_hero_shape_1 position-absolute">
              <img
                src={starShape}
                alt="Shape"
                width="35"
                height="39"
                loading="lazy"
              />
            </div>

            <p className="cs_hero_subtitle cs_accent_color cs_semibold">
              Best Of Your Growth, Our Mission
            </p>
            {/* <h1 className="cs_hero_title cs_extra_bold fade-text">
              {(() => {
                const words = phrases[currentIndex].split(" ");
                const lastWord = words.pop(); // get last word
                return (
                  <>
                    {words.join(" ")}{" "}
                    <span style={{ color: "orange" }}>{lastWord}</span>
                  </>
                );
              })()}
            </h1> */}

            <h6 className="cs_hero_title cs_extra_bold typewriter">
              {staticText}
              {Array.from(word).map((letter, index) => (
                <span
                  key={index}
                  className={active ? "active" : ""}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {letter}
                </span>
              ))}
            </h6>

            <div className="cs_hero_text_wrapper">
              <p className="cs_hero_text cs_medium wow fadeInRight">
                At Sumukha Tech Solutions, we specialize in creating
                intelligent, future-ready digital solutions that empower
                businesses to grow, innovate, and stay ahead. From custom
                software and AI-driven tools to seamless web and mobile
                experiences, we transform ideas into scalable, sustainable
                technologies that deliver real results.
              </p>

              <div className="cs_social_links_mobile d-flex d-lg-none justify-content-start mt-3">
                {mobileSocialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="me-3"
                  >
                    <span className="cs_social_icon_mobile">
                      <img
                        src={social.img}
                        alt={social.name}
                        width="40" // adjust size
                        height="40"
                      />
                    </span>
                  </a>
                ))}
              </div>

              {/* Hero Features */}
              <div className="cs_hero_feature_wrapper">
                {/* <a
                  className="cs_totating_logo cs_heading_bg cs_radius_50 position-relative wow zoomIn"
                  href="about.html"
                >
                  <img src={circularText} alt="Circular Text" width="94" />
                  <div className="cs_logo_arrow cs_center">
                    <img src={arrowRight} alt="Arrow" width="23" />
                  </div>
                </a> */}

                {/* <div className="cs_sales_info_wrapper cs_heading_color">
                  <img src={growthBalance} alt="Growth" width="40" />
                  <div className="cs_sales_info">
                    <h3 className="cs_fs_20 mb-0">85%</h3>
                    <p className="cs_fs_14 mb-0">Sales Growth</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="cs_hero_sidebar">
          {/* <div className="cs_top_content">
            <div className="cs_clients_info">
              <a
                aria-label="Play video button"
                className="cs_video cs_style_1 cs_video_open cs_center cs_radius_50 cs_mb_20 wow zoomIn"
                href="#"
              >
                <img src={playerIcon} alt="Play Video" width="120" />
              </a>

              <div className="cs_clients_heading cs_mb_10">
                <img src={userIcon} alt="User" width="19" />
                <h3 className="cs_fs_20 mb-0">
                  3k+{" "}
                  <span className="cs_fs_14 cs_medium">Satisfied client</span>
                </h3>
              </div>
            </div>
          </div> */}

          {/* <div className="cs_bottom_content wow fadeInUp">
            <div className="cs_market_info">
              <div className="cs_value_graph">
                <div className="cs_round_progress_wrap">
                  <div className="cs_round_progress_in">
                    <div className="cs_round_progress_number cs_fs_14 cs_bold cs_heading_color">
                      81%
                    </div>
                  </div>
                  <div className="cs_round_progress">
                    <svg
                      className="cs_round_progress_percentage"
                      viewBox="0 0 100 100"
                      width="163"
                      height="163"
                    >
                      <circle cx="50" cy="50" r="40"></circle>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="cs_value_info">
                <p className="cs_fs_14 cs_medium cs_heading_color mb-0">
                  Market value
                </p>
                <h3 className="cs_fs_18 mb-0">$23,53.00</h3>
              </div>
            </div>
          </div> */}

          {/* Social Links */}
          <div className="cs_social_links wow fadeInRight">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <span className="cs_social_text">{social.name}</span>
                <span className="cs_social_icon cs_heading_bg cs_center cs_accent_color cs_radius_50">
                  <i className={`bi ${social.icon}`}></i>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Video Popup */}
      {/* <div className="cs_video_popup">
        <div className="cs_video_popup-overlay"></div>
        <div className="cs_video_popup-content">
          <div className="cs_video_popup-layer"></div>
          <div className="cs_video_popup-container">
            <div className="cs_video_popup-align">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src="about:blank"
                  title="video"
                ></iframe>
              </div>
            </div>
            <div className="cs_video_popup-close"></div>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default Hero;
