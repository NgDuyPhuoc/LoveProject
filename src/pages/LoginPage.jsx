import { useState } from "react";
import "./LoginPage.css";

function LoginPage({ onLoginSuccess }) {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
<<<<<<< HEAD
        if (password === "191224") {
=======
        if (password === "191223") {
>>>>>>> a51b743 (update)
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
                {error && <p className="error">{error}</p>}
            </div>
        </div>
    );
}

export default LoginPage;
