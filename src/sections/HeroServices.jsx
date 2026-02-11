import "../css/HeroServices.css";

export default function HeroServices() {

  // Scroll to next section
  const scrollToNextSection = () => {
    const nextSection = document.querySelector(".hero-services + section");

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <section id="hero" className="hero-services">

      {/* BACKGROUND IMAGE */}
      <div className="hero-services-bg"></div>

      {/* DARK OVERLAY */}
      <div className="hero-services-overlay"></div>

      {/* CONTENT */}
      <div className="hero-services-content fade-in-up">
        <h1>AI Bot Company</h1>

        <p>
          Intelligent AI call and chat bots that automate conversations,
          increase efficiency, and scale businesses globally.
        </p>

        <button
          className="btn hero-services-btn hero-btn-anim"
          onClick={scrollToNextSection}
        >
          Explore Solutions
        </button>
      </div>

    </section>
  );
}
