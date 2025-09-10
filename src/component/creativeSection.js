import React from "react";

// import icons & images
import dollarIcon from "../assets/image/icons/dollar_currency.webp";
import starIcon from "../assets/image/star_2cdf8.webp";
import shieldIcon from "../assets/image/shield_check7cf0.webp";
import commentIcon from "../assets/image/icons/comment.webp";
import likeIcon from "../assets/image/icons/like.webp";
import wheelShape from "../assets/image/wheel_1.webp";
import favicon2 from "../assets/image/favicon_2.webp";
import working1 from "../assets/image/working_img_1407e.webp";
import working2 from "../assets/image/working_img_26832.webp";

// Background decorative shapes
import missionShape1 from "../assets/image/mission_shape_1.webp";
import missionShape2 from "../assets/image/mission_shape_2.webp";
import spiral1 from "../assets/image/spiral_1.webp";
import waves from "../assets/image/waves.webp";
import rings from "../assets/image/rings.webp";

const iconBoxes = [
  {
    icon: dollarIcon,
    title: "Our Mission",
    text: "Our mission is to empower brands by crafting innovative and impactful creative solutions. Needs strategic campaigns success.",
  },
  {
    icon: starIcon,
    title: "Our Vision",
    text: "Our vision is to be the leading creative agency that redefines how brands connect with the world. We push the boundaries of creativity.",
  },
  {
    icon: shieldIcon,
    title: "What Sets Us Apart",
    text: "Fostering a culture of innovation and continuous growth, we aim to shape the future of branding and to reach their full potential.",
  },
];

const HowWeDo = () => {
  return (
    <section
      className="position-relative overflow-hidden"
      style={{ padding: "10px" }}
    >
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        {/* Section Heading */}
        <div className="cs_section_heading cs_style_1 cs_type_1 align-items-center">
          <div className="cs_section_heading_left">
            <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_20 wow fadeInDown">
              How We Do<span className="cs_shape_right"></span>
            </p>
            <h2 className="cs_fs_48 mb-0 wow fadeInUp">
              Crafting Creative Solutions <br /> for Modern Brands
            </h2>
          </div>
          <div className="cs_section_heading_right wow fadeInRight">
            <p className="cs_section_heading_text mb-0">
              Our comprehensive suite of digital marketing services is
              <br />
              designed to elevate your brand’s visibility.
            </p>
          </div>
        </div>

        <div className="cs_height_60 cs_height_lg_50"></div>

        <div className="row cs_gap_y_40 cs_tab_reverse align-items-center position-relative z-1">
          {/* Left Side: Icon Boxes */}
          <div className="col-lg-5">
            <div className="cs_iconbox_wrapper wow fadeInLeft">
              {iconBoxes.map((box, index) => (
                <div className="cs_iconbox cs_style_1" key={index}>
                  <span className="cs_iconbox_icon cs_center cs_blue_bg cs_radius_50">
                    <img
                      src={box.icon}
                      alt={box.title}
                      width="32"
                      height="32"
                    />
                  </span>
                  <div className="cs_iconbox_info">
                    <h3 className="cs_fs_24 cs_mb_4">{box.title}</h3>
                    <p className="cs_fs_18 cs_light mb-0">{box.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Images */}
          <div className="col-lg-7">
            <div className="cs_working_thumbnail_wrapper cs_center position-relative">
              <div className="cs_working_thumbnail position-relative wow fadeInDown">
                <img src={working1} alt="Working 1" width="275" height="369" />
                <span className="cs_comment">
                  <img src={commentIcon} alt="comment" width="46" height="33" />
                </span>
              </div>

              <div className="cs_working_thumbnail position-relative wow fadeInUp">
                <img src={working2} alt="Working 2" width="279" height="369" />
                <span className="cs_like">
                  <img src={likeIcon} alt="like" width="40" height="39" />
                </span>
                <span className="cs_wheel_shape position-absolute">
                  <img
                    src={wheelShape}
                    alt="wheel shape"
                    width="121"
                    height="116"
                  />
                </span>
              </div>

              <img src={favicon2} alt="favicon" width="123" height="123" />
            </div>
          </div>
        </div>

        {/* Decorative Backgrounds */}
        <div className="cs_blob_1 position-absolute">
          <img src={missionShape1} alt="mission shape 1" />
        </div>
        <div className="cs_blob_2 position-absolute">
          <img src={missionShape2} alt="mission shape 2" />
        </div>
        <div className="cs_wave_1 position-absolute">
          <img src={spiral1} alt="spiral" />
        </div>
        <div className="cs_wave_2 position-absolute">
          <img src={waves} alt="waves" />
        </div>
        <div className="cs_rings position-absolute">
          <img src={rings} alt="rings" />
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default HowWeDo;
