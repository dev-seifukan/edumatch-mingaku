import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Mail,
  Clock,
  ArrowRight,
  FileText,
  Home,
} from "lucide-react";

export default function RequestInfoCompletePage() {
  const requestDetails = {
    requestId: "REQ-2024011501",
    serviceName: "ClassTech Pro",
    date: "2024年1月15日",
    email: "yamada@example.com",
    items: ["サービス概要資料", "料金プラン", "導入事例集"],
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
              資料請求を受け付けました
            </h1>

            <p className="text-lg text-muted-foreground mb-8">
              ご請求いただいた資料は、サービス提供元より
              <br />
              ご登録のメールアドレスにお送りします。
            </p>

            {/* 請求内容の確認 */}
            <Card className="text-left mb-8">
              <CardContent className="p-6">
                <h2 className="font-bold mb-4">ご請求内容</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">受付番号</span>
                    <span className="font-mono">{requestDetails.requestId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">サービス名</span>
                    <span>{requestDetails.serviceName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">請求日時</span>
                    <span>{requestDetails.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">送信先</span>
                    <span>{requestDetails.email}</span>
                  </div>
                  <div className="border-t pt-3">
                    <span className="text-muted-foreground block mb-2">
                      請求資料
                    </span>
                    <ul className="space-y-1">
                      {requestDetails.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 次のステップ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-lg bg-muted/50 text-left">
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <p className="font-medium">メールをご確認ください</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  資料はメールでお届けします。届かない場合は迷惑メールフォルダをご確認ください。
                </p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50 text-left">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <p className="font-medium">通常1〜3営業日以内</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  資料の送付には1〜3営業日かかる場合があります。お急ぎの場合はお問い合わせください。
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link href="/services">
                  他のサービスを見る
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
