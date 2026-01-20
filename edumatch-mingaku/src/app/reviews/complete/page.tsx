import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  Star,
  ArrowRight,
  Home,
  Edit,
} from "lucide-react";

export default function ReviewCompletePage() {
  const reviewDetails = {
    serviceName: "ClassTech Pro",
    rating: 5,
    title: "導入して本当に良かった！業務効率が大幅に改善",
    content:
      "授業の準備から生徒の進捗管理まで、すべてが一元化されて非常に便利です。特に学習分析機能が素晴らしく、個々の生徒に合わせた指導ができるようになりました。",
    pros: "直感的なUI、豊富な機能、手厚いサポート",
    cons: "初期設定に時間がかかる",
    date: "2024年1月15日",
  };

  return (
    <div className="container py-8">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardContent className="p-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>

            <h1 className="text-3xl font-bold mb-4">
              レビューを投稿しました
            </h1>

            <p className="text-lg text-muted-foreground mb-8">
              あなたのレビューが他の教育関係者の参考になります。
              <br />
              ご協力ありがとうございました。
            </p>

            {/* 投稿内容プレビュー */}
            <Card className="text-left mb-8">
              <CardContent className="p-6">
                <h2 className="font-bold mb-4">投稿内容</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">サービス</span>
                    <Badge>{reviewDetails.serviceName}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">評価</span>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-5 w-5 ${
                            star <= reviewDetails.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "fill-muted text-muted"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-muted-foreground block mb-1">
                      タイトル
                    </span>
                    <p className="font-medium">{reviewDetails.title}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground block mb-1">
                      レビュー内容
                    </span>
                    <p className="text-sm">{reviewDetails.content}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-muted-foreground block mb-1">
                        良い点
                      </span>
                      <p className="text-sm">{reviewDetails.pros}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground block mb-1">
                        改善点
                      </span>
                      <p className="text-sm">{reviewDetails.cons}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t">
                    <span className="text-muted-foreground">投稿日</span>
                    <span>{reviewDetails.date}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* アクション */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <Button variant="outline" className="gap-2" asChild>
                <Link href="/reviews/write">
                  <Edit className="h-4 w-4" />
                  別のレビューを書く
                </Link>
              </Button>
              <Button variant="outline" className="gap-2" asChild>
                <Link href="/dashboard">
                  マイページで確認
                </Link>
              </Button>
            </div>

            <div className="p-4 rounded-lg bg-muted/50 mb-8 text-left">
              <p className="text-sm text-muted-foreground">
                投稿したレビューは、マイページからいつでも編集・削除できます。
                レビューの掲載には審査が必要な場合があります。
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link href="/reviews">
                  レビュー一覧を見る
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link href="/">
                  <Home className="h-4 w-4" />
                  トップページへ
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
