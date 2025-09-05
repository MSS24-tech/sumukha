import { useEffect, useState, useRef } from "react";

// Import images
import post1 from "../assets/image/post_10a7eb.jpg";
import post2 from "../assets/image/post_11464f.jpg";
import post3 from "../assets/image/post_1147df.jpg";
import post4 from "../assets/image/post_684f8.jpg";
import arrowIcon from "../assets/image/icons/arrow_right.svg";
import "../assets/style.css";
import Faq from "./faq";

const blogPosts = [
  {
    id: 1,
    date: "19",
    month: "Dec",
    author: "Admin",
    category: "Business",
    title: "Discuss The Three Main Types of Flooring",
    subtitle:
      "There are many variations of passages but the majority have suffered alteration.",
    fullText:
      "Here is the additional text about flooring types that will be displayed in the popup.",
    image: post1,
  },
  {
    id: 2,
    date: "19",
    month: "Dec",
    author: "Admin",
    category: "Business",
    title: "How to Keep Your Floors Safe During a Transfer",
    subtitle:
      "There are many variations of passages but the majority have suffered alteration.",
    fullText:
      "Extra tips on keeping floors safe during a move, handling delicate surfaces and avoiding scratches.",
    image: post2,
  },
  {
    id: 3,
    date: "19",
    month: "Dec",
    author: "Admin",
    category: "Business",
    title: "Maintaining Floors with Regular Care",
    subtitle:
      "Regular maintenance can prevent damage and prolong the life of your flooring.",
    fullText:
      "A detailed guide on cleaning schedules, suitable products, and preventive care for different types of floors.",
    image: post3,
  },
  {
    id: 4,
    date: "19",
    month: "Dec",
    author: "Admin",
    category: "Business",
    title: "Safe Flooring Practices for Busy Workspaces",
    subtitle:
      "Busy work environments need safe and durable flooring solutions.",
    fullText:
      "Tips on choosing the right flooring, installing protective measures, and ensuring workplace safety.",
    image: post4,
  },
];

const faqs = [
  {
    question: "What is the best flooring type for busy offices?",
    answer:
      "For high-traffic areas, vinyl or laminate flooring is durable and easy to maintain.",
  },
  {
    question: "How often should I maintain my floors?",
    answer:
      "It depends on the material, but generally, a weekly cleaning routine works best.",
  },
  {
    question: "Can I use regular cleaners on all types of floors?",
    answer:
      "No, always use cleaning products recommended for your specific flooring type to avoid damage.",
  },
  {
    question: "How do I prevent scratches on my wooden floors?",
    answer:
      "Use felt pads under furniture and avoid dragging heavy objects across the floor.",
  },
];

const BlogSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [popupPost, setPopupPost] = useState(null);
  const [openFAQIndex, setOpenFAQIndex] = useState(null);
  const sliderWrapperRef = useRef(null);
  const slidesRef = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      if (sliderWrapperRef.current && slidesRef.current[0]) {
        const slideWidth = slidesRef.current[0].offsetWidth + 30;
        sliderWrapperRef.current.style.transform = `translateX(${
          -currentIndex * slideWidth
        }px)`;
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex]);

  const goToNextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % blogPosts.length);
  const goToPrevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);

  const toggleFAQ = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  return (
    <section
      className="cs_slider cs_style_1 cs_slider_gap_30 cs_bg_filed"
      id="blog"
    >
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        {/* Section Heading */}
        <div className="cs_section_heading cs_style_1 cs_type_1">
          <div className="cs_section_heading_left">
            <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb-20 wow fadeInDown">
              News Room<span className="cs_shape_right"></span>
            </p>
            <h2 className="cs_fs_48 mb-0 wow fadeInUp">
              View the Most Recent Articles <br /> on the Blog
            </h2>
          </div>
          <div className="cs_section_heading_right wow fadeInRight">
            <div className="cs_slider_arrows cs_style_1">
              <div
                className="cs_left_arrow cs_center cs_radius_50 slick-arrow"
                onClick={goToPrevSlide}
                role="button"
                tabIndex={0}
              >
                <img src={arrowIcon} alt="Previous" width="23" height="23" />
              </div>
              <div
                className="cs_right_arrow cs_center cs_radius_50 slick-arrow"
                onClick={goToNextSlide}
                role="button"
                tabIndex={0}
              >
                <img src={arrowIcon} alt="Next" width="23" height="23" />
              </div>
            </div>
          </div>
        </div>

        <div className="cs_height_60 cs_height_lg_50"></div>
        <div className="cs_slider_container">
          <div
            className="cs_slider_wrapper"
            ref={sliderWrapperRef}
            style={{ display: "flex" }}
          >
            {blogPosts.map((post, index) => (
              <div
                key={post.id}
                ref={(el) => (slidesRef.current[index] = el)}
                className={`cs_slide ${
                  index === currentIndex ? "slick-active slick-current" : ""
                }`}
                style={{ width: "100%", flexShrink: 0, marginRight: "30px" }}
              >
                <article className="cs_post cs_style_1 position-relative">
                  <a
                    className="cs_post_thumbnail cs_radius_15"
                    href="#!"
                    onClick={() => setPopupPost(post)}
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      width="229"
                      height="341"
                    />
                    <span className="cs_posted_by cs_radius_4 text-center position-absolute">
                      <span className="cs_date cs_orange_bg cs_white_color">
                        {post.date}
                      </span>
                      <span className="cs_month cs_white_bg cs_heading_color text-uppercase">
                        {post.month}
                      </span>
                    </span>
                  </a>
                  <div className="cs_post_content cs_white_bg cs_radius_15">
                    <div className="cs_post_meta_wrapper cs_mb_8">
                      <div className="cs_post_meta">By {post.author}</div>
                      <div className="cs_post_meta">{post.category}</div>
                    </div>
                    <h3 className="cs_post_title cs_fs_20 cs_semibold cs_mb_7">
                      <a href="#!" onClick={() => setPopupPost(post)}>
                        {post.title}
                      </a>
                    </h3>
                    <p className="cs_post_subtitle">{post.subtitle}</p>
                    <button
                      className="cs_post_btn"
                      onClick={() => setPopupPost(post)}
                    >
                      <span>Read More</span>
                    </button>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {popupPost && (
        <div className="cs_blog_popup_overlay">
          <div className="cs_blog_popup">
            <button
              className="cs_blog_popup_close"
              onClick={() => setPopupPost(null)}
            >
              &times;
            </button>
            <h2>{popupPost.title}</h2>
            <p>
              <strong>
                By {popupPost.author} | {popupPost.category}
              </strong>
            </p>
            <img
              src={popupPost.image}
              alt={popupPost.title}
              style={{ maxWidth: "100%", borderRadius: "10px" }}
            />
            <p className="cs_popup_text">{popupPost.fullText}</p>
          </div>
        </div>
      )}

      {/* FAQ Section */}
      <div style={{ marginTop: "75%" }}>
        <Faq />
      </div>
    </section>
  );
};

export default BlogSection;
