import React, { useState, useRef, useEffect } from "react";
import "../assets/style.css";

const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "We provide web development, cloud solutions, and IT services tailored to your business needs.",
  },
  {
    question: "How can I contact you?",
    answer:
      "You can contact us via email at contact@sumukhatechsolutions.in or call +91 76761 69998.",
  },
  {
    question: "Where are you located?",
    answer:
      "We are located at Sumukha, Mudkani, Honnavar, Uttara Kannada, 581334 India.",
  },
];

const FaqItem = ({ item, isOpen, onClick }) => {
  const answerRef = useRef(null);

  return (
    <div className="faq-item" style={{ marginTop: "5%" }}>
      <button
        className={`faq-question ${isOpen ? "active" : ""}`}
        onClick={onClick}
      >
        {item.question}
      </button>
      <div
        ref={answerRef}
        className="faq-answer"
        style={{
          maxHeight: isOpen ? `${answerRef.current.scrollHeight}px` : "0px",
        }}
      >
        <p>{item.answer}</p>
      </div>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section" id="faq">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-sub">
          Answers to common questions about our services
        </p>

        {faqData.map((item, index) => (
          <FaqItem
            key={index}
            item={item}
            isOpen={openIndex === index}
            onClick={() => toggleFaq(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Faq;
