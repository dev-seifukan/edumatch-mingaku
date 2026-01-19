import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FileText, Mail, Phone } from "lucide-react";

export default function RequestInfoPage() {
  return (
    <div className="container py-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">資料請求</h1>
        <p className="text-muted-foreground">
          サービスの資料請求はこちらからお申し込みください
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>資料請求フォーム</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="お名前" />
              <Input placeholder="学校名・組織名" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input type="email" placeholder="メールアドレス" />
              <Input placeholder="電話番号" />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="関心のあるカテゴリ" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="learning">学習管理</SelectItem>
                <SelectItem value="communication">コミュニケーション</SelectItem>
                <SelectItem value="assessment">評価・分析</SelectItem>
                <SelectItem value="collaboration">協働学習</SelectItem>
                <SelectItem value="environment">学習環境</SelectItem>
              </SelectContent>
            </Select>
            <Textarea placeholder="ご要望・ご質問" rows={5} />
            <Button className="w-full">資料請求を送信</Button>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                資料内容
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>・サービス概要</p>
              <p>・導入事例</p>
              <p>・料金プラン</p>
              <p>・サポート体制</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                メールでのお問い合わせ
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              contact@edumatch.jp
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                お電話でのお問い合わせ
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              03-1234-5678（平日 9:00-18:00）
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
