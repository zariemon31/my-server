import express from "express";
import fetch from "node-fetch";

const app = express();

app.get("/", async (req, res) => {
  const url = req.query.url;
  if (!url) return res.send("URL が必要です");

  const response = await fetch(url);
  const html = await response.text();

  res.send(html);
});

app.listen(8080, () => console.log("Server running"));
