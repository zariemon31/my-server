export default async function handler(req, res) {
  const targetUrl = "https://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8";

  try {
    const response = await fetch(targetUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0",   // bot 拒否対策
        "Accept-Language": "ja"        // 日本語ページを確実に取得
      }
    });

    if (!response.ok) {
      return res.status(500).send("取得に失敗しました（レスポンスエラー）");
    }

    const html = await response.text();
    res.status(200).send(html);

  } catch (err) {
    res.status(500).send("取得に失敗しました（例外エラー）");
  }
}
