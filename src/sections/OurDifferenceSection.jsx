import "../css/OurDifferenceSection.css";

export default function OurDifferenceSection() {
  return (
    <section className="difference-section bg-black">
      <div className="container">

        {/* HEADING */}
        <div className="difference-heading">
          <h2>What Makes Us Different</h2>
          <p>
            We are a product-focused AI company specializing exclusively in intelligent
            chat agents and call agents — built for real businesses operating at scale.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="difference-grid">

          <div className="difference-card">
            <div className="difference-icon">🎯</div>
            <h3>Focused Expertise</h3>
            <p>
              We don’t do generic automation. Our entire focus is on AI-powered
              chat and call agents that handle real customer conversations reliably.
            </p>
          </div>

          <div className="difference-card">
            <div className="difference-icon">📈</div>
            <h3>Built for Scale</h3>
            <p>
              Our solutions are designed to support growing businesses, high call
              volumes, and global customer bases without performance compromise.
            </p>
          </div>

          <div className="difference-card">
            <div className="difference-icon">💼</div>
            <h3>Business-First Design</h3>
            <p>
              Every agent is designed around real business workflows — customer support,
              sales inquiries, lead handling, and follow-ups.
            </p>
          </div>

          <div className="difference-card">
            <div className="difference-icon">🌍</div>
            <h3>Global Ready</h3>
            <p>
              Our AI agents are built to support international operations, multi-language
              use cases, and round-the-clock availability.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
