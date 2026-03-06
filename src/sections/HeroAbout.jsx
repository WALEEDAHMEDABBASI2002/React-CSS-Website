import "../css/HeroAbout.css";

export default function HeroAbout() {

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

      {/* Parallax Background */}
      <div className="hero-about-bg"></div>

      {/* Overlay */}
      <div className="hero-about-overlay"></div>

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