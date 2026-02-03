# Vercelデプロイ設定ガイド

## 必須環境変数

Vercelのプロジェクト設定で以下の環境変数を設定してください：

### 1. データベース (Supabase)
```
DATABASE_URL=postgresql://[YOUR_SUPABASE_CONNECTION_STRING]
DIRECT_URL=postgresql://[YOUR_SUPABASE_DIRECT_CONNECTION_STRING]
```

### 2. Supabase認証
```
NEXT_PUBLIC_SUPABASE_URL=https://[YOUR_PROJECT].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[YOUR_ANON_KEY]
SUPABASE_SERVICE_ROLE_KEY=[YOUR_SERVICE_ROLE_KEY]
```

### 3. メール送信 (Resend)
```
RESEND_API_KEY=[YOUR_RESEND_API_KEY]
```

### 4. その他
```
NEXT_PUBLIC_SITE_URL=https://[YOUR_VERCEL_URL].vercel.app
```

## Vercel設定手順

1. **Vercelダッシュボードにアクセス**
   - https://vercel.com/dashboard にアクセス
   - プロジェクトを選択

2. **環境変数の設定**
   - Settings → Environment Variables に移動
   - 上記の環境変数を全て追加
   - Environment: Production, Preview, Development すべてにチェック

3. **ビルド設定の確認**
   - Settings → General に移動
   - Build & Development Settings:
     - Framework Preset: Next.js
     - Build Command: `npm run build` (デフォルトのまま)
     - Output Directory: `.next` (デフォルトのまま)
     - Install Command: `npm install` (デフォルトのまま)

4. **再デプロイ**
   - Deployments タブに移動
   - 最新のデプロイの右側の「...」メニューから「Redeploy」を選択

## トラブルシューティング

### エラー: "Can't reach database server"
- `DATABASE_URL` と `DIRECT_URL` が正しく設定されているか確認
- Supabaseで接続プーリングが有効になっているか確認

### エラー: "Prisma Client could not be found"
- `postinstall` スクリプトが実行されているか確認
- ビルドログで `prisma generate` が実行されているか確認

### エラー: Build timeout
- Vercel の Free プランの場合、ビルド時間が制限されています
- 不要な依存関係を削除することを検討

## 現在のビルドスクリプト

```json
{
  "scripts": {
    "build": "prisma generate && next build",
    "postinstall": "prisma generate"
  }
}
```

これにより、デプロイ時に自動的にPrisma Clientが生成されます。
