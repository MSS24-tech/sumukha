import React, { useState, useEffect } from "react";

// Import testimonial avatars
// import avatar1 from "../assets/image/avatar_5d7ed.jpg";
// import avatar2 from "../assets/image/avatar_25209.jpg";
// import avatar3 from "../assets/image/avatar_36ebb.jpg";
// import avatar4 from "../assets/image/avatar_45c6b.jpg";

// Import icons
import quoteIcon from "../assets/image/icons/quote_1.svg";
import glowShape from "../assets/image/color_glow.svg";

// Testimonial data
// const testimonials = [
//   {
//     name: "Brooklyn Simmons",
//     company: "Acme Co.",
//     quote:
//       "This team exceeded my expectations! They were punctual and meticulous. My office has looked better. Will use them again!",
//     rating: 4.5,
//     avatar: avatar4,
//   },
//   {
//     name: "Cody Fisher",
//     company: "Barone LLC.",
//     quote:
//       "Excellent service and attention to detail. Our projects have never run smoother. Highly recommend!",
//     rating: 5,
//     avatar: avatar2,
//   },
//   {
//     name: "Leslie Alexander",
//     company: "Biffco Ltd.",
//     quote:
//       "The team was incredibly efficient and professional. They finished ahead of schedule and the results were fantastic.",
//     rating: 4,
//     avatar: avatar3,
//   },
//   {
//     name: "Wade Warren",
//     company: "Binford Ltd.",
//     quote:
//       "A pleasure to work with from start to finish. They truly understand their craft and delivered exactly what we needed.",
//     rating: 5,
//     avatar: avatar4,
//   },
// ];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  // const length = testimonials.length;

  // Auto-slide every 5 seconds
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrent((prev) => (prev + 1) % length);
  //   }, 5000);
  //   return () => clearInterval(timer);
  // }, [length]);

  const renderRating = (rating) => {
    const percentage = (rating / 5) * 100;
    return (
      <div className="cs_rating" data-rating={rating}>
        <div
          className="cs_rating_percentage"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    );
  };

  return (
    <section
      className="cs_testimonial_slider cs_slider_gap_30 position-relative"
      style={{ padding: "10px" }}
    >
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_type_1">
          <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
            Our Testimonial<span className="cs_shape_right"></span>
          </p>
          <h2 className="cs_fs_48 mb-0">Clients Feedback</h2>
        </div>

        <div className="cs_testimonial_slider_inner">
          {/* {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`cs_testimonial cs_style_1 ${
                index === current ? "active" : "inactive"
              }`}
            >
              <div className="cs_testimonial_header">
                <div className="cs_avatar cs_style_1">
                  <div className="cs_avatar_icon cs_radius_50">
                    <img src={testimonial.avatar} alt={testimonial.name} />
                  </div>
                  <div className="cs_avatar_info">
                    <h3 className="cs_fs_20 cs_medium mb-0">
                      {testimonial.name}
                    </h3>
                    <p className="mb-0">{testimonial.company}</p>
                  </div>
                </div>
              </div>
              <div className="cs_testimonial_content cs_gray_bg_1 cs_radius_4 position-relative">
                <blockquote>{testimonial.quote}</blockquote>
                {renderRating(testimonial.rating)}
                <span className="cs_quote_icon position-absolute">
                  <img src={quoteIcon} alt="Quote" />
                </span>
              </div>
            </div>
          ))} */}
        </div>

        <div className="cs_testimonial_shape_1 position-absolute">
          <img src={glowShape} alt="Shape" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
