import { useNavigate } from "react-router-dom";
import "./SectionGallery.css";
import noel from "../assets/noel-kyniem.jpg";
import hocbai from "../assets/hocbai-kyniem.jpg";
import totnghiep from "../assets/totnghiep-kyniem.jpg";
import badongnen from "../assets/badong-nen.jpg";
import date from "../assets/date.jpg";


function SectionGallery() {
    const navigate = useNavigate();

    const handleClick = (type, id) => {
        navigate(`/gallery/${type}/${id}`);
    };

    return (
        <section id="gallery" className="section gallery-section">
            <h2>
                Kỷ niệm đáng nhớ <br />👇
            </h2>

            <div className="gallery">
                {/* Ảnh */}
                <img
                    src={noel}
                    alt="Memory 1"
                    onClick={() => handleClick("image", 1)}
                />
                <img
                    src={hocbai}
                    alt="Memory 2"
                    onClick={() => handleClick("image", 2)}
                />
                <img
                    src={totnghiep}
                    alt="Memory 3"
                    onClick={() => handleClick("image", 3)}
                />

                {/* Video thumbnails */}
                <img
                    src={badongnen}
                    alt="Memory video 1"
                    onClick={() => handleClick("video", 1)}
                    className="video-thumbnail"
                />
                <img
                    src={date}
                    alt="Memory video 2"
                    onClick={() => handleClick("video", 2)}
                    className="video-thumbnail"
                />
            </div>

            <h3>
                Mỗi bức ảnh, mỗi video là một kỷ niệm, một câu chuyện, một khoảnh khắc đáng nhớ!
            </h3>
        </section>
    );
}

export default SectionGallery;
