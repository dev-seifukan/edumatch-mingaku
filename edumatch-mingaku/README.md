This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

### デプロイ手順

1. **GitHubリポジトリにプッシュ**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Vercelにプロジェクトをインポート**
   - [Vercel](https://vercel.com)にアクセス
   - GitHubアカウントでログイン
   - "Add New..." → "Project" をクリック
   - GitHubリポジトリ `dev-seifukan/edumatch-mingaku` を選択
   - "Import" をクリック

3. **環境変数の設定**
   - Vercelのプロジェクト設定画面で "Environment Variables" に移動
   - 以下の環境変数を追加：
     - `NEXT_PUBLIC_SUPABASE_URL` (SupabaseプロジェクトのURL)
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY` (Supabaseの匿名キー)
   - 各環境（Production, Preview, Development）に設定

4. **デプロイ**
   - "Deploy" をクリック
   - ビルドが完了すると自動的にデプロイされます

### 環境変数の設定

`.env.local.example` を参考に、Vercelの環境変数設定画面で以下を設定してください：

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 注意事項

- Vercelは自動的にNext.jsを検出し、最適な設定でビルドします
- `vercel.json` でリージョンを `nrt1` (東京) に設定しています
- 環境変数は `.env.local` ファイルではなく、Vercelのダッシュボードで設定してください

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
