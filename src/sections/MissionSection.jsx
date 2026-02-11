import "../css/MissionSection.css";

export default function MissionSection() {
  return (
    <section className="mission-section section bg-white">
      <div className="container">

        {/* HEADING */}
        <div className="mission-heading">
          <h2>Our Mission & Vision</h2>

          <p>
            We are committed to transforming global business communication
            through powerful AI call and chat bot solutions designed for
            reliability, efficiency, and growth.
          </p>
        </div>

        {/* CARDS */}
        <div className="mission-cards">

          {/* MISSION CARD */}
          <div className="mission-card">
            <div className="mission-icon">🎯</div>

            <h3>Our Mission</h3>

            <p>
              Our mission is to help businesses communicate smarter by delivering
              reliable AI-powered call and chat bot solutions that automate
              conversations, reduce workload, and improve customer engagement
              worldwide.
            </p>
          </div>

          {/* VISION CARD */}
          <div className="mission-card">
            <div className="mission-icon">🚀</div>

            <h3>Our Vision</h3>

            <p>
              We envision a future where businesses of all sizes can scale
              globally without communication barriers — powered by intelligent,
              always-available AI assistants built for real-world customer needs.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
