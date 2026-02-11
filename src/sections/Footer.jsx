import "../css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer bg-black">
      <div className="container">

        {/* =========================
            TOP LEGAL / INFO TEXT
        ========================= */}
        {/* <div className="footer-legal">
          <p>
            AI solutions, features, and capabilities are subject to availability
            and may vary by country or region. Certain functionalities may not
            be available in all markets and are dependent on local regulations,
            language support, and technical limitations. Features may be added,
            modified, or discontinued as our technology evolves.
          </p>
          <p>
            Our AI call and chat services are built to support businesses
            globally and are designed with a strong focus on security,
            reliability, scalability, and compliance. Data handling practices
            follow industry-standard security measures, and integrations may
            require additional configuration based on existing systems.
          </p>
        </div>

        <hr className="footer-divider" /> */}

        {/* =========================
            FOOTER LINKS
        ========================= */}
        <div className="footer-links">

          <div className="footer-column">
            <h5>Products</h5>
            <ul>
              <li>AI Chat Bots</li>
              <li>AI Call Bots</li>
              <li>Voice Assistants</li>
              <li>Automation Solutions</li>
            </ul>
          </div>

          <div className="footer-column">
            <h5>Industries</h5>
            <ul>
              <li>Call Centers</li>
              <li>E-commerce</li>
              <li>Healthcare</li>
              <li>Real Estate</li>
              <li>Logistics</li>
            </ul>
          </div>

          <div className="footer-column">
            <h5>Company</h5>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="footer-column">
            <h5>Resources</h5>
            <ul>
              <li>Documentation</li>
              <li>API Reference</li>
              <li>Support</li>
              <li>Security</li>
            </ul>
          </div>

          <div className="footer-column">
            <h5>Legal</h5>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Compliance</li>
            </ul>
          </div>

        </div>

        <hr className="footer-divider" />

        {/* =========================
            BOTTOM COPYRIGHT
        ========================= */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} AI Bot Solutions. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
