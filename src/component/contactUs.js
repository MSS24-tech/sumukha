import React, { useState } from "react";

// Import images
import contactImg from "../assets/image/contact_img_24201.jpg";
import contactShape1 from "../assets/image/contact_shape_1.svg";
import starShape from "../assets/image/star_shape_1.svg";
import circleShape from "../assets/image/circle_1.svg";

export default function ContactSection() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // "success" or "error"

  const services = [
    { value: "uiux-design", label: "UI/UX Design" },
    { value: "graphics_design", label: "Graphics Design" },
    { value: "photography", label: "Photography" },
    { value: "web-dev", label: "Web Development" },
    { value: "app-dev", label: "App Development" },
  ];

  const starShapes = Array.from({ length: 5 }, (_, i) => i + 3);
  const circleShapes = [8, 9];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch("send_email.php", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      setStatus(data.status);
      setMessage(data.message);

      if (data.status === "success") form.reset();

      // Remove message after 5 seconds
      setTimeout(() => {
        setMessage("");
        setStatus("");
      }, 5000);
    } catch (error) {
      setStatus("error");
      setMessage("An error occurred. Please try again.");
      setTimeout(() => {
        setMessage("");
        setStatus("");
      }, 5000);
    }
  };

  return (
    <section
      className="position-relative overflow-hidden"
      id="contact"
      style={{ padding: "10px" }}
    >
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container position-relative">
        <div className="row cs_gap_y_40">
          {/* Contact Image */}
          <div className="col-lg-6 order-lg-2">
            <div className="cs_contact_thumbnail wow fadeInRight position-relative">
              <img
                src={contactImg}
                alt="Contact"
                width="699"
                height="632"
                loading="lazy"
                className="cs_radius_15"
              />
              <div className="cs_contact_ellipse_1 position-absolute z-0"></div>
              <div className="cs_contact_ellipse_2 position-absolute z-0"></div>
              <div className="cs_contact_ellipse_3 position-absolute z-0"></div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-6 order-lg-1 position-relative z-2">
            <div className="cs_contact_info_wrapper">
              <div className="cs_section_heading cs_style_1">
                <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb-20 wow fadeInDown">
                  Get In Touch Now<span className="cs_shape_right"></span>
                </p>
                <h2 className="cs_fs_48 cs_mb-20 wow fadeInUp">
                  Feel Free To Contact Us
                </h2>
                <p
                  className="cs_section_heading_text mb-0 wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  Our comprehensive suite of digital marketing services
                </p>
              </div>

              <div className="cs_height_32 cs_height_lg_30"></div>

              <form
                onSubmit={handleSubmit}
                className="cs_contact_form row cs_row_gap_30 cs_gap_y_24 position-relative z-2"
              >
                <div className="col-md-6">
                  <input
                    type="text"
                    className="cs_form_field cs_radius_8"
                    placeholder="Full name"
                    name="user_name"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="cs_form_field cs_radius_8"
                    placeholder="Email Address"
                    name="user_email"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="cs_form_field cs_radius_8"
                    placeholder="Phone Number"
                    name="user_phone"
                    required
                    maxLength={10}
                    onChange={(e) => {
                      e.target.value = e.target.value.replace(/\D/g, ""); // removes non-digits
                    }}
                  />
                </div>

                <div className="col-md-12">
                  <select
                    name="service"
                    className="cs_form_field cs_custom_select cs_radius_8"
                    required
                  >
                    <option value="">Type Of Service</option>
                    {services.map((service) => (
                      <option key={service.value} value={service.label}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-12">
                  <textarea
                    name="message"
                    rows="3"
                    className="cs_form_field cs_radius_8"
                    placeholder="Write Your Message"
                    required
                  ></textarea>
                </div>
                <div className="col-md-12">
                  <button
                    type="submit"
                    aria-label="Submit button"
                    className="cs_btn cs_style_1 cs_fs_14 cs_semibold cs_white_color text-uppercase"
                  >
                    <span>Submit now</span>
                  </button>
                </div>
              </form>

              {/* Success / Error Message */}
              {message && (
                <p
                  style={{
                    color: status === "success" ? "green" : "red",
                    marginTop: "15px",
                    fontWeight: "600",
                  }}
                >
                  {message}
                </p>
              )}
            </div>
            <div className="cs_height_120 cs_height_lg_80"></div>
          </div>
        </div>
      </div>

      {/* Background Shapes */}
      <div className="cs_contact_shape_1 position-absolute z-0">
        <img src={contactShape1} alt="Shape" />
      </div>
      {starShapes.map((i) => (
        <div key={i} className={`cs_contact_shape_${i} position-absolute z-0`}>
          <img src={starShape} alt={`Star ${i}`} />
        </div>
      ))}
      {circleShapes.map((i) => (
        <div key={i} className={`cs_contact_shape_${i} position-absolute z-0`}>
          <img src={circleShape} alt={`Circle ${i}`} />
        </div>
      ))}
    </section>
  );
}
