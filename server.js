const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
app.use(cors());

// 動作確認用
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// プロキシ
app.get("/proxy", async (req, res) => {
  const targetUrl = req.query.url;
  if (!targetUrl) {
    return res.status(400).send("url パラメータが必要です");
  }

  try {
    const response = await fetch(targetUrl);
    const text = await response.text();

    res.set("Content-Type", "text/html; charset=utf-8");
    res.send(text);

  } catch (err) {
    console.error(err);
    res.status(500).send("取得に失敗しました");
  }
});

// Vercel は listen を使わない
module.exports = app;
