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
import { Badge } from "@/components/ui/badge";

const guidelines = [
  "記事の内容は教育現場に役立つ実践的な情報にしてください。",
  "著作権や引用ルールを遵守してください。",
  "誤情報がないように確認をお願いします。",
  "画像は自分で撮影したもの、または使用許可のあるもののみ。",
];

export default function ArticleSubmitPage() {
  return (
    <div className="container py-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">記事投稿（デモ）</h1>
        <p className="text-muted-foreground">
          記事を投稿して、教育現場の知見を共有しましょう
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>記事投稿フォーム</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="記事タイトル" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="カテゴリ" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ict">教育ICT</SelectItem>
                  <SelectItem value="case">導入事例</SelectItem>
                  <SelectItem value="management">学校運営</SelectItem>
                  <SelectItem value="policy">政策・制度</SelectItem>
                </SelectContent>
              </Select>
              <Input placeholder="タグ（例: EdTech, 授業改善）" />
            </div>
            <Textarea placeholder="概要（リード文）" rows={4} />
            <Textarea placeholder="本文（Markdown対応）" rows={10} />
            <div className="flex items-center gap-3">
              <Button>投稿する</Button>
              <Button variant="outline">下書き保存</Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>投稿ガイドライン</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {guidelines.map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm">
                  <Badge variant="outline">必須</Badge>
                  <span>{item}</span>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>レビュー状況</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              投稿後、編集部で内容確認を行い公開されます。
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
