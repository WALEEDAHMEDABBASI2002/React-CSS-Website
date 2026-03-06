import "../css/GlobalTrustSection.css";

export default function GlobalTrustSection() {
  return (
    <section className="globaltrust section bg-white">
      <div className="container">

        {/* HEADING */}
        <div className="globaltrust-heading">
          <h2>Built for Global Businesses</h2>
          <p>
            Our AI chat and call agent solutions are designed with a global mindset —
            supporting businesses across regions, industries, and time zones with
            consistent performance and reliability.
          </p>
        </div>

        {/* CARDS */}
        <div className="globaltrust-grid">

          <div className="globaltrust-card">
            <div className="globaltrust-icon">🌍</div>
            <h3>International Reach</h3>
            <p>
              Designed for businesses serving customers worldwide with consistent
              and intelligent communication.
            </p>
          </div>

          <div className="globaltrust-card">
            <div className="globaltrust-icon">⏰</div>
            <h3>Always <br /> Available</h3>
            <p>
              24/7 AI-driven interactions ensure your business never misses a
              customer inquiry or opportunity.
            </p>
          </div>

          <div className="globaltrust-card">
            <div className="globaltrust-icon">🛡️</div>
            <h3>Security & Compliance</h3>
            <p>
              Built with enterprise-grade security practices to ensure privacy,
              trust, and data protection.
            </p>
          </div>

          <div className="globaltrust-card">
            <div className="globaltrust-icon">⚡</div>
            <h3>Fast Performance</h3>
            <p>
              Optimized infrastructure ensures fast response times and smooth AI
              conversations globally.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
