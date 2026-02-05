# データベースマイグレーションガイド

## 概要

お気に入り数・資料請求リスト数ベースの人気順おすすめ機能を実装しました。

## 追加されたフィールド

### Serviceテーブル
- `view_count` (Int, default: 0) - 閲覧数
- `favorite_count` (Int, default: 0) - お気に入り数
- `request_count` (Int, default: 0) - 資料請求リスト追加数

### Postテーブル
- `favorite_count` (Int, default: 0) - お気に入り数
- `view_count`は既存（変更なし）

## マイグレーション手順（本番環境）

### 1. Supabaseでマイグレーションを実行

Supabaseのダッシュボード → SQL Editor で以下を実行：

```sql
-- Serviceテーブルに人気度カウントを追加
ALTER TABLE "Service"
ADD COLUMN IF NOT EXISTS "view_count" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN IF NOT EXISTS "favorite_count" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN IF NOT EXISTS "request_count" INTEGER NOT NULL DEFAULT 0;

-- Postテーブルにお気に入りカウントを追加
ALTER TABLE "Post"
ADD COLUMN IF NOT EXISTS "favorite_count" INTEGER NOT NULL DEFAULT 0;

-- インデックスを追加（パフォーマンス向上）
CREATE INDEX IF NOT EXISTS "Service_favorite_count_idx" ON "Service"("favorite_count");
CREATE INDEX IF NOT EXISTS "Service_request_count_idx" ON "Service"("request_count");
CREATE INDEX IF NOT EXISTS "Post_favorite_count_idx" ON "Post"("favorite_count");
```

### 2. マイグレーションの確認

以下のSQLで確認：

```sql
-- Serviceテーブルの新しいカラムを確認
SELECT column_name, data_type, column_default
FROM information_schema.columns
WHERE table_name = 'Service'
AND column_name IN ('view_count', 'favorite_count', 'request_count');

-- Postテーブルの新しいカラムを確認
SELECT column_name, data_type, column_default
FROM information_schema.columns
WHERE table_name = 'Post'
AND column_name = 'favorite_count';
```

### 3. Vercelで再デプロイ

環境変数は既に設定済みなので、再デプロイのみ：

1. Vercel → Deployments → 最新のデプロイ → ... → **Redeploy**

## 機能の仕組み

1. **カウント更新**:
   - ユーザーがお気に入りボタンをクリック → サーバー側で`favorite_count`を更新
   - ユーザーが資料請求リストに追加 → サーバー側で`request_count`を更新

2. **人気順表示**:
   - マイページの「人気のコンテンツ」セクションで表示
   - サービス: `favorite_count + request_count`の合計でソート
   - 記事: `favorite_count`でソート

3. **パフォーマンス**:
   - インデックスを追加しているため、人気順ソートが高速
   - 既存のデータは全て0からスタート

## 注意事項

- 既存のデータは全て`favorite_count`と`request_count`が0からスタートします
- ユーザーの操作により、徐々にカウントが増えていきます
- 開発環境では、DEMO_DATAに仮のカウントが設定されています

## トラブルシューティング

### エラー: column "favorite_count" does not exist

マイグレーションSQLが実行されていません。上記の手順1を実行してください。

### おすすめが表示されない

- データベースに公開済みのコンテンツがあるか確認
- カウントがすべて0の場合、順序は作成日順になります
- ユーザーが操作することでカウントが増えていきます
