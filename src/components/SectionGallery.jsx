import { useNavigate } from "react-router-dom";
import "./SectionGallery.css";
import noel from "../assets/noel-kyniem.jpg";
import hocbai from "../assets/hocbai-kyniem.jpg";
import totnghiep from "../assets/totnghiep-kyniem.jpg";
import badongnen from "../assets/badong-nen.jpg";

function SectionGallery() {
    const navigate = useNavigate();

    const handleClick = (type, id) => {
        navigate(`/gallery/${type}/${id}`);
    };

    return (
        <section id="gallery" className="section gallery-section">
            <h2>
                Một vài kỷ niệm <br />👇
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
                <img
                    src={badongnen}
                    alt="Memory video"
                    onClick={() => handleClick("video", 1)}
                    className="video-thumbnail"
                />
                {/* Video */}
                <video
                    src={badongnen}
                    onClick={() => handleClick("video", 1)}
                    muted
                    autoPlay
                    loop
                />
            </div>

            <p>
                Mỗi bức ảnh, mỗi video là một kỷ niệm, một câu chuyện, và là bằng chứng
                cho tình yêu của chúng ta 💑
            </p>
        </section>
    );
}

export default SectionGallery;
