import "../css/BotSolutions.css";
import { MessageSquare, PhoneCall, Globe, Settings } from "lucide-react";

export default function BotSolutions() {
  return (
    <section id="botSolution" className="section bg-white bot-solutions">

      <div className="container">

        {/* HEADER */}
        <div className="section-header">
          <h2>Our AI Agent Solutions</h2>

          <p>
            We build enterprise-ready AI call and chat solutions designed
            for scale, reliability, and real-world business impact.
          </p>
        </div>


        {/* CARDS */}
        <div className="solutions-grid">

          <div className="solution-card">
  <div className="solution-icon chat">
    <MessageSquare size={28}/>
  </div>

  <h4>AI Chat<br/> Agents</h4>

  <p>
    Smart website and WhatsApp agents that respond instantly
    and capture leads automatically.
  </p>
</div>


          <div className="solution-card">
  <div className="solution-icon call">
    <PhoneCall size={28}/>
  </div>

  <h4>AI Call <br/>Agents</h4>

  <p>
    Human-like voice agents that handle inbound and outbound
    calls 24/7 without fatigue.
  </p>
</div>


          <div className="solution-card">
  <div className="solution-icon globe">
    <Globe size={28}/>
  </div>

  <h4>Multilingual Support</h4>

  <p>
    Serve customers worldwide in their native language with
    AI trained for global communication.
  </p>
</div>


          <div className="solution-card">
  <div className="solution-icon custom">
    <Settings size={28}/>
  </div>

  <h4>Custom Agent Setup</h4>

  <p>
    Agents tailored to your business, industry,
    and customer journey.
  </p>
</div>

        </div>

      </div>

    </section>
  );
}