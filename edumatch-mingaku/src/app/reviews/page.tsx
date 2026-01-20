"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Star, ThumbsUp, MessageSquare, Filter } from "lucide-react";

const categories = [
  { value: "all", label: "すべて" },
  { value: "learning", label: "学習管理" },
  { value: "communication", label: "コミュニケーション" },
  { value: "assessment", label: "評価・分析" },
  { value: "collaboration", label: "協働学習" },
];

const sortOptions = [
  { value: "newest", label: "新着順" },
  { value: "rating-high", label: "評価が高い順" },
  { value: "rating-low", label: "評価が低い順" },
  { value: "helpful", label: "参考になった順" },
];

const reviews = [
  {
    id: 1,
    serviceName: "ClassTech Pro",
    serviceImage: "https://placehold.co/100x100/fef3c7/ca8a04?text=CT",
    category: "learning",
    rating: 5,
    title: "導入して本当に良かった！業務効率が大幅に改善",
    content:
      "授業の準備から生徒の進捗管理まで、すべてが一元化されて非常に便利です。特に学習分析機能が素晴らしく、個々の生徒に合わせた指導ができるようになりました。導入当初は操作に慣れるまで時間がかかりましたが、サポートも手厚く安心でした。",
    author: "教育関係者A",
    organization: "○○中学校",
    date: "2024-01-12",
    helpful: 45,
    replies: 3,
  },
  {
    id: 2,
    serviceName: "EduCollabo",
    serviceImage: "https://placehold.co/100x100/fed7aa/ea580c?text=EC",
    category: "communication",
    rating: 4,
    title: "保護者との連絡が格段にスムーズになりました",
    content:
      "以前は電話やプリントでの連絡が主でしたが、このツールを導入してから保護者との連絡が非常にスムーズになりました。既読確認ができるのも安心です。ただ、年配の保護者にはアプリの使い方を説明する必要がありました。",
    author: "教育関係者B",
    organization: "△△小学校",
    date: "2024-01-10",
    helpful: 32,
    replies: 5,
  },
  {
    id: 3,
    serviceName: "SmartAssess",
    serviceImage: "https://placehold.co/100x100/fecaca/dc2626?text=SA",
    category: "assessment",
    rating: 5,
    title: "採点時間が半分以下に！AI機能が優秀",
    content:
      "記述式問題の採点が本当に楽になりました。AIの採点精度も高く、微調整だけで済むことがほとんどです。学習分析レポートも保護者面談で大活躍しています。価格は高めですが、それ以上の価値があります。",
    author: "教育関係者C",
    organization: "□□高校",
    date: "2024-01-08",
    helpful: 67,
    replies: 8,
  },
  {
    id: 4,
    serviceName: "LearnSpace",
    serviceImage: "https://placehold.co/100x100/d9f99d/65a30d?text=LS",
    category: "learning",
    rating: 3,
    title: "機能は良いが、たまに動作が重い",
    content:
      "オンライン授業と対面授業のハイブリッド運用に便利です。教材共有やグループワーク機能も充実しています。ただ、アクセスが集中する時間帯は動作が重くなることがあり、その点は改善を期待しています。",
    author: "教育関係者D",
    organization: "◇◇大学",
    date: "2024-01-05",
    helpful: 28,
    replies: 2,
  },
  {
    id: 5,
    serviceName: "TeamEdu",
    serviceImage: "https://placehold.co/100x100/bfdbfe/2563eb?text=TE",
    category: "collaboration",
    rating: 4,
    title: "グループワークの管理が楽になりました",
    content:
      "生徒同士のプロジェクト管理に非常に役立っています。進捗の可視化ができるので、遅れているグループへのフォローもしやすくなりました。UIがシンプルで生徒も使いやすいようです。",
    author: "教育関係者E",
    organization: "☆☆高校",
    date: "2024-01-03",
    helpful: 19,
    replies: 1,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  const filteredReviews = reviews
    .filter((review) => {
      const matchesSearch =
        review.serviceName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        review.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        review.content.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || review.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "rating-high":
          return b.rating - a.rating;
        case "rating-low":
          return a.rating - b.rating;
        case "helpful":
          return b.helpful - a.helpful;
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">レビュー一覧</h1>
        <p className="text-muted-foreground">
          実際に利用した教育関係者によるリアルな評価とレビュー
        </p>
      </div>

      {/* 検索・フィルター */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="サービス名やキーワードで検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="カテゴリ" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="並び替え" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {filteredReviews.length}件のレビューが見つかりました
          </p>
          <Button asChild>
            <Link href="/reviews/write">レビューを投稿する</Link>
          </Button>
        </div>
      </div>

      {/* レビュー一覧 */}
      <div className="space-y-4">
        {filteredReviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="p-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Image
                    src={review.serviceImage}
                    alt={review.serviceName}
                    width={64}
                    height={64}
                    className="rounded-lg"
                    unoptimized
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Link
                      href={`/services/${review.id}`}
                      className="font-semibold hover:text-primary transition-colors"
                    >
                      {review.serviceName}
                    </Link>
                    <Badge variant="secondary">
                      {categories.find((c) => c.value === review.category)?.label}
                    </Badge>
                    <StarRating rating={review.rating} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{review.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {review.content}
                  </p>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{review.author}</span>
                      <span>{review.organization}</span>
                      <span>{new Date(review.date).toLocaleDateString("ja-JP")}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <ThumbsUp className="h-4 w-4" />
                        参考になった ({review.helpful})
                      </button>
                      <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <MessageSquare className="h-4 w-4" />
                        返信 ({review.replies})
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredReviews.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            条件に一致するレビューが見つかりませんでした
          </p>
        </div>
      )}
    </div>
  );
}
