import "../css/WhyChooseUsSection.css";

export default function WhyChooseUsSection() {
  return (
    <section className="section bg-white">
      <div className="container">

        {/* SECTION HEADER */}
        <div className="why-header">
          <h2>Why Choose Us</h2>
          <p>
            We build enterprise-ready AI call and chat solutions designed
            for scale, reliability, and real-world business impact.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="why-grid">

         {/* <div className="why-card">
            <div className="why-icon">🔒</div>
            <h4>Enterprise-Grade Security</h4>
            <p>
              Built with security-first architecture to protect customer
              data and meet global compliance standards.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">🌍</div>
            <h4>Global & Multi-Language Ready</h4>
            <p>
              Serve customers worldwide with AI trained to understand
              languages, accents, and regional context.
            </p>
          </div> */}

          <div className="why-card">
            <div className="why-icon">⚙️</div>
            <h4>Seamless Integrations</h4>
            <p>
              Easily connect with CRMs, ERPs, call systems, and existing
              business tools without disruption.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">🤖</div>
            <h4>Custom-Trained AI Models</h4>
            <p>
              Your AI is trained on your data, workflows, and business
              logic — not generic scripts.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">📈</div>
            <h4>Built to Scale</h4>
            <p>
              From startups to enterprises, our infrastructure scales
              effortlessly with demand.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">🕒</div>
            <h4>Always On, Always Reliable</h4>
            <p>
              24/7 availability ensures you never miss a lead, call, or
              customer interaction.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
