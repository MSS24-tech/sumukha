import { useEffect, useState, useRef } from "react";
import arrowIcon from "../assets/image/icons/arrow_right.webp";
import "../assets/style.css";
import Faq from "./faq";

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [popupPost, setPopupPost] = useState(null);
  const sliderWrapperRef = useRef(null);
  const slidesRef = useRef([]);
  const scrollYRef = useRef(0);

  // Fetch blogs from backend
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("blog.php");
        const data = await res.json();

        // If image exists in Base64, use it
        const blogsWithImages = data.map((blog) => ({
          ...blog,
          image: blog.image || null, // image_base64 from backend
        }));

        setBlogPosts(blogsWithImages);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };

    fetchBlogs();
  }, []);

  // Lock background scroll when popup opens
  useEffect(() => {
    if (popupPost) {
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
  }, [popupPost]);

  // Slider transform
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
  }, [currentIndex, blogPosts]);

  const goToNextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % blogPosts.length);
  const goToPrevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);

  return (
    <section className="blog-section" id="blog">
      <div className="container">
        {/* Section Heading */}
        <div className="blog-header">
          <div className="blog-header-left">
            <p className="blog-subtitle">News Room</p>
            <h2 className="blog-title">
              View the Most Recent Articles <br /> on the Blog
            </h2>
          </div>
        </div>

        {/* Slider */}
        <div className="blog-slider">
          <div className="blog-slider-wrapper" ref={sliderWrapperRef}>
            {blogPosts.length > 0 &&
              blogPosts.map((post, index) => (
                <div
                  key={post.id}
                  ref={(el) => (slidesRef.current[index] = el)}
                  className={`blog-slide ${
                    index === currentIndex ? "active" : ""
                  }`}
                >
                  <article className="blog-post">
                    {/* Thumbnail */}
                    <button
                      type="button"
                      className="post-thumbnail"
                      onClick={() => setPopupPost(post)}
                    >
                      {post.image && (
                        <img
                          src={post.image} // Base64 image
                          alt={post.title}
                        />
                      )}
                      <span className="post-date">
                        <span className="day">{post.date}</span>
                        <span className="month">{post.month}</span>
                      </span>
                    </button>

                    {/* Content */}
                    <div className="post-content">
                      <div className="post-meta">
                        <span>By {post.author}</span>
                        <span>{post.category}</span>
                      </div>
                      <h3 className="post-title">
                        <button
                          type="button"
                          onClick={() => setPopupPost(post)}
                        >
                          {post.title}
                        </button>
                      </h3>
                      <p className="post-subtitle">{post.subtitle}</p>
                      <button
                        className="post-btn"
                        onClick={() => setPopupPost(post)}
                      >
                        Read More
                      </button>
                    </div>
                  </article>
                </div>
              ))}
          </div>
        </div>

        <div className="blog-header-right">
          <div className="blog-arrows">
            <button className="arrow-btn left" onClick={goToPrevSlide}>
              <img src={arrowIcon} alt="Previous" />
            </button>
            <button className="arrow-btn right" onClick={goToNextSlide}>
              <img src={arrowIcon} alt="Next" />
            </button>
          </div>
        </div>

        {/* Popup */}
        {popupPost && (
          <div className="blog-popup-overlay">
            <div className="blog-popup">
              <button className="close-btn" onClick={() => setPopupPost(null)}>
                &times;
              </button>
              <h2>{popupPost.title}</h2>
              <p>
                <strong>
                  By {popupPost.author} | {popupPost.category}
                </strong>
              </p>
              {popupPost.image && (
                <img src={popupPost.image} alt={popupPost.title} />
              )}
              <p className="popup-text">{popupPost.fullText}</p>
            </div>
          </div>
        )}

        {/* FAQ */}
        <div className="faq-wrapper">
          <Faq />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
