export default async function handler(req, res) {
  // Wikipedia のトップページを取得
  const targetUrl = "https://ja.wikipedia.org/wiki/メインページ";

  try {
    const response = await fetch(targetUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0" // bot 拒否対策
      }
    });

    if (!response.ok) {
      return res.status(500).send("取得に失敗しました（レスポンスエラー）");
    }

    const html = await response.text();

    // Wikipedia の HTML をそのまま返す
    res.status(200).send(html);

  } catch (err) {
    res.status(500).send("取得に失敗しました（例外エラー）");
  }
}
