import { useParams, useNavigate } from "react-router-dom";
import "./GalleryDetail.css";
import noel from "../assets/noel-kyniem.jpg";
import hocbai from "../assets/hocbai-kyniem.jpg";
import totnghiep from "../assets/totnghiep-kyniem.jpg";
import badong2 from "../assets/badong2.mp4";
import datevd from "../assets/date-video.mp4";

const items = {
    image: [
        {
            id: 1,
            src: noel,
            message: "Bức này là bữa đầu tiên anh đi chơi Noel với em nè hehe. Lúc đó là anh bắt đầu để ý em rồi nên mới lấy hết can đảm rủ em đi chơi Noel đó. Anh còn nhớ rõ luôn, hôm đó anh lấy 200 ngàn tiền lẻ mà anh để dành (toàn tờ 10k với 5k), rồi 5h30 chiều anh đi bộ từ nhà tới nhà Thịnh để đổi đóng tiền lẻ đó thành hai tờ 100 ngàn, chỉ để có tiền đi chơi với em. Nhớ lại vừa vui vừa mắc cười á, mà tiếc cái là hôm đó không có bắp nướng cho em gặm được =))",
        },
        {
            id: 2,
            src: hocbai,
            message: "Khoảng thời gian này anh nhớ rõ lắm, lúc đó anh đang trong giai đoạn try hard dữ dội luôn, kiểu như quyết tâm thay đổi bản thân vậy đó. Trước đó anh học Toán tệ lắm, nhưng lên lớp 12 thì như con nhộng cố phá kén để trở thành phiên bản tốt hơn của chính mình. May sao em lúc đó cũng hơi khớp với môn Toán, nên anh có dịp được chỉ bài cho em, rồi tiện thể giảng thêm vài ngữ pháp Tiếng Anh nữa hehe. Anh còn nhớ hôm đó anh cúp tiết học thêm Lý để vô quán cà phê học với em, cảm giác nó vừa ngây ngô, vừa dễ thương. Kết quả từ sự nỗ lực của bản thân cộng với 1 phần do may mắn mà điểm Toán tốt nghiệp của anh được 8.3 tự hào khoe với ba mẹ điểm toán của con được top 3 ở trường",
        },
        {
            id: 3,
            src: totnghiep,
            message: "Nếu được dùng hai từ để nói về tình yêu của chúng mình, thì anh sẽ chọn “Thanh Xuân”. Vì anh gặp em vào năm 17 tuổi, cái tuổi đẹp nhất, hồn nhiên nhất của tình yêu. Ở tuổi đó, mọi thứ đều giản đơn, không toan tính, không phức tạp, chỉ cần một ánh mắt, một nụ cười hay một khoảnh khắc thoáng qua thôi cũng đủ khiến trái tim cả hai đều rung động"
        },
    ],
    video: [
        {
            id: 1,
            src: badong2,
            message: "Nhớ những lần 2-3 giờ sáng, anh chạy xe qua trọ đón em, rồi hai đứa long nhong mấy chục cây số chỉ để ngắm bình minh trên biển Ba Động.",
        },
        {
            id: 2,
            src: datevd,
            message: `Nhanh thật, vừa mới đón kỷ niệm 1 năm mà giờ đã sắp chuẩn bị đón kỷ niệm 2 năm bên nhau. Một năm trôi qua thật nhanh..
I HOPE WE HAVE MANY MORE HAPPY YEARS TOGETHER.`,
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
                <video src={item.src} controls />
            )}

            {/* Sử dụng white-space: pre-line để xuống dòng */}
            <p style={{ whiteSpace: "pre-line" }}>{item.message}</p>

            <div>
                <button onClick={() => navigate(-1)} className="back-btn">
                    Quay lại
                </button>
            </div>
        </div>
    );
}

export default GalleryDetail;
