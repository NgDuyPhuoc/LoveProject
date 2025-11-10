import { useState } from "react";
<<<<<<< HEAD
=======
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"; // icon 3 gạch
import logo from "../assets/logo.jpg";


>>>>>>> a51b743 (update)
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
<<<<<<< HEAD
            setIsOpen(false); // ẩn menu sau khi click
=======
            setIsOpen(false);
>>>>>>> a51b743 (update)
        }
    };

    return (
        <nav className="navbar">
<<<<<<< HEAD
            <h2 className="logo">💞 Our Love</h2>
=======
            <img src={logo} alt="Our Love Logo" className="logo" />

>>>>>>> a51b743 (update)

            <div className={`nav-center ${isOpen ? "open" : ""}`}>
                <ul className="nav-links">
                    <li onClick={() => scrollToSection("home")}>Trang đầu</li>
                    <li onClick={() => scrollToSection("gallery")}>Kỷ niệm</li>
                    <li onClick={() => scrollToSection("ending")}>Kết thúc</li>
                </ul>
            </div>

<<<<<<< HEAD
            <div
                className="hamburger"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div></div>
                <div></div>
                <div></div>
=======
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <FontAwesomeIcon icon={faBars} />
>>>>>>> a51b743 (update)
            </div>
        </nav>
    );
}

export default Navbar;
