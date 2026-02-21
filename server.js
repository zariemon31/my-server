import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// 動作確認用のルート
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Railway が自動で割り当てるポートを使う
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
