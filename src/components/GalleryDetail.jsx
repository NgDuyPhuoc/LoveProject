import { useParams, useNavigate } from "react-router-dom";
import "./GalleryDetail.css";
import noel from "../assets/noel-kyniem.jpg";

const items = {
    image: [
        {
            id: 1,
            src: noel,
            message: "Khoảnh khắc đầu tiên anh nhìn em và biết rằng tim mình đã lỡ nhịp 💞",
        },
        {
            id: 2,
            src: "/love2.jpg",
            message: "Ngày hôm ấy, nụ cười của em làm anh nhớ mãi không quên ☀️",
        },
    ],
    video: [
        {
            id: 1,
            src: "/lovevideo1.mp4",
            message: "Khoảnh khắc em cười trong video này làm tim anh tan chảy ❤️",
        },
    ],
};

function GalleryDetail() {
    const { type, id } = useParams();
    const navigate = useNavigate();

    const item = items[type]?.find((el) => el.id === Number(id));

    if (!item) return <p>Không tìm thấy nội dung 😢</p>;

    return (
        <div className="gallery-detail">
            {type === "image" ? (
                <img src={item.src} alt={`Memory ${id}`} />
            ) : (
                <video src={item.src} controls autoPlay />
            )}

            <p>{item.message}</p>
            <div>
                <button onClick={() => navigate(-1)} className="back-btn">
                    ⬅ Quay lại
                </button>
            </div>
        </div>
    );
}

export default GalleryDetail;
