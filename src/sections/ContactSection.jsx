import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../css/ContactSection.css";

export default function ContactSection(props) {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "***************",   // 🔹 replace with your EmailJS service ID
      "***************",   // 🔹 replace with your EmailJS template ID
      form.current,
      "***************"   // 🔹 replace with your EmailJS public key
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
    <section id="contact">

      <div className="container">

        {/* LEFT SIDE FORM */}

        <div className="contact-left">

          <div className="section-title">
            <h2>Get a free consultation now!</h2>
            <p>
              Please fill out the form below to send us an email and we will
              get back to you as soon as possible.
            </p>
          </div>

          <form ref={form} onSubmit={sendEmail}>

            <div className="row">

              <div className="form-group half">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  required
                />
              </div>

              <div className="form-group half">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  required
                />
              </div>

            </div>

            <div className="form-group">
              <textarea
                name="message"
                rows="4"
                placeholder="Message"
                required
              ></textarea>
            </div>
        
            <button type="submit" className="btn contact-btn hero-btn-anim">
              Send Message
            </button>

          </form>

        </div>


        {/* RIGHT SIDE CONTACT INFO */}

        <div className="contact-right">

          <div className="contact-item">
            <h3>Contact Info</h3>

            <p>
              <span>📍 Address</span>
              {props.data ? props.data.address : "30 N Gould ST 37916 Sheridan, Wyoming"}
            </p>

            <p>
              <span>📞 Phone</span>
              {props.data ? props.data.phone : "+1 (307) 218-0535"}
            </p>

            <p>
              <span>🟥 Email</span>
              {props.data ? props.data.email : "sales@bposdigital.com"}
            </p>

          </div>

          {/* SOCIAL ICONS */}

          <div className="social">
            <ul>
              <li>
                <a href={props.data ? props.data.facebook : "/"}>
                  <i className="fa fa-facebook"></i>
                </a>
              </li>

              <li>
                <a href={props.data ? props.data.twitter : "/"}>
                  <i className="fa fa-twitter"></i>
                </a>
              </li>

              <li>
                <a href={props.data ? props.data.youtube : "/"}>
                  <i className="fa fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>

        </div>

      </div>

    </section>
  );
}