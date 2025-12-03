import "./SectionHome.css";
import cardImg from "../assets/section-img.jpg";
import bgImg from "../assets/background-section.jpg";

function SectionHome() {
    const startDate = new Date("2023-12-19");
    const today = new Date();
    const diffDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

    return (
        <section
            id="home"
            className="section home-section"
            style={{ backgroundImage: `url(${bgImg})` }}
        >
            <div className="overlay"></div> {/* Lớp mờ trên nền */}
            <div className="card">
                <img src={cardImg} alt="Kỷ niệm" className="card-image" />
            </div>

            <div className="text-content">
                <h1>💞 Gửi em 💞</h1>
                <h2>
                    Hôm nay là ngày thứ <br />
                    <span className="highlight-days">{diffDays}</span>
                    <br />
                    bên nhau 💕
                </h2>
                <p>
                    Hai năm đã trôi qua kể từ ngày yêu nhau, và em đã khiến anh thay đổi
                    theo hướng tích cực hơn rất nhiều. Trước khi gặp em, anh chỉ là một
                    cậu học sinh trung bình khá. Nhưng từ khi thích em, từ khi nhận ra em
                    là một cô gái siêng năng và học giỏi, anh bắt đầu tự nhìn lại bản thân,
                    nỗ lực không ngừng để xứng đáng với em. Cuối năm lớp 12, anh được công
                    nhận là học sinh giỏi và tốt nghiệp với loại giỏi, điều mà trước đây ở
                    cấp 2, cấp 3 anh chưa từng nghĩ mình làm được. Và giờ đây, anh là một
                    sinh viên năm 2 ngành Công nghệ Thông tin, học tập cũng không đến nỗi
                    tệ. Cảm ơn em đã đến bên anh, khiến anh trở nên tốt hơn và hoàn thiện
                    hơn từng ngày.
                </p>
            </div>
        </section>
    );
}

export default SectionHome;
