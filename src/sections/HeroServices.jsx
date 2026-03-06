import { useRef } from "react";
import "../css/HeroServices.css";

export default function HeroServices() {

  const heroRef = useRef(null);

  // Scroll to next section
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("botSolution");

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <section ref={heroRef} className="hero-services">

      {/* BACKGROUND IMAGE */}
      <div className="hero-services-bg"></div>

      {/* OVERLAY */}
      <div className="hero-services-overlay"></div>

      {/* CONTENT */}
      <div className="hero-services-content fade-in-up">

        <h1>Automate Conversations. <br/>Elevate Your Brand.</h1>

        <p>
          AI automation meets world-class design. We build AI call 
          and chat agents that handle conversations at scale while our 
          global design team crafts powerful visual experiences—from brand 
          identity to digital graphics—helping businesses communicate better 
          and grow faster.
        </p>

        {/* CTA Button */}
        <button
          className="btn hero-services-btn hero-btn-anim"
          onClick={scrollToNextSection}
        >
          Explore Services
        </button>

      </div>

    </section>
  );
}