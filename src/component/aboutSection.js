import React from "react";

// Importing assets
import starIcon from "../assets/image/icons/star.webp";
import vectorLine from "../assets/image/vector_line.webp";
import aboutShape1 from "../assets/image/about_shape_1.webp";
import blobShape from "../assets/image/blob_shape.webp";
import circle1 from "../assets/image/circle_1.webp";
import aboutImg1 from "../assets/image/about_img_10078.webp";
import aboutImg2 from "../assets/image/about_img_232aa.webp";
import clientGroup from "../assets/image/client_group_16b31.webp";

function About() {
  return (
    <>
      <section
        className="cs_about cs_style_1 position-relative overflow-hidden"
        style={{ padding: "10px", marginTop: "50px", marginBottom: "80px" }} // ✅ Equal padding applied inline
        id="about"
      >
        <div className="container">
          <div className="row cs_gap_y_40 cs_tab_reverse">
            {/* Left Column */}
            <div className="col-lg-6">
              <div className="cs_about_content">
                <div className="cs_section_heading cs_style_1 cs_mb_28">
                  <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
                    About Us<span className="cs_shape_right"></span>
                  </p>
                  <h2 className="cs_fs_48 cs_mb_21 wow fadeInDown">
                    we’re strategic digital marketing agency
                  </h2>
                  <p className="cs_section_heading_text mb-0">
                    At Sumukha Tech Solutions, we create intelligent,
                    future-ready digital solutions that empower businesses and
                    drive growth. Leveraging years of experience and emerging
                    technologies, we deliver solutions that are not only
                    functional but strategically aligned with your business
                    goals.
                  </p>
                </div>

                {/* Features List */}
                <ul className="cs_list cs_style_1 cs_medium cs_heading_color cs_mp_0">
                  <li>
                    <span className="cs_list_icon cs_center">
                      <i className="bi bi-check-lg"></i>
                    </span>
                    <span className="cs_list_text">
                      Innovative Technology: We combine cutting-edge IT tools,
                      advanced analytics, and robust database management.
                    </span>
                  </li>
                  <li>
                    <span className="cs_list_icon cs_center">
                      <i className="bi bi-check-lg"></i>
                    </span>
                    <span className="cs_list_text">
                      Smart & Scalable Solutions: We transform ideas into
                      intelligent, scalable, and sustainable solutions.
                    </span>
                  </li>
                  <li>
                    <span className="cs_list_icon cs_center">
                      <i className="bi bi-check-lg"></i>
                    </span>
                    <span className="cs_list_text">
                      Business Growth & Adaptability: We focus on helping your
                      business grow, adapt, and thrive in a rapidly evolving
                      digital landscape.
                    </span>
                  </li>
                </ul>

                {/* Button + Trust Info */}
                <div className="cs_about_btn_group">
                  <a
                    aria-label="Click to visit about us page"
                    className="cs_btn cs_style_1 cs_fs_14 cs_bold text-uppercase wow fadeInLeft"
                    href="about.html"
                  >
                    <span>About Us</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-6">
              <div className="cs_about_thumbnail_wrapper wow fadeInUp">
                <div className="cs_about_thumbnail position-relative">
                  <img src={aboutImg1} alt="About 1" width="260" height="353" />
                  <div className="cs_vector_shape position-absolute">
                    <img src={vectorLine} alt="Vector" width="57" height="19" />
                  </div>
                </div>

                <div className="cs_about_thumbnail position-relative">
                  <img src={aboutImg2} alt="About 2" width="269" height="453" />
                  <div className="cs_about_shape_3 position-absolute">
                    <img src={aboutShape1} alt="Shape" width="99" height="86" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Background Shapes */}
          <div className="cs_about_shape_1 position-absolute">
            <img src={blobShape} alt="Blob Shape" width="831" height="932" />
          </div>
          <div className="cs_about_shape_2 position-absolute">
            <img src={circle1} alt="Circle Shape" width="93" height="93" />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
