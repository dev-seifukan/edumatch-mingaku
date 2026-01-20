import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Clock,
  Bookmark,
  Star,
  Bell,
  Settings,
  ArrowRight,
  Eye,
  FileText,
  TrendingUp,
} from "lucide-react";

const recentlyViewed = [
  {
    id: 1,
    title: "ClassTech Pro",
    type: "service",
    image: "https://placehold.co/100x60/fef3c7/ca8a04?text=CT",
    date: "2024-01-15",
  },
  {
    id: 2,
    title: "EdTechツール選びの完全ガイド",
    type: "article",
    image: "https://placehold.co/100x60/e2e8f0/334155?text=Article",
    date: "2024-01-14",
  },
  {
    id: 3,
    title: "SmartAssess",
    type: "service",
    image: "https://placehold.co/100x60/fecaca/dc2626?text=SA",
    date: "2024-01-14",
  },
];

const keepList = [
  {
    id: 1,
    title: "ClassTech Pro",
    type: "service",
    status: "検討中",
  },
  {
    id: 2,
    title: "EduCollabo",
    type: "service",
    status: "資料請求済",
  },
  {
    id: 3,
    title: "導入事例：タブレット活用",
    type: "article",
    status: null,
  },
];

const notifications = [
  {
    id: 1,
    title: "新着記事：AI活用の最新トレンド",
    date: "2024-01-15",
    read: false,
  },
  {
    id: 2,
    title: "キープしたサービスがキャンペーン中",
    date: "2024-01-14",
    read: false,
  },
  {
    id: 3,
    title: "資料請求の回答が届きました",
    date: "2024-01-13",
    read: true,
  },
];

export default function DashboardPage() {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">マイダッシュボード</h1>
            <p className="text-muted-foreground">
              こんにちは、山田太郎さん
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/profile/register">
              <Settings className="h-4 w-4 mr-2" />
              プロファイル設定
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* メインコンテンツ */}
        <div className="lg:col-span-2 space-y-6">
          {/* 閲覧履歴 */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                最近の閲覧履歴
              </CardTitle>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/history">
                  すべて見る
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentlyViewed.map((item) => (
                  <Link
                    key={item.id}
                    href={`/${item.type === "service" ? "services" : "articles"}/${item.id}`}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <div className="relative h-12 w-20 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover rounded"
                        unoptimized
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {item.type === "service" ? "サービス" : "記事"}
                        </Badge>
                      </div>
                      <p className="font-medium truncate">{item.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(item.date).toLocaleDateString("ja-JP")}
                      </p>
                    </div>
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* キープリスト */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Bookmark className="h-5 w-5" />
                キープリスト
              </CardTitle>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/keep-list">
                  すべて見る
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {keepList.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <Badge variant="outline" className="text-xs mt-1">
                          {item.type === "service" ? "サービス" : "記事"}
                        </Badge>
                      </div>
                    </div>
                    {item.status && (
                      <Badge
                        variant={
                          item.status === "資料請求済" ? "default" : "secondary"
                        }
                      >
                        {item.status}
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 導入検討進捗 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                導入検討の進捗
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">ClassTech Pro</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-primary rounded-full" />
                    </div>
                    <span className="text-sm text-muted-foreground">75%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">EduCollabo</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="w-1/2 h-full bg-primary rounded-full" />
                    </div>
                    <span className="text-sm text-muted-foreground">50%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* サイドバー */}
        <div className="space-y-6">
          {/* 通知 */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <Bell className="h-5 w-5" />
                通知
              </CardTitle>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/notifications">すべて</Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-3 rounded-lg ${
                      notification.read ? "bg-muted/30" : "bg-primary/5 border border-primary/20"
                    }`}
                  >
                    <p className={`text-sm ${notification.read ? "" : "font-medium"}`}>
                      {notification.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {new Date(notification.date).toLocaleDateString("ja-JP")}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* クイックアクション */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">クイックアクション</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link href="/request-info">
                  <FileText className="h-4 w-4 mr-2" />
                  資料請求
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link href="/reviews/write">
                  <Star className="h-4 w-4 mr-2" />
                  レビューを書く
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link href="/consultation">
                  <Bell className="h-4 w-4 mr-2" />
                  無料相談予約
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* プラン情報 */}
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-lg">ご利用プラン</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Badge>フリープラン</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                プレミアムプランにアップグレードすると、
                すべての機能が利用できます。
              </p>
              <Button className="w-full" asChild>
                <Link href="/plans">プランを見る</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
