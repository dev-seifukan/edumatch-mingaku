"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, RefreshCw, Home, MessageSquare } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // エラーをログに記録
    console.error(error);
  }, [error]);

  return (
    <div className="container py-16">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-100 mb-8">
          <AlertTriangle className="h-12 w-12 text-red-600" />
        </div>

        <h1 className="text-6xl font-bold text-red-600 mb-4">500</h1>
        <h2 className="text-2xl font-bold mb-4">
          サーバーエラーが発生しました
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          申し訳ございません。予期しないエラーが発生しました。
          <br />
          しばらく時間をおいて再度お試しください。
        </p>

        {/* エラー詳細（開発用） */}
        {process.env.NODE_ENV === "development" && (
          <Card className="mb-8 text-left">
            <CardContent className="p-4">
              <p className="text-sm font-mono text-red-600 break-all">
                {error.message}
              </p>
              {error.digest && (
                <p className="text-xs text-muted-foreground mt-2">
                  Error ID: {error.digest}
                </p>
              )}
            </CardContent>
          </Card>
        )}

        {/* アクションボタン */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button onClick={reset} size="lg" className="gap-2">
            <RefreshCw className="h-5 w-5" />
            再読み込み
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link href="/">
              <Home className="h-5 w-5" />
              トップページへ
            </Link>
          </Button>
        </div>

        {/* サポート案内 */}
        <Card className="bg-muted/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MessageSquare className="h-5 w-5 text-primary" />
              <span className="font-medium">問題が解決しない場合</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              エラーが繰り返し発生する場合は、お手数ですがサポートまでご連絡ください。
            </p>
            <Button asChild variant="outline">
              <Link href="/contact">お問い合わせ</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
