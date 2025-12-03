import { useState } from "react";
import "./LoginPage.css";

function LoginPage({ onLoginSuccess }) {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showHint, setShowHint] = useState(false); // ← trạng thái mở card gợi ý

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password === "191223") {
            onLoginSuccess();
        } else {
            setError("Sai mật khẩu rồi, thử lại đi nhe!");
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>💞 Welcome My Love 💞</h2>
                <p>Nhập mật khẩu để khui Sít Rịt</p>

                <form onSubmit={handleSubmit}>
                    <input
                        type="password"
                        placeholder="Nhập mật khẩu..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Vào xem 💖</button>
                </form>

                {error && (
                    <>
                        <p className="error">{error}</p>
                        <button
                            className="hint-button"
                            onClick={() => setShowHint(!showHint)}
                        >
                            Gợi ý nè 💡
                        </button>
                    </>
                )}

                {showHint && (
                    <div className="hint-card">
                        <h3>🔐 Gợi ý mật khẩu</h3>
                        <p>Một ngày rất quan trọng với hai tụi mình 💗</p>
                        <p>(Gồm 6 số nha!)</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default LoginPage;
