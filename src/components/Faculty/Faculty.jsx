import "./Faculty.css";

function Faculty() {
  const faculty = [
    {
      name: "Legal Industry Expert",
      role: "Corporate Lawyer",
      image: "https://i.pravatar.cc/300?img=12",
    },
    {
      name: "Senior Contract Specialist",
      role: "Contract Drafting Mentor",
      image: "https://i.pravatar.cc/300?img=32",
    },
    {
      name: "Freelancing Mentor",
      role: "Legal Consultant",
      image: "https://i.pravatar.cc/300?img=52",
    },
  ];

  return (
    <section className="faculty section">
      <div className="container">

        <div className="section-title">
          <h2>Meet Your Mentors</h2>
          <p>
            Learn directly from experienced legal professionals.
          </p>
        </div>

        <div className="faculty-grid">
          {faculty.map((item, index) => (
            <div
              className="faculty-card"
              key={index}
              data-aos="zoom-in"
            >
              <img src={item.image} alt={item.name} />

              <h3>{item.name}</h3>

              <span>{item.role}</span>

              <button>View Profile</button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Faculty;