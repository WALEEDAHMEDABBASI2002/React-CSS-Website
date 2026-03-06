import { useRef, useEffect } from "react";
import "../css/HeroAbout.css";

export default function HeroAbout() {

  const videoRef = useRef(null);

  // Pause video if user prefers reduced motion
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion && videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector(".hero-about + section");

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section id="hero" className="hero-about">

      {/* Background Video */}
       <video
        ref={videoRef}
        className="hero-video"
        src="/hero/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
      />

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-about-content fade-in-up">
        <h1 className="hero-title">About BPOS Digital</h1>

        <p className="hero-subtitle">
          We build intelligent AI call and chat agent solutions designed
          for businesses that operate globally and scale confidently.
        </p>

        <button
          className="btn hero-about-btn hero-btn-anim"
          onClick={scrollToNextSection}
        >
          Learn More
        </button>
      </div>

    </section>
  );
}