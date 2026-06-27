import "./Curriculum.css";
import {
  FaBookOpen,
  FaFileSignature,
  FaHandshake,
  FaUserTie,
  FaLaptopCode,
  FaAward,
} from "react-icons/fa";

function Curriculum() {
  const modules = [
    {
      icon: <FaBookOpen />,
      title: "Module 1",
      topic: "Introduction to Contract Drafting",
    },
    {
      icon: <FaFileSignature />,
      title: "Module 2",
      topic: "Employment & Service Agreements",
    },
    {
      icon: <FaHandshake />,
      title: "Module 3",
      topic: "Commercial Contracts & NDAs",
    },
    {
      icon: <FaUserTie />,
      title: "Module 4",
      topic: "Client Negotiation & Legal Drafting",
    },
    {
      icon: <FaLaptopCode />,
      title: "Module 5",
      topic: "Freelancing & Portfolio Building",
    },
    {
      icon: <FaAward />,
      title: "Module 6",
      topic: "Capstone Project & Certification",
    },
  ];

  return (
    <section className="curriculum section">
      <div className="container">

        <div className="section-title">
          <h2>Course Curriculum</h2>
          <p>
            Learn through practical modules designed by legal experts.
          </p>
        </div>

        <div className="curriculum-grid">
          {modules.map((module, index) => (
            <div
              className="module-card"
              key={index}
              data-aos="fade-up"
            >
              <div className="module-icon">
                {module.icon}
              </div>

              <div>
                <h3>{module.title}</h3>
                <p>{module.topic}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Curriculum;