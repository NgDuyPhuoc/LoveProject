import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"; // icon 3 gạch
import logo from "../assets/logo.jpg";

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
            {/* Logo */}
            <img src={logo} alt="Our Love Logo" className="logo" />

            {/* Menu chính */}
            <div className={`nav-center ${isOpen ? "open" : ""}`}>
                <ul className="nav-links">
                    <li onClick={() => scrollToSection("home")}>Mở đầu</li>
                    <li onClick={() => scrollToSection("gallery")}>Kỷ niệm</li>
                    <li onClick={() => scrollToSection("ending")}>Kết thúc</li>
                </ul>
            </div>

            {/* Nút menu 3 gạch */}
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </nav>
    );
}

export default Navbar;
