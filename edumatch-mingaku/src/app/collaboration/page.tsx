import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Folder, CheckCircle2 } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "地域課題を解決するアイデア発表",
    members: 5,
    status: "進行中",
    due: "2024-01-20",
  },
  {
    id: 2,
    title: "探究学習レポート作成",
    members: 4,
    status: "準備中",
    due: "2024-01-25",
  },
  {
    id: 3,
    title: "科学実験の共同研究",
    members: 6,
    status: "完了",
    due: "2024-01-10",
  },
];

const tasks = [
  { id: 1, title: "テーマ決定", status: "完了" },
  { id: 2, title: "資料収集", status: "進行中" },
  { id: 3, title: "発表資料作成", status: "未着手" },
];

export default function CollaborationPage() {
  return (
    <div className="container py-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">協働学習</h1>
          <p className="text-muted-foreground">
            グループ学習の進捗管理や共同作業を支援します
          </p>
        </div>
        <Button>新規プロジェクト</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              進行中プロジェクト
            </CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">4件</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              参加メンバー
            </CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">24名</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              完了タスク
            </CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">12件</CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Folder className="h-5 w-5" />
            プロジェクト一覧
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex items-center justify-between border-b pb-3 last:border-b-0 last:pb-0"
            >
              <div>
                <p className="font-medium">{project.title}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  {project.members}名
                  <span>•</span>
                  期限: {new Date(project.due).toLocaleDateString("ja-JP")}
                </div>
              </div>
              <Badge
                variant={project.status === "完了" ? "default" : "secondary"}
              >
                {project.status}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5" />
            タスク一覧
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-center gap-2 text-sm">
              <span className="text-muted-foreground">•</span>
              <span className="flex-1">{task.title}</span>
              <Badge
                variant={task.status === "完了" ? "default" : "secondary"}
              >
                {task.status}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
