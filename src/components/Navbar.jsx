import { useState } from "react";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/dancing-script/400.css";
import "@fontsource/dancing-script/700.css";
import "./Navbar.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false); // ẩn menu sau khi click
        }
    };

    return (
        <nav className="navbar">
            <h2 className="logo">💞 Our Love</h2>

            <div className={`nav-center ${isOpen ? "open" : ""}`}>
                <ul className="nav-links">
                    <li onClick={() => scrollToSection("home")}>Trang đầu</li>
                    <li onClick={() => scrollToSection("gallery")}>Kỷ niệm</li>
                    <li onClick={() => scrollToSection("ending")}>Kết thúc</li>
                </ul>
            </div>

            <div
                className="hamburger"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
}

export default Navbar;
