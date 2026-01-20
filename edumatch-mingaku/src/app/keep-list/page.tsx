"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
import {
  Bookmark,
  Trash2,
  ExternalLink,
  Star,
  Calendar,
  Filter,
} from "lucide-react";

const categories = [
  { value: "all", label: "すべて" },
  { value: "service", label: "サービス" },
  { value: "article", label: "記事" },
];

const statuses = [
  { value: "all", label: "すべてのステータス" },
  { value: "considering", label: "検討中" },
  { value: "requested", label: "資料請求済" },
  { value: "none", label: "未設定" },
];

const keepItems = [
  {
    id: 1,
    title: "ClassTech Pro",
    type: "service",
    image: "https://placehold.co/200x120/fef3c7/ca8a04?text=ClassTech",
    description: "授業管理と学習進捗を一元管理できるプラットフォーム",
    rating: 4.8,
    status: "considering",
    addedDate: "2024-01-10",
    category: "学習管理",
  },
  {
    id: 2,
    title: "EduCollabo",
    type: "service",
    image: "https://placehold.co/200x120/fed7aa/ea580c?text=EduCollabo",
    description: "学校と保護者のコミュニケーションを円滑にするツール",
    rating: 4.6,
    status: "requested",
    addedDate: "2024-01-08",
    category: "コミュニケーション",
  },
  {
    id: 3,
    title: "EdTechツール選びの完全ガイド",
    type: "article",
    image: "https://placehold.co/200x120/e2e8f0/334155?text=Article",
    description: "数多くのEdTechツールから最適なものを選ぶためのポイントを解説",
    rating: null,
    status: "none",
    addedDate: "2024-01-07",
    category: "教育ICT",
  },
  {
    id: 4,
    title: "SmartAssess",
    type: "service",
    image: "https://placehold.co/200x120/fecaca/dc2626?text=SmartAssess",
    description: "AIを活用した自動採点・分析システム",
    rating: 4.9,
    status: "considering",
    addedDate: "2024-01-05",
    category: "評価・分析",
  },
  {
    id: 5,
    title: "学校DX推進のためのステップ",
    type: "article",
    image: "https://placehold.co/200x120/d9f99d/65a30d?text=Article",
    description: "デジタル変革を成功させるための具体的なステップを解説",
    rating: null,
    status: "none",
    addedDate: "2024-01-03",
    category: "導入事例",
  },
];

export default function KeepListPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const filteredItems = keepItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.type === selectedCategory;
    const matchesStatus =
      selectedStatus === "all" || item.status === selectedStatus;
    return matchesCategory && matchesStatus;
  });

  const getStatusLabel = (status: string) => {
    return statuses.find((s) => s.value === status)?.label || status;
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "requested":
        return "default";
      case "considering":
        return "secondary";
      default:
        return "outline";
    }
  };

  return (
    <div className="container py-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Bookmark className="h-6 w-6 text-primary" />
          <h1 className="text-3xl font-bold">キープリスト</h1>
        </div>
        <p className="text-muted-foreground">
          気になるサービスや記事を保存して管理
        </p>
      </div>

      {/* フィルター */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
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
        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="ステータス" />
          </SelectTrigger>
          <SelectContent>
            {statuses.map((status) => (
              <SelectItem key={status.value} value={status.value}>
                {status.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="flex-1 text-sm text-muted-foreground flex items-center justify-end">
          {filteredItems.length}件のアイテム
        </div>
      </div>

      {/* リスト */}
      <div className="space-y-4">
        {filteredItems.map((item) => (
          <Card key={item.id}>
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative h-32 md:h-24 md:w-40 flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-lg"
                    unoptimized
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Badge variant="outline">
                      {item.type === "service" ? "サービス" : "記事"}
                    </Badge>
                    <Badge variant="secondary">{item.category}</Badge>
                    <Badge variant={getStatusVariant(item.status)}>
                      {getStatusLabel(item.status)}
                    </Badge>
                  </div>
                  <Link
                    href={`/${item.type === "service" ? "services" : "articles"}/${item.id}`}
                    className="font-bold text-lg hover:text-primary transition-colors"
                  >
                    {item.title}
                  </Link>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    {item.rating && (
                      <span className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        {item.rating}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(item.addedDate).toLocaleDateString("ja-JP")}に追加
                    </span>
                  </div>
                </div>
                <div className="flex md:flex-col gap-2 justify-end">
                  <Button variant="outline" size="sm" asChild>
                    <Link
                      href={`/${item.type === "service" ? "services" : "articles"}/${item.id}`}
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      詳細
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm" className="text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <Bookmark className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground mb-4">
            キープしたアイテムはありません
          </p>
          <Button asChild>
            <Link href="/services">サービスを探す</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
