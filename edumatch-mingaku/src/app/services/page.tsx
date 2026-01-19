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
import { Search, Filter } from "lucide-react";

const categories = [
  { value: "all", label: "すべて" },
  { value: "learning", label: "学習管理" },
  { value: "communication", label: "コミュニケーション" },
  { value: "assessment", label: "評価・分析" },
  { value: "collaboration", label: "協働学習" },
  { value: "environment", label: "学習環境" },
];

const services = [
  {
    id: 1,
    name: "ClassTech Pro",
    description: "授業管理と学習進捗を一元管理できるプラットフォーム。リアルタイムで生徒の理解度を把握し、個別最適化された学習支援を提供します。",
    category: "learning",
    image: "https://placehold.co/300x200/fef3c7/ca8a04?text=ClassTech+Pro",
    price: "月額 ¥5,000〜",
    rating: 4.8,
    reviews: 125,
  },
  {
    id: 2,
    name: "EduCollabo",
    description: "学校と保護者のコミュニケーションを円滑にするツール。連絡事項の共有、面談予約、学習報告などを簡単に管理できます。",
    category: "communication",
    image: "https://placehold.co/300x200/fed7aa/ea580c?text=EduCollabo",
    price: "月額 ¥3,000〜",
    rating: 4.6,
    reviews: 89,
  },
  {
    id: 3,
    name: "SmartAssess",
    description: "AIを活用した自動採点・分析システム。テストの採点時間を大幅に短縮し、詳細な学習分析レポートを自動生成します。",
    category: "assessment",
    image: "https://placehold.co/300x200/fecaca/dc2626?text=SmartAssess",
    price: "月額 ¥8,000〜",
    rating: 4.9,
    reviews: 156,
  },
  {
    id: 4,
    name: "LearnSpace",
    description: "オンライン・オフライン統合型の学習環境。どこからでもアクセス可能な仮想教室を提供し、教材共有やグループワークをサポートします。",
    category: "environment",
    image: "https://placehold.co/300x200/d9f99d/65a30d?text=LearnSpace",
    price: "月額 ¥6,000〜",
    rating: 4.7,
    reviews: 102,
  },
  {
    id: 5,
    name: "TeamEdu",
    description: "協働学習支援プラットフォーム。生徒同士のグループワークを促進し、プロジェクト管理や進捗共有を簡単に行えます。",
    category: "collaboration",
    image: "https://placehold.co/300x200/bfdbfe/2563eb?text=TeamEdu",
    price: "月額 ¥4,000〜",
    rating: 4.5,
    reviews: 78,
  },
  {
    id: 6,
    name: "EduAnalytics",
    description: "教育データを可視化・分析するツール。学習履歴や成績データから傾向を分析し、効果的な指導方針を提案します。",
    category: "assessment",
    image: "https://placehold.co/300x200/e9d5ff/9333ea?text=EduAnalytics",
    price: "月額 ¥7,000〜",
    rating: 4.8,
    reviews: 94,
  },
];

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredServices = services.filter((service) => {
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">サービス一覧</h1>
        <p className="text-muted-foreground">
          EdTechツールを検索・比較して、最適なサービスを見つけましょう
        </p>
      </div>

      {/* 検索・フィルター */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="サービス名や機能で検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-[200px]">
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
        </div>
        <div className="text-sm text-muted-foreground">
          {filteredServices.length}件のサービスが見つかりました
        </div>
      </div>

      {/* サービス一覧 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <Link key={service.id} href={`/services/${service.id}`}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold line-clamp-1">
                    {service.name}
                  </h3>
                  <Badge variant="secondary">
                    {
                      categories.find((c) => c.value === service.category)
                        ?.label
                    }
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {service.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-primary">
                    {service.price}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">★</span>
                    <span className="font-medium">{service.rating}</span>
                    <span className="text-muted-foreground">
                      ({service.reviews})
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {filteredServices.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            条件に一致するサービスが見つかりませんでした
          </p>
        </div>
      )}
    </div>
  );
}
