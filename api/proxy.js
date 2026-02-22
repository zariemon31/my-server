export default async function handler(req, res) {
  // まずは確実に取得できる example.com を使う
  const targetUrl = "https://example.com";

  try {
    const response = await fetch(targetUrl);

    // fetch が失敗した場合
    if (!response.ok) {
      return res.status(500).send("取得に失敗しました（レスポンスエラー）");
    }

    const html = await response.text();

    // HTML をそのまま返す
    res.status(200).send(html);

  } catch (err) {
    // fetch 自体が失敗した場合
    res.status(500).send("取得に失敗しました（例外エラー）");
  }
}
