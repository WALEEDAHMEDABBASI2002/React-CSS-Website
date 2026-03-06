import "../css/FeaturesSection.css";

export default function FeaturesSection() {
  return (
    <section id="features" className="section bg-white">
      <div className="container">

        {/* Section Header */}
        <div className="features-header">
          <h2>Services We Provide</h2>
          <p>
            Explore our international services tailored to support
            businesses around the world.
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid">

          {/* Feature 1 */}
          <div className="feature-card">
            <div className="feature-icon icon-chat">
              <svg viewBox="0 0 24 24">
                <path d="M21 15a4 4 0 0 1-4 4H7l-4 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/>
              </svg>
            </div>
            <h4>AI Chat Agents</h4>
            <p>
              Automate customer conversations across websites, apps, and
              messaging platforms with human-like AI responses.
            </p>
          </div>


          {/* Feature 2 */}
          <div className="feature-card">
            <div className="feature-icon icon-call">
              <svg viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.1 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.86.32 1.7.6 2.5a2 2 0 0 1-.45 2.11L9.1 10.9a16 16 0 0 0 6 6l1.57-1.05a2 2 0 0 1 2.11-.45c.8.28 1.64.48 2.5.6A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <h4>AI Call Agents</h4>
            <p>
              Handle inbound and outbound calls automatically using natural,
              intelligent voice conversations.
            </p>
          </div>


          {/* Feature 3 */}
          <div className="feature-card">
            <div className="feature-icon icon-design">
              <svg viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 0c2.5 2.7 4 6.3 4 10s-1.5 7.3-4 10c-2.5-2.7-4-6.3-4-10s1.5-7.3 4-10Z"/>
              </svg>
            </div>
            <h4>Graphic Designing</h4>
            <p>
              Our global team of certified designers creates premium,
              custom designs tailored to your needs — helping your brand
              stand out and make a lasting impact.
            </p>
          </div>


          {/* Feature 4 */}
          <div className="feature-card">
            <div className="feature-icon icon-availability">
              <svg viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 11h5v-2h-4V7h-2Z"/>
              </svg>
            </div>
            <h4>24/7 Availability</h4>
            <p>
              Never miss a lead or support request. Your AI agents work
              nonstop, every day of the year.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}