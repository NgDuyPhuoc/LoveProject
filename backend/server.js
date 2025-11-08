import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PASSWORD = "191224";

app.post("/api/login", (req, res) => {
    const { password } = req.body;
    if (password === PASSWORD) {
        return res.json({ success: true });
    }
    res.status(401).json({ success: false, message: "Sai mật khẩu rồi nè 😢" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server đang chạy ở cổng ${PORT}`));
