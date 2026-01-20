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
import {
  Search,
  MapPin,
  Star,
  Briefcase,
  GraduationCap,
  Filter,
} from "lucide-react";

const categories = [
  { value: "all", label: "すべて" },
  { value: "lecturer", label: "講師・インストラクター" },
  { value: "consultant", label: "AIコンサルタント" },
  { value: "engineer", label: "教育システムエンジニア" },
  { value: "designer", label: "教材デザイナー" },
  { value: "other", label: "その他専門家" },
];

const locations = [
  { value: "all", label: "すべての地域" },
  { value: "tokyo", label: "東京都" },
  { value: "osaka", label: "大阪府" },
  { value: "aichi", label: "愛知県" },
  { value: "fukuoka", label: "福岡県" },
  { value: "remote", label: "リモート可" },
];

const talents = [
  {
    id: 1,
    name: "山田太郎",
    title: "EdTechコンサルタント",
    category: "consultant",
    image: "https://placehold.co/100x100/e2e8f0/334155?text=YT",
    location: "tokyo",
    rating: 4.9,
    reviews: 45,
    experience: "10年以上",
    skills: ["AI活用", "学校DX", "導入支援"],
    summary:
      "教育ICTの導入支援を10年以上行ってきました。GIGAスクール構想の立ち上げから運用まで、多くの学校を支援しています。",
    hourlyRate: "¥15,000",
    available: true,
  },
  {
    id: 2,
    name: "佐藤花子",
    title: "プログラミング教育講師",
    category: "lecturer",
    image: "https://placehold.co/100x100/fef3c7/ca8a04?text=SH",
    location: "osaka",
    rating: 4.8,
    reviews: 38,
    experience: "7年",
    skills: ["プログラミング", "Scratch", "Python"],
    summary:
      "小中学校でのプログラミング教育に特化した講師です。子どもたちが楽しく学べる授業設計を得意としています。",
    hourlyRate: "¥12,000",
    available: true,
  },
  {
    id: 3,
    name: "田中一郎",
    title: "学習分析エンジニア",
    category: "engineer",
    image: "https://placehold.co/100x100/fed7aa/ea580c?text=TI",
    location: "remote",
    rating: 4.7,
    reviews: 29,
    experience: "8年",
    skills: ["データ分析", "機械学習", "ダッシュボード"],
    summary:
      "学習データの分析システム開発が専門です。カスタムダッシュボードの構築や、AIを活用した学習支援システムの開発を行います。",
    hourlyRate: "¥18,000",
    available: false,
  },
  {
    id: 4,
    name: "鈴木美咲",
    title: "オンライン教育専門家",
    category: "consultant",
    image: "https://placehold.co/100x100/fecaca/dc2626?text=SM",
    location: "tokyo",
    rating: 4.9,
    reviews: 52,
    experience: "5年",
    skills: ["オンライン授業", "Zoom活用", "ハイブリッド"],
    summary:
      "コロナ禍以降、オンライン授業の導入支援を専門に行っています。効果的なオンライン授業の設計から運用までサポートします。",
    hourlyRate: "¥14,000",
    available: true,
  },
  {
    id: 5,
    name: "高橋健太",
    title: "教材デザイナー",
    category: "designer",
    image: "https://placehold.co/100x100/d9f99d/65a30d?text=TK",
    location: "fukuoka",
    rating: 4.6,
    reviews: 21,
    experience: "6年",
    skills: ["UI/UXデザイン", "教材開発", "動画制作"],
    summary:
      "教育コンテンツのデザインを専門としています。わかりやすく、学習意欲を高めるデジタル教材の制作が得意です。",
    hourlyRate: "¥13,000",
    available: true,
  },
];

export default function TalentPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  const filteredTalents = talents.filter((talent) => {
    const matchesSearch =
      talent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      talent.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      talent.skills.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === "all" || talent.category === selectedCategory;
    const matchesLocation =
      selectedLocation === "all" || talent.location === selectedLocation;
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">人材検索</h1>
        <p className="text-muted-foreground">
          講師・AIコンサルタント・専門家を検索できます
        </p>
      </div>

      {/* 検索・フィルター */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="名前、スキル、キーワードで検索..."
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
          <Select value={selectedLocation} onValueChange={setSelectedLocation}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <MapPin className="h-4 w-4 mr-2" />
              <SelectValue placeholder="地域" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location.value} value={location.value}>
                  {location.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="text-sm text-muted-foreground">
          {filteredTalents.length}名の人材が見つかりました
        </div>
      </div>

      {/* 人材一覧 */}
      <div className="space-y-4">
        {filteredTalents.map((talent) => (
          <Card key={talent.id}>
            <CardContent className="p-5">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-shrink-0">
                  <Image
                    src={talent.image}
                    alt={talent.name}
                    width={80}
                    height={80}
                    className="rounded-full"
                    unoptimized
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-lg font-bold">{talent.name}</h3>
                    {talent.available ? (
                      <Badge className="bg-green-500 hover:bg-green-600">
                        対応可能
                      </Badge>
                    ) : (
                      <Badge variant="secondary">現在対応不可</Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground mb-2">{talent.title}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      {talent.rating} ({talent.reviews}件)
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      {talent.experience}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {locations.find((l) => l.value === talent.location)?.label}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {talent.summary}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {talent.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between gap-4">
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">時給目安</p>
                    <p className="text-xl font-bold text-primary">
                      {talent.hourlyRate}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" asChild>
                      <Link href={`/profile/${talent.id}`}>詳細を見る</Link>
                    </Button>
                    <Button disabled={!talent.available}>
                      相談する
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredTalents.length === 0 && (
        <div className="text-center py-12">
          <GraduationCap className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">
            条件に一致する人材が見つかりませんでした
          </p>
        </div>
      )}
    </div>
  );
}
