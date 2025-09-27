import React from "react";
import { FAQ } from "../../../types/home.types";
import { useHomeData } from "../../../hooks/useHomeData";
import "./HelpCenterComponent.scss";

const HelpCenterComponent: React.FC = () => {
  const { faqs, loading } = useHomeData();
  const [openIndexes, setOpenIndexes] = React.useState<number[]>([]);

  const toggleFaq = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  if (loading) {
    return (
      <section className="help-corner" id="contact">
        <div className="container">
          <div className="loading-placeholder">
            <p>Loading FAQs...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="help-center" id="contact">
      <div className="container">
        <div className="heading">
          <h1 className="section-title">
            *Help C
            <div className="char-image">
              <img src="/text_photo.jpg" alt="Help Center" />
            </div>
            rner
          </h1>
          <p className="section-subtitle">
            Voluptatem accusantium doloremque Iaudan
          </p>
        </div>
        <div className="faqs">
          {faqs &&
            faqs.map((faq, i) => {
              const isOpen = openIndexes.includes(i);
              return (
                <div key={i} className={`faq-item${isOpen ? " active" : ""}`}>
                  <div
                    className="faq-question"
                    onClick={() => toggleFaq(i)}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpen}
                    style={{ cursor: "pointer" }}
                  >
                    <span className="question-text">{faq.question}</span>
                    <span className={`toggle-icon${isOpen ? " open" : ""}`}>
                      <i className="icon"></i>
                    </span>
                  </div>
                  <div className={`faq-answer${isOpen ? " open" : ""}`}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default HelpCenterComponent;
