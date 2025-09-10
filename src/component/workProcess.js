import React from "react";

// Import step images
import step1Img from "../assets/image/step_index_1.webp";
import step2Img from "../assets/image/step_index_2.webp";
import step3Img from "../assets/image/step_index_3.webp";
import step4Img from "../assets/image/step_index_4.webp";

// Import background shape images
import processShape1 from "../assets/image/process_shape_1.webp";

// Import brand images
// import brand1 from "../assets/image/brand_1.webp";
// import brand2 from "../assets/image/brand_2.webp";
// import brand3 from "../assets/image/brand_3.webp";
// import brand4 from "../assets/image/brand_4.webp";
// import brand5 from "../assets/image/brand_5.webp";

// Work process steps data
const steps = [
  {
    id: "01",
    title: "Discovery & Research",
    img: step1Img,
    extraClass: "wow fadeInUp",
  },
  {
    id: "02",
    title: "Strategy Development",
    img: step2Img,
    extraClass: "cs_box_2",
  },
  {
    id: "03",
    title: "Design & Development",
    img: step3Img,
    extraClass: "cs_box_3",
  },
  {
    id: "04",
    title: "Launch & QA",
    img: step4Img,
    extraClass: "cs_box_4 wow fadeInUp",
  },
];

// Background shapes array
const processShapes = Array(7).fill(processShape1);

// Brand images array
// const brands = [brand1, brand2, brand3, brand4, brand5];

export default function WorkProcess() {
  return (
    <>
      {/* Work Process Section */}
      <section
        className="cs_process_area cs_style_1"
        style={{ padding: "80px 0" }}
      >
        <div className="container">
          {/* Section Heading */}
          <div className="cs_section_heading cs_style_1 text-center">
            <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_center cs_mb_20 wow fadeInDown">
              <span className="cs_shape_left"></span>
              Work Process
              <span className="cs_shape_right"></span>
            </p>
            <h2 className="cs_fs_48 cs_mb_21 wow fadeInUp">
              Our Solution Process.
            </h2>
            <p
              className="cs_section_heading_text mb-0 wow fadeInUp"
              data-wow-delay="200ms"
            >
              Experience Excellence Techtro Your Leading Digital Solutions
              Provider. We are a leading digital agency.
            </p>
          </div>
          <br />

          {/* Process Content */}
          <div className="cs_process_content mt-12">
            <div className="cs_heading_box cs_radius_20 mb-10">
              <div className="cs_heading_box_inner cs_center cs_blue_bg cs_bold cs_white_color cs_radius_10 text-center text-uppercase">
                Sumukha Approach
              </div>
            </div>

            <div className="cs_steps_boxes_wrapper position-relative">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`cs_stepbox_wrapper position-relative ${step.extraClass}`}
                >
                  <span className="cs_stepbox_index cs_center cs_radius_50 position-absolute">
                    <span className="cs_step_index_in cs_radius_50">
                      <span className="cs_fs-18 cs_bold cs_heading_color">
                        {step.id}
                      </span>
                      <span className="cs_fs_14 cs_medium">Step</span>
                    </span>
                    <img
                      src={step.img}
                      alt={`Step ${step.id}`}
                      width="72"
                      height="25"
                      loading="lazy"
                    />
                  </span>
                  <div className="cs_stepbox_inner cs_center cs_fs_22 cs_medium cs_heading_color cs_radius_10 text-center">
                    {step.title}
                  </div>
                </div>
              ))}

              {/* Background Shapes */}
              {processShapes.map((shape, index) => (
                <div
                  key={index}
                  className={`cs_process_shape_${index + 1} position-absolute`}
                >
                  <img src={shape} alt={`shape ${index + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients / Brands Slider (still commented) */}
      {/* <div className="cs_brands_slider position-relative z-2">
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_2">
            <p className="cs_section_subtitle cs_fs_20 cs_semibold cs_accent_color mb-0">
              CLIENTS I’VE WORKED WITH
            </p>
          </div>

          <div className="cs_horizontal_slider_wrapper cs_brands_wrapper">
            <div className="cs_horizontal_slider_in">
              {[...Array(2)].map((_, listIndex) => (
                <div key={listIndex} className="cs_brands_list cs_type_1">
                  {brands.map((brand, idx) => (
                    <div key={idx} className="cs_brand">
                      <img
                        src={brand}
                        alt={`Brand ${idx + 1}`}
                        loading="lazy"
                        width="200"
                        height="60"
                        decoding="async"
                        style={{ color: "transparent" }}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
