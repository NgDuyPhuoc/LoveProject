import "./SectionHome.css";

function SectionHome() {
    const startDate = new Date("2024-12-19");
    const today = new Date();
    const diffDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

    return (
        <section id="home" className="section home-section">
            <h1></h1>
            <p>Hôm nay là ngày thứ <b>{diffDays}</b> bên nhau kể từ 19/12/2024 💕</p>
            <p>
                Hai năm trôi qua, anh vẫn luôn yêu em như những ngày đầu, cảm ơn em đã
                ở bên và cùng anh đi qua mọi khoảnh khắc 🥰
            </p>
        </section>
    );
}

export default SectionHome;
