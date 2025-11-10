<<<<<<< HEAD
import "./SectionGallery.css";

function SectionGallery() {
    return (
        <section id="gallery" className="section gallery-section">
            <h2>📷 Những kỷ niệm đáng nhớ</h2>
            <div className="gallery">
                <img src="/love1.jpg" alt="Memory 1" />
                <img src="/love2.jpg" alt="Memory 2" />
                <img src="/love3.jpg" alt="Memory 3" />
            </div>
            <p>
                Mỗi bức ảnh là một kỷ niệm, một câu chuyện, và là bằng chứng cho tình
                yêu của chúng ta 💑
=======
import { useNavigate } from "react-router-dom";
import "./SectionGallery.css";
import noel from "../assets/noel-kyniem.jpg"

function SectionGallery() {
    const navigate = useNavigate();

    const handleClick = (type, id) => {
        navigate(`/gallery/${type}/${id}`);
    };

    return (
        <section id="gallery" className="section gallery-section">
            <h2>
                Kỷ niệm <br /> của chúng mình <br />👇
            </h2>

            <div className="gallery">
                {/* Ảnh */}
                <img
                    src={noel}
                    alt="Memory 1"
                    onClick={() => handleClick("image", 1)}
                />
                <img
                    src="/love2.jpg"
                    alt="Memory 2"
                    onClick={() => handleClick("image", 2)}
                />

                {/* Video */}
                <video
                    src="/lovevideo1.mp4"
                    onClick={() => handleClick("video", 1)}
                    muted
                    autoPlay
                    loop
                />
            </div>

            <p>
                Mỗi bức ảnh, mỗi video là một kỷ niệm, một câu chuyện, và là bằng chứng
                cho tình yêu của chúng ta 💑
>>>>>>> a51b743 (update)
            </p>
        </section>
    );
}

export default SectionGallery;
