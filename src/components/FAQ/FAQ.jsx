import { useState } from "react";
import "./FAQ.css";
import { FaPlus, FaMinus } from "react-icons/fa";

function FAQ() {
  const faqs = [
    {
      question: "Who is this course for?",
      answer:
        "This course is designed for law students, graduates, legal professionals, and anyone interested in mastering contract drafting.",
    },
    {
      question: "Will I receive a certificate?",
      answer:
        "Yes. After successfully completing the course, you will receive a Certificate of Completion.",
    },
    {
      question: "Are the classes live?",
      answer:
        "Yes. The program includes live interactive sessions along with lifetime access to recordings.",
    },
    {
      question: "Will I get freelancing guidance?",
      answer:
        "Absolutely. The course covers portfolio building, client communication, and strategies to start freelancing.",
    },
    {
      question: "How long will I have access?",
      answer:
        "You will get lifetime access to all recorded sessions and learning materials.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq section">
      <div className="container">

        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know before enrolling.</p>
        </div>

        <div className="faq-container">

          {faqs.map((faq, index) => (

            <div className="faq-item" key={index}>

              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <h3>{faq.question}</h3>

                {activeIndex === index ? (
                  <FaMinus />
                ) : (
                  <FaPlus />
                )}

              </div>

              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;