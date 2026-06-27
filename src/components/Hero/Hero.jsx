import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">

        {/* Left Content */}
        <div className="hero-content" data-aos="fade-right">

          <span className="hero-badge">
            ⭐ Live Online Certification Program
          </span>

          <h1>
            Master Contract Drafting &
            <span> Build a Successful Freelancing Career</span>
          </h1>

          <p>
            Learn practical contract drafting from experienced legal
            professionals through live online sessions, real-world
            assignments, mentor feedback, and industry-focused training.
          </p>

          <div className="hero-price">

            <div className="price-save">
              Save 58%
            </div>

            <div className="price-details">
              <span className="new-price">
                ₹24,999
              </span>

              <span className="old-price">
                ₹60,000
              </span>
            </div>

          </div>

          <div className="hero-buttons">

            <button className="btn-primary">
              Enroll Now
            </button>

            <button className="btn-secondary">
              View Curriculum
            </button>

          </div>

        </div>

        {/* Right Side */}

        <div className="hero-card" data-aos="fade-left">

          <h2>Course Highlights</h2>

          <div className="highlight">

            <span>🎥</span>

            <div>
              <h4>54+ Live Sessions</h4>
              <p>Interactive online classes with mentors.</p>
            </div>

          </div>

          <div className="highlight">

            <span>📄</span>

            <div>
              <h4>Practical Drafting</h4>
              <p>Draft agreements used in real practice.</p>
            </div>

          </div>

          <div className="highlight">

            <span>🏆</span>

            <div>
              <h4>Certificate</h4>
              <p>Receive a professional completion certificate.</p>
            </div>

          </div>

          <div className="highlight">

            <span>💼</span>

            <div>
              <h4>Freelancing Support</h4>
              <p>Learn client acquisition & pricing strategies.</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;