/**
 * アプリのベースURL（本番ではNEXT_PUBLIC_SITE_URLを使用）
 * Vercel等でGoogle OAuth後にlocalhostへリダイレクトされる問題を防ぐ
 */
export function getSiteOrigin(requestOrigin?: string): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (envUrl) {
    try {
      const url = new URL(envUrl);
      return url.origin;
    } catch {
      // 不正なURLの場合はrequestOriginを使用
    }
  }
  return requestOrigin || "http://localhost:3000";
}
