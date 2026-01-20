import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  Download,
  Mail,
  ArrowRight,
  Home,
  FileText,
  Sparkles,
} from "lucide-react";

export default function PaymentCompletePage() {
  const orderDetails = {
    orderId: "ORD-2024011503",
    plan: "スタンダード",
    amount: 3278,
    date: "2024年1月15日",
    nextBillingDate: "2024年2月15日",
    email: "yamada@example.com",
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
              お支払いが完了しました
            </h1>

            <p className="text-lg text-muted-foreground mb-2">
              {orderDetails.plan}プランへのアップグレードが完了しました。
            </p>
            <p className="text-muted-foreground mb-8">
              すべての機能をご利用いただけます。
            </p>

            {/* 注文詳細 */}
            <Card className="text-left mb-8">
              <CardContent className="p-6">
                <h2 className="font-bold mb-4">ご注文内容</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">注文番号</span>
                    <span className="font-mono">{orderDetails.orderId}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">プラン</span>
                    <Badge>{orderDetails.plan}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">お支払い金額</span>
                    <span className="font-bold">
                      ¥{orderDetails.amount.toLocaleString()}（税込）
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">お支払い日</span>
                    <span>{orderDetails.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">次回請求日</span>
                    <span>{orderDetails.nextBillingDate}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* アクション */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                領収書をダウンロード
              </Button>
              <Button variant="outline" className="gap-2">
                <FileText className="h-4 w-4" />
                請求書を確認
              </Button>
            </div>

            {/* メール通知 */}
            <div className="p-4 rounded-lg bg-muted/50 mb-8 text-left">
              <div className="flex items-center gap-2 mb-2">
                <Mail className="h-5 w-5 text-primary" />
                <p className="font-medium">確認メールを送信しました</p>
              </div>
              <p className="text-sm text-muted-foreground">
                {orderDetails.email} 宛に注文確認メールをお送りしました。
                領収書のダウンロードリンクも含まれています。
              </p>
            </div>

            {/* 利用開始案内 */}
            <Card className="mb-8 border-primary/20 bg-primary/5">
              <CardContent className="p-6 text-left">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <h3 className="font-bold">さっそく使ってみましょう</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>会員限定記事が読み放題になりました</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>お気に入り登録が無制限になりました</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>詳細なレポート機能が利用可能になりました</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link href="/dashboard">
                  ダッシュボードへ
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
