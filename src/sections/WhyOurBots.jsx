import "../css/WhyOurBots.css";

export default function WhyOurBots() {
  return (
    <section className="section bg-white why-bots">
      <div className="container">

        <h2 className="center-title">Why Our Bots</h2>

        <div className="why-grid">

          <div className="why-card">
            <h4>Human-like AI</h4>
            <p>Conversations that feel natural and engaging.</p>
          </div>

          <div className="why-card">
            <h4>Fast Deployment</h4>
            <p>Launch your bot in days, not months.</p>
          </div>

          <div className="why-card">
            <h4>Secure & Private</h4>
            <p>Your customer data stays protected.</p>
          </div>

          <div className="why-card">
            <h4>Global Ready</h4>
            <p>Serve customers anywhere in the world.</p>
          </div>

        </div>

      </div>
    </section>
  );
}
