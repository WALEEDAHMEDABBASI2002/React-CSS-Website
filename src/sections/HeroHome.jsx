import { useEffect, useRef } from "react";
import "../css/HeroHome.css";

export default function HeroHome() {
  const videoRef = useRef(null);

  // Mobile performance: pause video if user prefers reduced motion
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion && videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  // Scroll to next section
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("features");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero-home">

      {/* Background Video */}
      <video
        ref={videoRef}
        className="hero-video"
        src="/hero/Hero1.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content animate-hero">
        <h1>AI Bot Company</h1>

        <p>
          Intelligent AI call and chat bots that automate conversations,
          increase efficiency, and scale businesses globally.
        </p>

        {/* CTA Button */}
        <button className="btn hero-btn hero-btn-anim" onClick={scrollToNextSection}>
          Explore Solutions
        </button>
      </div>

    </section>
  );
}
