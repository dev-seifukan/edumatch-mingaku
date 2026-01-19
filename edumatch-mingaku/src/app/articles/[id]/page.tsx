import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Tag, ArrowLeft, Share2 } from "lucide-react";

// ダミーデータ（実際にはAPIやデータベースから取得）
const articles: Record<
  string,
  {
    id: number;
    title: string;
    content: string;
    image: string;
    category: string;
    date: string;
    tags: string[];
    author: string;
  }
> = {
  "1": {
    id: 1,
    title: "EdTechツール選びの完全ガイド",
    content: `
# EdTechツール選びの完全ガイド

教育現場でEdTechツールを導入する際、数多くの選択肢から最適なものを選ぶのは簡単ではありません。本記事では、実践的な選び方のポイントを解説します。

## 1. 導入目的を明確にする

まず、なぜEdTechツールを導入するのか、その目的を明確にすることが重要です。

- 学習管理の効率化
- 保護者とのコミュニケーション改善
- データ分析による教育改善
- 業務の自動化

目的が明確になれば、必要な機能も自然と見えてきます。

## 2. 予算とコストを検討する

EdTechツールには、初期費用や月額費用がかかります。予算を事前に決めておくことで、選択肢を絞り込めます。

### コストの内訳

- 初期導入費用
- 月額・年額の利用料
- 追加機能のオプション費用
- サポート費用
- 研修・トレーニング費用

## 3. 機能と使いやすさを比較する

同じカテゴリのツールでも、機能や使いやすさは大きく異なります。

### チェックポイント

- 必要な機能が揃っているか
- 直感的に使えるUIか
- モバイル対応しているか
- 既存システムとの連携は可能か

## 4. サポート体制を確認する

導入後のサポート体制も重要なポイントです。

- 問い合わせ対応の方法
- サポートの対応時間
- マニュアルやドキュメントの充実度
- コミュニティやフォーラムの有無

## 5. 無料トライアルを活用する

多くのEdTechツールは無料トライアルを提供しています。実際に使ってみることで、使いやすさや機能を確認できます。

## まとめ

EdTechツール選びは、目的の明確化から始まり、予算・機能・サポート体制を総合的に判断することが重要です。無料トライアルを積極的に活用し、実際の使用感を確認してから導入を決めることをおすすめします。
    `,
    image: "https://placehold.co/800x450/fef3c7/ca8a04?text=Article+1",
    category: "教育ICT",
    date: "2024-01-15",
    tags: ["EdTech", "選び方", "導入"],
    author: "Edumatch編集部",
  },
  "2": {
    id: 2,
    title: "学校DX推進のためのステップ",
    content: `
# 学校DX推進のためのステップ

デジタル変革（DX）は、教育現場でも重要なテーマとなっています。本記事では、学校DXを成功させるための具体的なステップを解説します。

## ステップ1: 現状分析

まず、現在の業務プロセスや課題を整理します。

## ステップ2: 目標設定

DXによって実現したい目標を明確にします。

## ステップ3: ツール選定

目標達成に必要なツールを選定します。

## ステップ4: 段階的導入

一度にすべてを変えるのではなく、段階的に導入を進めます。

## ステップ5: 効果測定

導入後の効果を測定し、改善を続けます。
    `,
    image: "https://placehold.co/800x450/fed7aa/ea580c?text=Article+2",
    category: "導入事例",
    date: "2024-01-15",
    tags: ["DX", "導入事例", "変革"],
    author: "Edumatch編集部",
  },
};

export default function ArticleDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const article = articles[params.id];

  if (!article) {
    return (
      <div className="container py-8">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-4">記事が見つかりません</h1>
          <Button asChild>
            <Link href="/articles">記事一覧に戻る</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <div className="mb-6">
        <Button variant="ghost" asChild>
          <Link href="/articles">
            <ArrowLeft className="h-4 w-4 mr-2" />
            記事一覧に戻る
          </Link>
        </Button>
      </div>

      <article className="max-w-4xl mx-auto">
        {/* ヘッダー */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary">{article.category}</Badge>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {new Date(article.date).toLocaleDateString("ja-JP")}
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {article.title}
          </h1>
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              執筆者: {article.author}
            </p>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              共有
            </Button>
          </div>
        </div>

        {/* メイン画像 */}
        <div className="relative h-96 w-full mb-8 rounded-lg overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        {/* タグ */}
        <div className="flex flex-wrap gap-2 mb-8">
          {article.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="flex items-center gap-1">
              <Tag className="h-3 w-3" />
              {tag}
            </Badge>
          ))}
        </div>

        {/* 本文 */}
        <div className="prose prose-slate max-w-none mb-8">
          <div className="whitespace-pre-wrap text-foreground leading-relaxed">
            {article.content}
          </div>
        </div>

        {/* 関連記事 */}
        <Card className="mt-12">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">関連記事</h2>
            <div className="space-y-4">
              {Object.values(articles)
                .filter((a) => a.id !== article.id)
                .slice(0, 3)
                .map((relatedArticle) => (
                  <Link
                    key={relatedArticle.id}
                    href={`/articles/${relatedArticle.id}`}
                    className="block p-4 border rounded-lg hover:bg-muted transition-colors"
                  >
                    <h3 className="font-semibold mb-2">
                      {relatedArticle.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {new Date(relatedArticle.date).toLocaleDateString(
                        "ja-JP"
                      )}
                    </div>
                  </Link>
                ))}
            </div>
          </CardContent>
        </Card>
      </article>
    </div>
  );
}
