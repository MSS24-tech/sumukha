import React, { useState, useRef, useEffect } from "react";
import arrowRight from "../assets/image/icons/arrow_right.webp";
import serviceBg from "../assets/image/service_item_bg5eba.webp";

const services = [
  {
    title: "Brand design identity",
    description:
      "We create cohesive and memorable brand identities that capture your company’s essence and resonate with your audience. From logos and color palettes to typography and visual guidelines, we ensure your brand stands out, communicates clearly, and builds trust across all touchpoints.",
    link: "#",
  },
  {
    title: "Web app development",
    description:
      "We create visually appealing, responsive websites that combine great design with high performance to attract and engage your audience.",
    link: "#",
  },
  {
    title: "UI/UX Design",
    description:
      "Our user interface and experience designs are intuitive, engaging, and aligned with your brand, ensuring maximum user satisfaction.",
    link: "#",
  },
  {
    title: "SEO & Analytics",
    description:
      "We track and analyze your website’s performance to improve search engine rankings. Our insights help increase organic traffic and enhance your online visibility.",
    link: "#",
  },
];

// Extra services for popup only
const extraServices = [
  { title: "Digital Marketing", link: "service/service-details.html" },
  { title: "Mobile App Development", link: "service/service-details.html" },
  { title: "E-commerce Solutions", link: "service/service-details.html" },
];

const ServicesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const scrollYRef = useRef(0);

  // Combine main + extra services for modal
  const popupServices = [...services, ...extraServices];

  useEffect(() => {
    if (isModalOpen) {
      scrollYRef.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = scrollYRef.current;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo({ top: scrollY, left: 0, behavior: "instant" });
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [isModalOpen]);

  return (
    <section className="cs_heading_bg" id="service" style={{ padding: "10px" }}>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        {/* Heading */}
        <div className="cs_section_heading cs_style_1 cs_type_1">
          <div className="cs_section_heading_left">
            <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_20 wow fadeInDown">
              Services<span className="cs_shape_right"></span>
            </p>
            <h2 className="cs_fs_48 cs_white_color cs_mb_21 wow fadeInUp">
              Innovation Solutions
            </h2>
            <p className="cs_section_heading_text cs_white_color_2 mb-0 wow fadeInUp">
              Offering end-to-end digital solutions that combine innovation,
              efficiency, and strategy to achieve real business impact.
            </p>
          </div>
          <div className="cs_section_heading_right wow fadeInRight">
            <button
              onClick={openModal}
              className="cs_btn cs_style_1 cs_fs_16 cs_bold text-uppercase"
            >
              <span>VIEW ALL SERVICES</span>
            </button>
          </div>
        </div>

        <div className="cs_height_60 cs_height_lg_50"></div>

        {/* Main services UI */}
        <div className="cs_service_item_wrapper">
          {services.map((service, index) => (
            <div
              key={index}
              className="cs_service_item cs_style_1 position-relative wow fadeInDown"
            >
              <div className="cs_service_content">
                <h3 className="cs_service_title cs_fs_24 cs_white_color mb-0">
                  <a href={service.link}>{service.title}</a>
                </h3>
                <p className="cs_service_subtitle cs_medium cs_white_color_2 mb-0">
                  {service.description}
                </p>
                <a
                  className="cs_service_btn cs_center cs_radius_50"
                  href={service.link}
                >
                  <img src={arrowRight} alt="arrow" width="23" height="23" />
                </a>
              </div>
              <div className="cs_service_item_bg position-absolute">
                <img
                  src={serviceBg}
                  alt="background"
                  width="1904"
                  height="147"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="modal_overlay">
          <div className="modal_content">
            <button className="modal_close" onClick={closeModal}>
              &times;
            </button>
            <h3>All Services</h3>
            <ul>
              {popupServices.map((service, idx) => (
                <li key={idx}>
                  <a href={service.link}>{service.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <style jsx>{`
            .modal_overlay {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: rgba(0, 0, 0, 0.6);
              display: flex;
              justify-content: center;
              align-items: center;
              z-index: 9999;
            }
            .modal_content {
              background: #fff;
              padding: 2rem;
              border-radius: 10px;
              max-width: 500px;
              width: 90%;
              text-align: center;
              position: relative;
            }
            .modal_close {
              position: absolute;
              top: 10px;
              right: 15px;
              background: none;
              border: none;
              font-size: 2rem;
              cursor: pointer;
            }
            .modal_content ul {
              list-style: none;
              padding: 0;
            }
            .modal_content li {
              margin: 10px 0;
            }
            .modal_content a {
              color: #333;
              text-decoration: none;
            }
          `}</style>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
