import React from "react";

// Importing assets
import starIcon from "../assets/image/icons/star.svg";
import vectorLine from "../assets/image/vector_line.svg";
import aboutShape1 from "../assets/image/about_shape_1.svg";
import blobShape from "../assets/image/blob_shape.svg";
import circle1 from "../assets/image/circle_1.svg";
import aboutImg1 from "../assets/image/about_img_10078.jpg";
import aboutImg2 from "../assets/image/about_img_232aa.jpg";
import clientGroup from "../assets/image/client_group_16b31.png";

function About() {
  return (
    <>
      <section className="cs_about cs_style_1 position-relative overflow-hidden">
        <div className="cs_height_120 cs_height_lg_80"></div>
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

                  {/* <div className="cs_client_info_wrapper wow fadeInRight">
                    <div className="cs_client_info_header cs_mb_15">
                      <img src={starIcon} alt="Star" width="18" height="18" />
                      <span className="cs_fs_20 cs_bold cs_heading_color">
                        Trustipilot
                      </span>
                    </div>
                    <div className="cs_client_review_content">
                      <div className="cs_client_thumb">
                        <img
                          src={clientGroup}
                          alt="Clients"
                          width="126"
                          height="42"
                        />
                      </div>
                      <div className="cs_client_rating_info">
                        <div className="cs_rating" data-rating="4">
                          <div className="cs_rating_percentage"></div>
                        </div>
                        <p className="cs_fs_14 cs_heading_color mb-0">
                          450+ reviews
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-6">
              <div className="cs_about_thumbnail_wrapper wow fadeInUp">
                <div className="cs_about_thumbnail position-relative">
                  <img src={aboutImg1} alt="About 1" width="260" height="353" />
                  <div className="cs_project_infobox_wrapper">
                    {/* <div className="cs_project_infobox cs_blue_bg">
                      <h3 className="cs_fs_48 cs_white_color">5K+</h3>
                      <p className="cs_white_color mb-0">Project Completed</p>
                    </div> */}
                  </div>
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
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

      {/* Counter Section */}
      {/* <div className="cs_counter cs_style_1 cs_gray_bg_1">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="cs_counter_wrapper cs_bg_gradient">
                <div className="cs_counter_number cs_fs_48 cs_bold cs_heading_color mb-0">
                  <span data-count-to="14" className="odometer"></span>14+
                </div>
                <p className="cs_counter_title cs_fs_18 mb-0">
                  Years of Experience
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs_counter_wrapper">
                <div className="cs_counter_number cs_fs_48 cs_bold cs_heading_color mb-0">
                  <span data-count-to="500" className="odometer"></span>500+
                </div>
                <p className="cs_counter_title cs_fs_18 mb-0">Happy Customer</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs_counter_wrapper cs_bg_gradient">
                <div className="cs_counter_number cs_fs_48 cs_bold cs_heading_color mb-0">
                  <span data-count-to="4530" className="odometer"></span>4530+
                </div>
                <p className="cs_counter_title cs_fs_18 mb-0">
                  Project Delivered
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs_counter_wrapper">
                <div className="cs_counter_number cs_fs_48 cs_bold cs_heading_color mb-0">
                  <span data-count-to="450" className="odometer"></span>450+
                </div>
                <p className="cs_counter_title cs_fs_18 mb-0">Employees</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default About;
