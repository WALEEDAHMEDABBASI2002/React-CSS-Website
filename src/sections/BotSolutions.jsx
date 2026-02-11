import "../css/BotSolutions.css";
import { MessageSquare, PhoneCall, Globe, Settings } from "lucide-react";

export default function BotSolutions() {
  return (
    <section className="section bg-white bot-solutions">
      <div className="container">

        <h2 className="center-title">Our AI Bot Solutions</h2>

        <div className="solutions-grid">

          <div className="solution-card">
            <div className="solution-icon">
              <MessageSquare size={26} />
            </div>
            <h4>AI Chatbots</h4>
            <p>
              Smart website and WhatsApp bots that respond instantly
              and capture leads automatically.
            </p>
          </div>

          <div className="solution-card">
            <div className="solution-icon">
              <PhoneCall size={26} />
            </div>
            <h4>AI Call Bots</h4>
            <p>
              Human-like voice bots that handle inbound and outbound
              calls 24/7 without fatigue.
            </p>
          </div>

          <div className="solution-card">
            <div className="solution-icon">
              <Globe size={26} />
            </div>
            <h4>Multilingual Bots</h4>
            <p>
              Serve customers globally in multiple languages with
              natural conversations.
            </p>
          </div>

          <div className="solution-card">
            <div className="solution-icon">
              <Settings size={26} />
            </div>
            <h4>Custom Bot Setup</h4>
            <p>
              Bots tailored to your business, industry, and customer
              journey.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
