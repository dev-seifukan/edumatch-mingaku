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
import { Search, Building2, Users, TrendingUp, Filter } from "lucide-react";

const schoolTypes = [
  { value: "all", label: "すべての学校種" },
  { value: "elementary", label: "小学校" },
  { value: "junior-high", label: "中学校" },
  { value: "high-school", label: "高等学校" },
  { value: "university", label: "大学・専門学校" },
  { value: "other", label: "その他" },
];

const categories = [
  { value: "all", label: "すべてのカテゴリ" },
  { value: "learning", label: "学習管理" },
  { value: "communication", label: "コミュニケーション" },
  { value: "assessment", label: "評価・分析" },
  { value: "dx", label: "学校DX" },
];

const cases = [
  {
    id: 1,
    title: "タブレット活用で授業の質が向上",
    organization: "東京都立○○中学校",
    schoolType: "junior-high",
    category: "learning",
    image: "https://placehold.co/400x250/fef3c7/ca8a04?text=Case+1",
    summary:
      "1人1台端末の導入により、個別最適化された学習を実現。生徒の学習意欲が向上し、成績も平均10%アップ。",
    services: ["ClassTech Pro", "SmartAssess"],
    results: [
      { label: "学習意欲向上", value: "85%" },
      { label: "成績向上", value: "+10%" },
    ],
    studentCount: 450,
    date: "2024-01",
  },
  {
    id: 2,
    title: "保護者連携の強化で信頼関係を構築",
    organization: "大阪市立△△小学校",
    schoolType: "elementary",
    category: "communication",
    image: "https://placehold.co/400x250/fed7aa/ea580c?text=Case+2",
    summary:
      "デジタル連絡ツールの導入で、保護者との連絡頻度が3倍に。緊急連絡の到達率も99%を達成。",
    services: ["EduCollabo"],
    results: [
      { label: "連絡頻度", value: "3倍" },
      { label: "到達率", value: "99%" },
    ],
    studentCount: 320,
    date: "2023-12",
  },
  {
    id: 3,
    title: "AI採点で教員の働き方改革を実現",
    organization: "神奈川県立□□高校",
    schoolType: "high-school",
    category: "assessment",
    image: "https://placehold.co/400x250/fecaca/dc2626?text=Case+3",
    summary:
      "AI自動採点システムの導入により、採点業務が60%削減。その時間を生徒との対話に充てられるように。",
    services: ["SmartAssess"],
    results: [
      { label: "採点時間削減", value: "60%" },
      { label: "生徒対応時間", value: "+40%" },
    ],
    studentCount: 680,
    date: "2023-11",
  },
  {
    id: 4,
    title: "校務のデジタル化で業務効率化",
    organization: "埼玉県立◇◇中学校",
    schoolType: "junior-high",
    category: "dx",
    image: "https://placehold.co/400x250/d9f99d/65a30d?text=Case+4",
    summary:
      "紙の書類をデジタル化し、校務システムを一元管理。年間の紙使用量を80%削減、業務時間も大幅短縮。",
    services: ["LearnSpace", "ClassTech Pro"],
    results: [
      { label: "紙削減", value: "80%" },
      { label: "業務時間", value: "-30%" },
    ],
    studentCount: 520,
    date: "2023-10",
  },
  {
    id: 5,
    title: "オンライン授業のハイブリッド運用",
    organization: "愛知県○○大学",
    schoolType: "university",
    category: "learning",
    image: "https://placehold.co/400x250/bfdbfe/2563eb?text=Case+5",
    summary:
      "対面とオンラインのハイブリッド授業を実現。学生の出席率が向上し、遠隔地からの受講も可能に。",
    services: ["LearnSpace"],
    results: [
      { label: "出席率向上", value: "+15%" },
      { label: "遠隔受講", value: "可能" },
    ],
    studentCount: 3200,
    date: "2023-09",
  },
  {
    id: 6,
    title: "協働学習でアクティブラーニングを推進",
    organization: "福岡市立☆☆小学校",
    schoolType: "elementary",
    category: "learning",
    image: "https://placehold.co/400x250/e9d5ff/9333ea?text=Case+6",
    summary:
      "グループワーク支援ツールを活用し、主体的・対話的な学びを実現。児童の発表力が大きく向上。",
    services: ["TeamEdu"],
    results: [
      { label: "発表参加率", value: "95%" },
      { label: "協働活動", value: "+50%" },
    ],
    studentCount: 280,
    date: "2023-08",
  },
];

export default function CasesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSchoolType, setSelectedSchoolType] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCases = cases.filter((caseItem) => {
    const matchesSearch =
      caseItem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      caseItem.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      caseItem.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSchoolType =
      selectedSchoolType === "all" || caseItem.schoolType === selectedSchoolType;
    const matchesCategory =
      selectedCategory === "all" || caseItem.category === selectedCategory;
    return matchesSearch && matchesSchoolType && matchesCategory;
  });

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">導入事例一覧</h1>
        <p className="text-muted-foreground">
          教育現場での成功事例をご紹介します
        </p>
      </div>

      {/* 検索・フィルター */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="学校名やキーワードで検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedSchoolType} onValueChange={setSelectedSchoolType}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <Building2 className="h-4 w-4 mr-2" />
              <SelectValue placeholder="学校種" />
            </SelectTrigger>
            <SelectContent>
              {schoolTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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
        </div>
        <div className="text-sm text-muted-foreground">
          {filteredCases.length}件の導入事例が見つかりました
        </div>
      </div>

      {/* 事例一覧 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCases.map((caseItem) => (
          <Link key={caseItem.id} href={`/cases/${caseItem.id}`}>
            <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={caseItem.image}
                  alt={caseItem.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <CardContent className="p-5">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge variant="secondary">
                    {schoolTypes.find((t) => t.value === caseItem.schoolType)?.label}
                  </Badge>
                  <Badge variant="outline">
                    {categories.find((c) => c.value === caseItem.category)?.label}
                  </Badge>
                </div>
                <h3 className="text-lg font-bold mb-2">{caseItem.title}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Building2 className="h-4 w-4" />
                  {caseItem.organization}
                  <span className="mx-1">|</span>
                  <Users className="h-4 w-4" />
                  {caseItem.studentCount.toLocaleString()}名
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {caseItem.summary}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {caseItem.services.map((service) => (
                    <Badge key={service} variant="outline" className="text-xs">
                      {service}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  {caseItem.results.map((result) => (
                    <div key={result.label} className="flex items-center gap-1">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      <span className="text-sm">
                        <span className="font-semibold text-green-600">
                          {result.value}
                        </span>{" "}
                        <span className="text-muted-foreground">
                          {result.label}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {filteredCases.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            条件に一致する導入事例が見つかりませんでした
          </p>
        </div>
      )}
    </div>
  );
}
