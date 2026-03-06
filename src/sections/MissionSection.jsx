import "../css/MissionSection.css";

export default function MissionSection() {
  return (
    <section className="mission-section">

      <div className="mission-grid">

        {/* MISSION TEXT SIDE */}
        <div className="mission-content">

          <h2 className="mission-heading">Our Mission</h2>

          <p>
            Our mission is to help businesses communicate smarter by delivering reliable 
            AI-powered call and chat agents, combined with modern UI/UX and graphic design 
            solutions that elevate digital experiences.
          </p>

          <p>
            We focus on building intelligent automation and impactful design that enable 
            companies to scale operations, respond instantly to customers, and present powerful 
            digital products with consistency across global markets.
          </p>

        </div>

        {/* MISSION IMAGE */}
        <div className="mission-image mission-yellow"></div>

      </div>



      <div className="mission-grid">

        {/* VISION IMAGE */}
        <div className="mission-image mission-orange"></div>

        {/* VISION TEXT */}
        <div className="mission-content">

          <h2 className="mission-heading">Our Vision</h2>

          <p>
            We envision a future where businesses of every size can grow globally without 
            communication barriers — supported by intelligent AI agents and user-centered 
            design solutions built for modern digital interactions.
          </p>

          <p>
            Our goal is to transform how companies connect with customers by blending advanced 
            AI technology, intuitive design, and reliable automation that deliver efficiency, 
            scalability, and meaningful engagement.
          </p>

        </div>

      </div>

    </section>
  );
}