import { useNavigate } from "react-router-dom";
import "../css/PricingSection.css";

export default function PricingSection() {
  const navigate = useNavigate();

  return (
    <section className="section bg-black pricing">
      <div className="container">

        <h2 className="center-title text-white">Simple Pricing</h2>

        <div className="pricing-grid">

          {/* STARTER */}
          <div className="price-card">
            <h4>Starter</h4>
            <p className="price">$49/mo</p>
            <p>Perfect for small businesses</p>

            <ul>
              <li>AI Chatbot</li>
              <li>Basic setup</li>
              <li>Email support</li>
            </ul>

            <button
              className="btn"
              onClick={() => navigate("/contact")}
            >
              Get Started
            </button>
          </div>

          {/* GROWTH */}
          <div className="price-card highlight">
            <h4>Growth</h4>
            <p className="price">$129/mo</p>
            <p>For scaling teams</p>

            <ul>
              <li>Chat + Call Bots</li>
              <li>Integrations</li>
              <li>Priority support</li>
            </ul>

            <button
              className="btn"
              onClick={() => navigate("/contact")}
            >
              Most Popular
            </button>
          </div>

          {/* ENTERPRISE */}
          <div className="price-card">
            <h4>Enterprise</h4>
            <p className="price">Custom</p>
            <p>Large organizations</p>

            <ul>
              <li>Custom AI bots</li>
              <li>Dedicated support</li>
              <li>Analytics</li>
            </ul>

            <button
              className="btn"
              onClick={() => navigate("/contact")}
            >
              Contact Sales
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
