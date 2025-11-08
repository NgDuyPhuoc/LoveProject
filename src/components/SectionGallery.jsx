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
            </p>
        </section>
    );
}

export default SectionGallery;
