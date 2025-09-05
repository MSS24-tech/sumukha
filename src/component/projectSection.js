import React from "react";
import card1 from "../assets/image/card_1.jpg";
import card2 from "../assets/image/card_2.jpg";
import card3 from "../assets/image/card_3.jpg";
import card4 from "../assets/image/card_4.jpg";
import card5 from "../assets/image/card_5.jpg";
import card6 from "../assets/image/card_6.jpg";
import arrowRight from "../assets/image/icons/arrow_right.svg";
import checkmark from "../assets/image/icons/checkmark.svg";

const projects = [card1, card2, card3, card4, card5, card6];

const punchlines = [
  "Transforming Vision into Digital Reality",
  "Your Digital Success Starts Here",
  "Fueling Your Brands Digital Evolution",
  "Driving Growth in the Digital Age",
  "Your Digital Success Starts Here",
];

const LatestWork = () => {
  return (
    <section>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 text-center">
          <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_center cs_mb_20 wow fadeInDown">
            <span className="cs_shape_left"></span>
            Latest Work
            <span className="cs_shape_right"></span>
          </p>
          <h2 className="cs_fs_48 cs_mb_21 wow fadeInUp">
            Explore Our Projects
          </h2>
          <p
            className="cs_section_heading_text mb-0 wow fadeInUp"
            data-wow-delay="200ms"
          >
            Our comprehensive suite of digital marketing services is designed to
            <br />
            elevate your brand’s visibility.
          </p>
        </div>
      </div>

      <div className="cs_height_60 cs_height_lg_50"></div>

      {/* Project Slider */}
      <div className="cs_horizontal_slider_wrapper">
        <div className="cs_horizontal_slider_in">
          {/* first loop */}
          <div className="cs_project_list">
            {projects.map((img, index) => (
              <a
                key={`proj1-${index}`}
                aria-label="Case study details page link"
                className="cs_card cs_style_1 cs_center position-relative"
                href="project/project-details.html"
              >
                <img src={img} alt={`Project ${index + 1}`} />
                <span className="cs_card_btn cs_center position-absolute">
                  <img src={arrowRight} alt="arrow" width="23" height="23" />
                </span>
              </a>
            ))}
          </div>

          {/* second loop (for continuous scroll) */}
          <div className="cs_project_list">
            {projects.map((img, index) => (
              <a
                key={`proj2-${index}`}
                aria-label="Case study details page link"
                className="cs_card cs_style_1 cs_center position-relative"
                href="project/project-details.html"
              >
                <img src={img} alt={`Project ${index + 1}`} />
                <span className="cs_card_btn cs_center position-absolute">
                  <img src={arrowRight} alt="arrow" width="23" height="23" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="cs_height_120 cs_height_lg_80"></div>

      {/* Brands / Punchlines */}
      <div className="cs_brands cs_gray_bg_3">
        <div className="cs_horizontal_slider_wrapper">
          <div className="cs_horizontal_slider_in">
            {/* first punchline list */}
            <div className="cs_brands_list cs_fs_22 cs_heading_color cs_gallery_list">
              {punchlines.map((line, index) => (
                <div key={`line1-${index}`}>
                  <img src={checkmark} alt="check" width="23" height="22" />
                  <span>{line}</span>
                </div>
              ))}
            </div>

            {/* second punchline list (repeat) */}
            <div className="cs_brands_list cs_fs_22 cs_heading_color cs_gallery_list">
              {punchlines.map((line, index) => (
                <div key={`line2-${index}`}>
                  <img src={checkmark} alt="check" width="23" height="22" />
                  <span>{line}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
