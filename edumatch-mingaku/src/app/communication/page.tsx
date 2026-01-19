import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, Bell, Users } from "lucide-react";

const messages = [
  {
    id: 1,
    title: "保護者会のご案内",
    from: "担任：山田先生",
    date: "2024-01-15",
    unread: true,
  },
  {
    id: 2,
    title: "授業参観のお知らせ",
    from: "教務：佐藤先生",
    date: "2024-01-14",
    unread: false,
  },
  {
    id: 3,
    title: "学習相談のご案内",
    from: "学年主任",
    date: "2024-01-13",
    unread: false,
  },
];

const groups = [
  { id: 1, name: "1年A組（保護者）", members: 38 },
  { id: 2, name: "2年B組（生徒）", members: 36 },
  { id: 3, name: "教員連絡網", members: 24 },
];

export default function CommunicationPage() {
  return (
    <div className="container py-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">コミュニケーション</h1>
          <p className="text-muted-foreground">
            学校・保護者・生徒との連絡をスムーズに
          </p>
        </div>
        <Button>新規メッセージ</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              未読メッセージ
            </CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">3件</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              通知設定
            </CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">ON</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              グループ数
            </CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">12</CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            メッセージ一覧
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className="flex items-center justify-between border-b pb-3 last:border-b-0 last:pb-0"
            >
              <div>
                <p className="font-medium">{message.title}</p>
                <p className="text-sm text-muted-foreground">{message.from}</p>
              </div>
              <div className="text-right space-y-1">
                {message.unread && <Badge>未読</Badge>}
                <p className="text-sm text-muted-foreground">
                  {new Date(message.date).toLocaleDateString("ja-JP")}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              お知らせ配信
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              一斉連絡や緊急通知を簡単に配信できます
            </p>
            <Button variant="outline">配信を作成</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              グループ一覧
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {groups.map((group) => (
              <div key={group.id} className="flex justify-between text-sm">
                <span>{group.name}</span>
                <span className="text-muted-foreground">
                  {group.members}名
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
