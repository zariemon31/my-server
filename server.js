import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(express.json());

// 動作確認用
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// ここが「プロキシ」部分
app.get("/proxy", async (req, res) => {
  const targetUrl = req.query.url;
  if (!targetUrl) {
    return res.status(400).send("url クエリを指定してね");
  }

  try {
    const response = await fetch(targetUrl);
    const text = await response.text();

    // とりあえずそのまま HTML を返す
    res.send(text);
  } catch (err) {
    console.error(err);
    res.status(500).send("取得に失敗したよ");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
