import "./Pricing.css";
import { FaCheckCircle } from "react-icons/fa";

function Pricing() {
  const features = [
    "54+ Live Interactive Sessions",
    "Lifetime Access to Recordings",
    "Downloadable Resources",
    "Certificate of Completion",
    "Freelancing Guidance",
    "Assignments & Mentor Feedback",
  ];

  return (
    <section className="pricing section">
      <div className="container">

        <div className="section-title">
          <h2>Course Fee</h2>
          <p>Invest once. Build a valuable legal skill for life.</p>
        </div>

        <div className="pricing-card" data-aos="zoom-in">

          <span className="offer">🔥 Limited Time Offer</span>

          <h3>Expert Level Contract Drafting</h3>

          <div className="price">

            <span className="new-price">
              ₹24,999
            </span>

            <span className="old-price">
              ₹60,000
            </span>

          </div>

          <div className="feature-list">

            {features.map((item, index) => (

              <div className="feature" key={index}>

                <FaCheckCircle />

                <span>{item}</span>

              </div>

            ))}

          </div>

          <button className="enroll-btn">
            Enroll Now
          </button>

        </div>

      </div>
    </section>
  );
}

export default Pricing;