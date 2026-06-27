import "./TrustBar.css";
import {
  FaUsers,
  FaVideo,
  FaCertificate,
  FaInfinity,
} from "react-icons/fa";

function TrustBar() {
  const items = [
    {
      icon: <FaUsers />,
      title: "20,000+ Learners",
      text: "Trusted by law students & professionals",
    },
    {
      icon: <FaVideo />,
      title: "54+ Live Sessions",
      text: "Interactive mentor-led learning",
    },
    {
      icon: <FaCertificate />,
      title: "Certificate",
      text: "Industry-recognized completion certificate",
    },
    {
      icon: <FaInfinity />,
      title: "Lifetime Access",
      text: "Access recordings anytime",
    },
  ];

  return (
    <section className="trust section">
      <div className="container trust-grid">
        {items.map((item, index) => (
          <div className="trust-card" key={index} data-aos="zoom-in">
            <div className="trust-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustBar;