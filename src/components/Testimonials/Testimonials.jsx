import "./Testimonials.css";
import { FaStar } from "react-icons/fa";

function Testimonials() {
  const reviews = [
    {
      name: "Ananya S",
      role: "Law Student",
      review:
        "The course explained contract drafting with practical examples. I feel much more confident now.",
    },
    {
      name: "Rahul M",
      role: "Legal Associate",
      review:
        "Excellent mentors, live classes and assignments. Highly recommended for anyone entering corporate law.",
    },
    {
      name: "Priya K",
      role: "Freelancer",
      review:
        "The freelancing guidance was amazing. I learned how to find clients and draft professional agreements.",
    },
  ];

  return (
    <section className="testimonials section">
      <div className="container">

        <div className="section-title">
          <h2>What Our Learners Say</h2>
          <p>Trusted by thousands of law students and professionals.</p>
        </div>

        <div className="testimonial-grid">
          {reviews.map((item, index) => (
            <div
              className="testimonial-card"
              key={index}
              data-aos="fade-up"
            >
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="review">
                "{item.review}"
              </p>

              <h3>{item.name}</h3>

              <span>{item.role}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;