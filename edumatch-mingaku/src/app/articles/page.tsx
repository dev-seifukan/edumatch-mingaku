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
import { Search, Calendar, Tag } from "lucide-react";

const categories = [
  { value: "all", label: "すべて" },
  { value: "ict", label: "教育ICT" },
  { value: "case", label: "導入事例" },
  { value: "management", label: "学校運営" },
  { value: "policy", label: "政策・制度" },
];

const articles = [
  {
    id: 1,
    title: "EdTechツール選びの完全ガイド",
    excerpt:
      "数多くのEdTechツールから最適なものを選ぶためのポイントを解説。予算、機能、導入のしやすさなど、実践的な選び方を紹介します。",
    image: "https://placehold.co/400x250/fef3c7/ca8a04?text=Article+1",
    category: "ict",
    date: "2024-01-15",
    tags: ["EdTech", "選び方"],
    isNew: true,
  },
  {
    id: 2,
    title: "学校DX推進のためのステップ",
    excerpt:
      "デジタル変革を成功させるための具体的なステップを解説。導入から運用まで、実践的なノウハウをまとめました。",
    image: "https://placehold.co/400x250/fed7aa/ea580c?text=Article+2",
    category: "case",
    date: "2024-01-15",
    tags: ["DX", "導入事例"],
    isNew: true,
  },
  {
    id: 3,
    title: "保護者とのコミュニケーション改善術",
    excerpt:
      "EdTechツールを活用した保護者との効果的なコミュニケーション方法を紹介。連絡の取り方から情報共有まで、実践例を交えて解説します。",
    image: "https://placehold.co/400x250/fecaca/dc2626?text=Article+3",
    category: "management",
    date: "2024-01-14",
    tags: ["コミュニケーション", "保護者"],
    isNew: false,
  },
  {
    id: 4,
    title: "クラウド活用で実現する働き方改革",
    excerpt:
      "クラウドサービスを活用した学校現場の働き方改革事例を紹介。業務効率化のポイントと導入時の注意点を解説します。",
    image: "https://placehold.co/400x250/d9f99d/65a30d?text=Article+4",
    category: "ict",
    date: "2024-01-14",
    tags: ["クラウド", "働き方改革"],
    isNew: false,
  },
  {
    id: 5,
    title: "データドリブンな教育改善の実践",
    excerpt:
      "データを活用した教育改善の実践例を紹介。学習データの分析から指導方針の改善まで、具体的な取り組みを解説します。",
    image: "https://placehold.co/400x250/bfdbfe/2563eb?text=Article+5",
    category: "case",
    date: "2024-01-14",
    tags: ["データ分析", "教育改善"],
    isNew: false,
  },
  {
    id: 6,
    title: "セキュリティ対策のベストプラクティス",
    excerpt:
      "EdTechツール導入時に必要なセキュリティ対策を解説。情報漏洩を防ぐための具体的な対策方法を紹介します。",
    image: "https://placehold.co/400x250/e9d5ff/9333ea?text=Article+6",
    category: "ict",
    date: "2024-01-13",
    tags: ["セキュリティ", "情報管理"],
    isNew: false,
  },
  {
    id: 7,
    title: "GIGAスクール構想の最新動向",
    excerpt:
      "GIGAスクール構想の最新動向と今後の展望を解説。1人1台端末の活用事例や課題について詳しく紹介します。",
    image: "https://placehold.co/400x250/f0f9ff/0284c7?text=Article+7",
    category: "policy",
    date: "2024-01-13",
    tags: ["GIGAスクール", "政策"],
    isNew: false,
  },
  {
    id: 8,
    title: "オンライン授業の効果的な進め方",
    excerpt:
      "オンライン授業を効果的に進めるためのポイントを解説。授業設計から生徒とのコミュニケーションまで、実践的なノウハウを紹介します。",
    image: "https://placehold.co/400x250/fff7ed/f59e0b?text=Article+8",
    category: "management",
    date: "2024-01-13",
    tags: ["オンライン授業", "授業設計"],
    isNew: false,
  },
];

export default function ArticlesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === "all" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">記事一覧</h1>
        <p className="text-muted-foreground">
          教育現場の最新情報や実践事例をお届けします
        </p>
      </div>

      {/* 検索・フィルター */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="記事を検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-[200px]">
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
        </div>
        <div className="text-sm text-muted-foreground">
          {filteredArticles.length}件の記事が見つかりました
        </div>
      </div>

      {/* 記事一覧 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article) => (
          <Link key={article.id} href={`/articles/${article.id}`}>
            <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
                {article.isNew && (
                  <Badge className="absolute top-3 left-3 bg-[#ef4444] hover:bg-[#dc2626] text-white">
                    NEW
                  </Badge>
                )}
              </div>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {
                      categories.find((c) => c.value === article.category)
                        ?.label
                    }
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {new Date(article.date).toLocaleDateString("ja-JP")}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex flex-wrap gap-1">
                  {article.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-xs flex items-center gap-1"
                    >
                      <Tag className="h-3 w-3" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            条件に一致する記事が見つかりませんでした
          </p>
        </div>
      )}
    </div>
  );
}
