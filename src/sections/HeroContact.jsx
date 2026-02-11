import "../css/HeroContact.css";

export default function HeroContact() {

  // Scroll to next section
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("contact-form");

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="hero-contact">

      {/* Background Image */}
      <div className="hero-contact-bg"></div>

      {/* Dark Overlay */}
      <div className="hero-contact-overlay"></div>

      {/* Content */}
      <div className="hero-contact-content fade-in-up">
        <h1>Contact Our Team</h1>

        <p>
          Let’s discuss how AI chat and call bots can help your
          business grow globally.
        </p>

        <button
          className="btn hero-contact-btn hero-btn-anim"
          onClick={scrollToNextSection}
        >
          Contact Us
        </button>
      </div>

    </section>
  );
}
