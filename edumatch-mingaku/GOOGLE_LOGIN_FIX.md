# Googleログイン後のリダイレクト修正

## 問題
Googleでログインした後、`localhost refused to connect` となり、本番サイトに戻れない。

## 原因
OAuthのコールバックやリダイレクト先が `localhost` になっていた（本番で `NEXT_PUBLIC_SITE_URL` が未設定の場合に request の origin が期待通りでないことがあるため、コード側で本番URLを明示するように変更）。

## 修正内容
- `getSiteOrigin()` を追加し、**本番では `NEXT_PUBLIC_SITE_URL` を優先**してリダイレクト先を決定するように変更
- Google OAuth 開始時（`/api/auth/google`）の `redirectTo` にこの origin を使用
- コールバック（`/api/auth/callback` および `/auth/callback`）でのリダイレクト先もすべてこの origin を使用

## あなたが行うこと（必須）

### 1. Vercelで環境変数を追加

1. Vercelダッシュボード → プロジェクト → **Settings** → **Environment Variables**
2. 以下を追加：
   - **Name**: `NEXT_PUBLIC_SITE_URL`
   - **Value**: 本番のURL（例: `https://re-edumatchmingaku-demo.vercel.app`）
     - 実際のVercelのドメインに合わせてください
   - **Environment**: Production, Preview, Development すべてにチェック
3. **Save**

### 2. SupabaseのリダイレクトURL設定

1. Supabaseダッシュボード → **Authentication** → **URL Configuration**
2. **Site URL** を本番URLに変更  
   - 例: `https://re-edumatchmingaku-demo.vercel.app`
3. **Redirect URLs** に以下を追加（既にあればそのまま）:
   - `https://[あなたのVercelドメイン]/api/auth/callback`
   - 例: `https://re-edumatchmingaku-demo.vercel.app/api/auth/callback`
4. **Save**

### 3. 再デプロイ

Vercelで **Redeploy** を実行（環境変数を追加したため）。

---

## ローカル開発時

- `.env.local` に `NEXT_PUBLIC_SITE_URL=http://localhost:3000` を設定するか、未設定のまま（未設定の場合は request の origin が使われ、localhost で動作します）
- 開発サーバー（`npm run dev`）を起動した状態で Google ログインを試してください
