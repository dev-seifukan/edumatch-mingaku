"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Bell,
  FileText,
  Star,
  Gift,
  MessageSquare,
  Check,
  CheckCheck,
  Trash2,
  Filter,
} from "lucide-react";

const categories = [
  { value: "all", label: "すべて" },
  { value: "article", label: "記事" },
  { value: "service", label: "サービス" },
  { value: "campaign", label: "キャンペーン" },
  { value: "system", label: "システム" },
];

const notifications = [
  {
    id: 1,
    type: "article",
    title: "新着記事：AI活用の最新トレンド2024",
    description: "あなたの関心カテゴリに新しい記事が投稿されました。",
    date: "2024-01-15T10:30:00",
    read: false,
    link: "/articles/1",
  },
  {
    id: 2,
    type: "campaign",
    title: "キープしたサービスがキャンペーン中",
    description: "ClassTech Proが新規導入キャンペーンを実施中です。初期費用50%OFF！",
    date: "2024-01-14T15:00:00",
    read: false,
    link: "/campaigns",
  },
  {
    id: 3,
    type: "system",
    title: "資料請求の回答が届きました",
    description: "EduCollaboから資料が届きました。マイページからダウンロードできます。",
    date: "2024-01-13T09:00:00",
    read: true,
    link: "/dashboard",
  },
  {
    id: 4,
    type: "service",
    title: "おすすめサービスの更新",
    description: "あなたの関心に基づいた新しいおすすめサービスがあります。",
    date: "2024-01-12T14:30:00",
    read: true,
    link: "/recommend",
  },
  {
    id: 5,
    type: "article",
    title: "お気に入り記事の続編が公開",
    description: "「EdTechツール選びの完全ガイド」の続編が公開されました。",
    date: "2024-01-11T11:00:00",
    read: true,
    link: "/articles/2",
  },
  {
    id: 6,
    type: "system",
    title: "プロファイルを更新しましょう",
    description: "プロファイルを充実させると、より良いおすすめを表示できます。",
    date: "2024-01-10T16:00:00",
    read: true,
    link: "/profile/register",
  },
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case "article":
      return FileText;
    case "service":
      return Star;
    case "campaign":
      return Gift;
    case "system":
      return MessageSquare;
    default:
      return Bell;
  }
};

const getTypeLabel = (type: string) => {
  return categories.find((c) => c.value === type)?.label || type;
};

export default function NotificationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showUnreadOnly, setShowUnreadOnly] = useState(false);

  const filteredNotifications = notifications.filter((notification) => {
    const matchesCategory =
      selectedCategory === "all" || notification.type === selectedCategory;
    const matchesReadStatus = !showUnreadOnly || !notification.read;
    return matchesCategory && matchesReadStatus;
  });

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="container py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Bell className="h-6 w-6 text-primary" />
              <h1 className="text-3xl font-bold">通知一覧</h1>
              {unreadCount > 0 && (
                <Badge className="bg-red-500">{unreadCount}件の未読</Badge>
              )}
            </div>
            <p className="text-muted-foreground">
              お知らせや更新情報を確認できます
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <CheckCheck className="h-4 w-4 mr-2" />
              すべて既読にする
            </Button>
          </div>
        </div>
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
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={showUnreadOnly}
            onChange={(e) => setShowUnreadOnly(e.target.checked)}
            className="rounded"
          />
          <span className="text-sm">未読のみ表示</span>
        </label>
      </div>

      {/* 通知リスト */}
      <Card>
        <CardContent className="p-0">
          <div className="divide-y">
            {filteredNotifications.map((notification) => {
              const Icon = getTypeIcon(notification.type);
              return (
                <Link
                  key={notification.id}
                  href={notification.link}
                  className={`flex items-start gap-4 p-4 hover:bg-muted/50 transition-colors ${
                    !notification.read ? "bg-primary/5" : ""
                  }`}
                >
                  <div
                    className={`p-2 rounded-full flex-shrink-0 ${
                      !notification.read
                        ? "bg-primary/10 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className="text-xs">
                        {getTypeLabel(notification.type)}
                      </Badge>
                      {!notification.read && (
                        <span className="w-2 h-2 rounded-full bg-primary" />
                      )}
                    </div>
                    <p
                      className={`font-medium ${
                        !notification.read ? "" : "text-muted-foreground"
                      }`}
                    >
                      {notification.title}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                      {notification.description}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      {new Date(notification.date).toLocaleDateString("ja-JP", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Check className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </Link>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {filteredNotifications.length === 0 && (
        <div className="text-center py-12">
          <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">通知はありません</p>
        </div>
      )}

      {/* 通知設定 */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="text-lg">通知設定</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <label className="flex items-center justify-between cursor-pointer">
              <span>新着記事の通知</span>
              <input type="checkbox" defaultChecked className="rounded" />
            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <span>キャンペーン情報</span>
              <input type="checkbox" defaultChecked className="rounded" />
            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <span>おすすめサービスの更新</span>
              <input type="checkbox" defaultChecked className="rounded" />
            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <span>システム通知</span>
              <input type="checkbox" defaultChecked className="rounded" />
            </label>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
