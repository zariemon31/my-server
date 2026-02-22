export default async function handler(req, res) {
  const targetUrl = "https://example.com"; // ← まずは絶対に成功するURL

  try {
    const response = await fetch(targetUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0", // ← これが重要（bot拒否対策）
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
