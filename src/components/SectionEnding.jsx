import { useState } from "react";
import "./SectionEnding.css";
import coupleImg from "../assets/ending-img.jpg";
import cardImg from "../assets/endingcard-img.jpg";
import heartImg from "../assets/heart.png";

function SectionEnding() {
    const [openLetter, setOpenLetter] = useState(false);

    return (
        <section className="ending-section">
            {/* CARD ẢNH */}
            <div className="ending-card">
                <img src={coupleImg} alt="Kỷ niệm" />
                <p>
                    Mọi thứ bắt đầu từ những điều rất nhỏ. Từng ngày trôi qua, chúng ta quen với sự có mặt của nhau trong cuộc sống. Không hoàn hảo, không lúc nào cũng vui, nhưng đủ để ở lại và tiếp tục cùng nhau.
                </p>
            </div>

            {/* LÁ THƯ */}
            <div className="love-letter">
                {!openLetter ? (
                    <div
                        className="envelope"
                        onClick={() => setOpenLetter(true)}
                    >
                        <div className="envelope-top"></div>
                        <div className="envelope-body"></div>
                        <p className="click-text">Nhấn để mở thư 💌</p>
                    </div>
                ) : (
                    <div className="paper">
                        <h3>💌 Lá thư gửi em 💌</h3>

                        <img
                            src={cardImg}
                            alt="Hai đứa"
                            className="letter-image"
                        />

                        <img
                            src={heartImg}
                            alt="Heart"
                            className="heart-icon"
                        />

                        <p className="letter-message">
                            Hai năm không phải là quãng thời gian quá dài, nhưng cũng chẳng hề ngắn.
                            Chừng ấy thời gian đã đủ để chúng ta nhìn thấy trọn vẹn những thói quen nhỏ nhặt,
                            những ưu điểm đáng trân trọng và cả những khuyết điểm rất đời của nhau.
                            <br /><br />
                            Chỉ mong rằng trên đoạn đường phía trước, chúng ta vẫn luôn biết cách lắng nghe,
                            thấu hiểu và bao dung cho nhau nhiều hơn. Yêu nhau chậm rãi, bình yên,
                            không cần vội vàng, không cần ồn ào chỉ cần luôn nắm tay nhau thật chặt,
                            cùng nhau lớn lên và đi đến cuối con đường bằng tất cả sự chân thành.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}

export default SectionEnding;