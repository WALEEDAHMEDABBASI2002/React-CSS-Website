import { useNavigate } from "react-router-dom";
import "../css/FloatingContactButton.css";

export default function FloatingContactButton() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/contact");
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button className="floating-contact-btn" onClick={handleClick}>
            <span>💬</span> Contact Us
        </button>
    );
}
