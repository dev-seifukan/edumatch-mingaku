import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Star, ExternalLink, Check, X } from "lucide-react";

// ダミーデータ（実際にはAPIやデータベースから取得）
const services: Record<
  string,
  {
    id: number;
    name: string;
    description: string;
    fullDescription: string;
    image: string;
    category: string;
    price: string;
    rating: number;
    reviews: number;
    features: string[];
    pros: string[];
    cons: string[];
    website: string;
    company: string;
  }
> = {
  "1": {
    id: 1,
    name: "ClassTech Pro",
    description:
      "授業管理と学習進捗を一元管理できるプラットフォーム。リアルタイムで生徒の理解度を把握し、個別最適化された学習支援を提供します。",
    fullDescription: `
ClassTech Proは、教育現場のデジタル変革を支援する総合的な学習管理プラットフォームです。

## 主な機能

### 授業管理
- 授業計画の作成・共有
- 教材の一元管理
- 出席管理の自動化

### 学習進捗管理
- リアルタイムでの学習状況の可視化
- 個別の学習レポート自動生成
- 保護者への進捗共有

### 評価・分析
- 自動採点機能
- 詳細な学習分析レポート
- データドリブンな指導方針の提案

## 導入事例

全国500校以上の学校で導入されており、学習効率の向上と業務の効率化を実現しています。
    `,
    image: "https://placehold.co/800x450/fef3c7/ca8a04?text=ClassTech+Pro",
    category: "学習管理",
    price: "月額 ¥5,000〜",
    rating: 4.8,
    reviews: 125,
    features: [
      "授業計画の作成・共有",
      "学習進捗の可視化",
      "自動採点機能",
      "保護者への進捗共有",
      "詳細な分析レポート",
    ],
    pros: [
      "直感的なUIで使いやすい",
      "豊富な機能",
      "充実したサポート体制",
    ],
    cons: [
      "初期設定に時間がかかる",
      "高機能な分、価格がやや高め",
    ],
    website: "https://example.com/classtech",
    company: "ClassTech株式会社",
  },
  "2": {
    id: 2,
    name: "EduCollabo",
    description:
      "学校と保護者のコミュニケーションを円滑にするツール。連絡事項の共有、面談予約、学習報告などを簡単に管理できます。",
    fullDescription: `
EduCollaboは、学校と保護者をつなぐコミュニケーションツールです。

## 主な機能

### 連絡事項の共有
- 一斉メッセージ配信
- 個別メッセージ機能
- 既読確認

### 面談管理
- オンライン面談予約
- 面談記録の管理
- カレンダー連携

### 学習報告
- 定期的な学習レポートの自動送信
- 写真や動画の共有
- 保護者からのフィードバック受付
    `,
    image: "https://placehold.co/800x450/fed7aa/ea580c?text=EduCollabo",
    category: "コミュニケーション",
    price: "月額 ¥3,000〜",
    rating: 4.6,
    reviews: 89,
    features: [
      "一斉メッセージ配信",
      "面談予約システム",
      "学習レポート自動送信",
      "写真・動画共有",
    ],
    pros: [
      "シンプルで使いやすい",
      "保護者からの評判が良い",
      "価格が手頃",
    ],
    cons: [
      "機能がシンプル",
      "高度なカスタマイズは不可",
    ],
    website: "https://example.com/educollabo",
    company: "EduCollabo株式会社",
  },
  "3": {
    id: 3,
    name: "SmartAssess",
    description:
      "AIを活用した自動採点・分析システム。テストの採点時間を大幅に短縮し、詳細な学習分析レポートを自動生成します。",
    fullDescription: `
SmartAssessは、AI技術を活用した次世代の評価・分析システムです。

## 主な機能

### AI自動採点
- 記述式問題の自動採点
- 複数選択式問題の自動処理
- 採点結果の即時フィードバック

### 学習分析
- 詳細な学習レポートの自動生成
- 弱点分析と改善提案
- クラス全体の傾向分析

### データ可視化
- わかりやすいグラフ表示
- 時系列での学習推移
- 保護者向けレポート
    `,
    image: "https://placehold.co/800x450/fecaca/dc2626?text=SmartAssess",
    category: "評価・分析",
    price: "月額 ¥8,000〜",
    rating: 4.9,
    reviews: 156,
    features: [
      "AI自動採点",
      "詳細な学習分析",
      "データ可視化",
      "保護者向けレポート",
    ],
    pros: [
      "採点時間の大幅短縮",
      "高精度なAI分析",
      "充実したレポート機能",
    ],
    cons: [
      "価格がやや高め",
      "AIの精度に依存",
    ],
    website: "https://example.com/smartassess",
    company: "SmartAssess株式会社",
  },
};

export default function ServiceDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const service = services[params.id];

  if (!service) {
    return (
      <div className="container py-8">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-4">サービスが見つかりません</h1>
          <Button asChild>
            <Link href="/services">サービス一覧に戻る</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <div className="mb-6">
        <Button variant="ghost" asChild>
          <Link href="/services">
            <ArrowLeft className="h-4 w-4 mr-2" />
            サービス一覧に戻る
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* メインコンテンツ */}
        <div className="lg:col-span-2 space-y-6">
          {/* ヘッダー */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary">{service.category}</Badge>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{service.rating}</span>
                <span className="text-sm text-muted-foreground">
                  ({service.reviews}件のレビュー)
                </span>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {service.name}
            </h1>
            <p className="text-lg text-muted-foreground">
              {service.description}
            </p>
          </div>

          {/* メイン画像 */}
          <div className="relative h-96 w-full rounded-lg overflow-hidden">
            <Image
              src={service.image}
              alt={service.name}
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* 詳細説明 */}
          <Card>
            <CardHeader>
              <CardTitle>サービス詳細</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="whitespace-pre-wrap text-foreground leading-relaxed">
                {service.fullDescription}
              </div>
            </CardContent>
          </Card>

          {/* 主な機能 */}
          <Card>
            <CardHeader>
              <CardTitle>主な機能</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* メリット・デメリット */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  メリット
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.pros.map((pro, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <X className="h-5 w-5 text-red-500" />
                  注意点
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.cons.map((con, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-red-500">×</span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* サイドバー */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>料金</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary mb-4">
                {service.price}
              </p>
              <Button asChild className="w-full" size="lg">
                <Link href={service.website} target="_blank">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  公式サイトへ
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>提供企業</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold mb-2">{service.company}</p>
              <Button asChild variant="outline" className="w-full">
                <Link href={service.website} target="_blank">
                  企業情報を見る
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>評価</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 mb-2">
                <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                <span className="text-2xl font-bold">{service.rating}</span>
                <span className="text-muted-foreground">
                  / 5.0 ({service.reviews}件)
                </span>
              </div>
              <Button variant="outline" className="w-full">
                レビューを見る
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
