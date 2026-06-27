import "./WhyJoin.css";
import {
  FaFileContract,
  FaUserGraduate,
  FaBriefcase,
  FaCertificate,
  FaInfinity,
  FaUsers,
} from "react-icons/fa";

function WhyJoin() {
  const features = [
    {
      icon: <FaFileContract />,
      title: "Practical Contract Drafting",
      desc: "Draft real-world legal agreements used by professionals.",
    },
    {
      icon: <FaUserGraduate />,
      title: "Live Mentor Sessions",
      desc: "Learn directly from experienced legal experts.",
    },
    {
      icon: <FaBriefcase />,
      title: "Freelancing Guidance",
      desc: "Build your profile and start earning as a freelancer.",
    },
    {
      icon: <FaCertificate />,
      title: "Professional Certificate",
      desc: "Receive a certificate after successful completion.",
    },
    {
      icon: <FaInfinity />,
      title: "Lifetime Access",
      desc: "Watch recordings and access materials anytime.",
    },
    {
      icon: <FaUsers />,
      title: "Community Support",
      desc: "Join a network of law students and professionals.",
    },
  ];

  return (
    <section className="why section">
      <div className="container">

        <div className="section-title">
          <h2>Why Choose This Course?</h2>
          <p>
            Everything you need to become confident in contract drafting
            and start your freelancing journey.
          </p>
        </div>

        <div className="why-grid">
          {features.map((item, index) => (
            <div
              className="why-card"
              key={index}
              data-aos="zoom-in"
            >
              <div className="why-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyJoin;