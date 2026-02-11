import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../css/ContactSection.css";

export default function ContactSection() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_qm4hf9l",
      "template_4utp12r",
      form.current,
      "lvfsAKO3QTT18a_vJ"
    ).then(
      () => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      () => {
        alert("Failed to send message. Try again.");
      }
    );
  };

  return (
    <section id="contact-form" className="contact-section">

      <div className="contact-container">

        <h2>Get In Touch</h2>
        <p>
          Tell us about your business needs and our AI experts will
          contact you shortly.
        </p>

        {/* EMAIL FORM */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          />

          <button type="submit" className="btn">
            Send Message
          </button>

        </form>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/923212883265"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          Chat on WhatsApp
        </a>

      </div>

    </section>
  );
}
