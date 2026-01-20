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
  Calendar,
  MapPin,
  Users,
  Clock,
  Video,
  Building,
} from "lucide-react";

const eventTypes = [
  { value: "all", label: "すべて" },
  { value: "seminar", label: "セミナー" },
  { value: "workshop", label: "ワークショップ" },
  { value: "exhibition", label: "展示会" },
  { value: "conference", label: "カンファレンス" },
];

const formats = [
  { value: "all", label: "すべての形式" },
  { value: "online", label: "オンライン" },
  { value: "offline", label: "オフライン" },
  { value: "hybrid", label: "ハイブリッド" },
];

const events = [
  {
    id: 1,
    title: "EdTech導入セミナー2024",
    description:
      "教育現場へのEdTech導入の成功事例と失敗事例から学ぶ、実践的なセミナーです。",
    image: "https://placehold.co/400x250/fef3c7/ca8a04?text=Seminar",
    type: "seminar",
    format: "online",
    date: "2024-02-15",
    time: "14:00〜16:00",
    location: "オンライン開催",
    capacity: 200,
    registered: 145,
    price: "無料",
    speaker: "山田太郎（教育ICTコンサルタント）",
    tags: ["EdTech", "導入支援", "初心者向け"],
  },
  {
    id: 2,
    title: "プログラミング教育ワークショップ",
    description:
      "小学校でのプログラミング教育の具体的な指導方法を、実際に体験しながら学びます。",
    image: "https://placehold.co/400x250/fed7aa/ea580c?text=Workshop",
    type: "workshop",
    format: "offline",
    date: "2024-02-20",
    time: "10:00〜17:00",
    location: "東京都渋谷区（会場詳細は申込後にご連絡）",
    capacity: 30,
    registered: 28,
    price: "¥5,000",
    speaker: "佐藤花子（プログラミング教育専門家）",
    tags: ["プログラミング", "小学校", "実践"],
  },
  {
    id: 3,
    title: "教育DX推進カンファレンス",
    description:
      "教育現場のDX推進について、先進事例の発表とパネルディスカッションを行います。",
    image: "https://placehold.co/400x250/fecaca/dc2626?text=Conference",
    type: "conference",
    format: "hybrid",
    date: "2024-03-01",
    time: "13:00〜18:00",
    location: "東京国際フォーラム / オンライン同時配信",
    capacity: 500,
    registered: 320,
    price: "¥3,000（オンライン無料）",
    speaker: "複数の登壇者",
    tags: ["DX", "カンファレンス", "事例発表"],
  },
  {
    id: 4,
    title: "学習分析入門セミナー",
    description:
      "学習データの分析手法と、それを活用した指導改善の方法について解説します。",
    image: "https://placehold.co/400x250/d9f99d/65a30d?text=Seminar",
    type: "seminar",
    format: "online",
    date: "2024-03-10",
    time: "19:00〜20:30",
    location: "オンライン開催（Zoom）",
    capacity: 100,
    registered: 67,
    price: "無料",
    speaker: "田中一郎（学習分析研究者）",
    tags: ["学習分析", "データ活用", "初心者向け"],
  },
  {
    id: 5,
    title: "EdTech EXPO 2024",
    description:
      "最新のEdTechサービス・製品が一堂に会する大規模展示会。体験ブースも多数。",
    image: "https://placehold.co/400x250/bfdbfe/2563eb?text=EXPO",
    type: "exhibition",
    format: "offline",
    date: "2024-03-15",
    time: "10:00〜18:00",
    location: "東京ビッグサイト",
    capacity: 5000,
    registered: 2800,
    price: "入場無料（事前登録制）",
    speaker: "-",
    tags: ["展示会", "EdTech", "最新技術"],
  },
  {
    id: 6,
    title: "オンライン授業スキルアップ講座",
    description:
      "オンライン授業をより効果的に行うためのスキルとツールの使い方を学びます。",
    image: "https://placehold.co/400x250/e9d5ff/9333ea?text=Workshop",
    type: "workshop",
    format: "online",
    date: "2024-03-22",
    time: "15:00〜17:00",
    location: "オンライン開催",
    capacity: 50,
    registered: 35,
    price: "¥2,000",
    speaker: "鈴木美咲（オンライン教育専門家）",
    tags: ["オンライン授業", "スキルアップ"],
  },
];

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedFormat, setSelectedFormat] = useState("all");

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    const matchesType = selectedType === "all" || event.type === selectedType;
    const matchesFormat =
      selectedFormat === "all" || event.format === selectedFormat;
    return matchesSearch && matchesType && matchesFormat;
  });

  const getFormatIcon = (format: string) => {
    switch (format) {
      case "online":
        return <Video className="h-4 w-4" />;
      case "offline":
        return <Building className="h-4 w-4" />;
      default:
        return <Video className="h-4 w-4" />;
    }
  };

  const getFormatLabel = (format: string) => {
    return formats.find((f) => f.value === format)?.label || format;
  };

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">セミナー・イベント</h1>
        <p className="text-muted-foreground">
          教育関連のセミナー・イベント情報をお届けします
        </p>
      </div>

      {/* 検索・フィルター */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="イベント名やキーワードで検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="イベント種別" />
            </SelectTrigger>
            <SelectContent>
              {eventTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={selectedFormat} onValueChange={setSelectedFormat}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="開催形式" />
            </SelectTrigger>
            <SelectContent>
              {formats.map((format) => (
                <SelectItem key={format.value} value={format.value}>
                  {format.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="text-sm text-muted-foreground">
          {filteredEvents.length}件のイベントが見つかりました
        </div>
      </div>

      {/* イベント一覧 */}
      <div className="space-y-4">
        {filteredEvents.map((event) => (
          <Card key={event.id} className="overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="relative h-48 md:h-auto md:w-64 flex-shrink-0">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <CardContent className="p-5 flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge>
                    {eventTypes.find((t) => t.value === event.type)?.label}
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    {getFormatIcon(event.format)}
                    {getFormatLabel(event.format)}
                  </Badge>
                  {event.price === "無料" && (
                    <Badge className="bg-green-500 hover:bg-green-600">無料</Badge>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {event.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {new Date(event.date).toLocaleDateString("ja-JP", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    {event.registered}/{event.capacity}名
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {event.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-semibold text-primary">
                    {event.price}
                  </span>
                  <Button asChild>
                    <Link href={`/events/${event.id}`}>詳細・申込</Link>
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            条件に一致するイベントが見つかりませんでした
          </p>
        </div>
      )}
    </div>
  );
}
