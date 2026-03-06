import "../css/Footer.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer bg-black">
      <div className="container">

        {/* =========================
            BOTTOM COPYRIGHT
        ========================= */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} All rights reserved by BPOS Digital LLC.</p>
        </div>
      </div>
    </footer>
  );
}
