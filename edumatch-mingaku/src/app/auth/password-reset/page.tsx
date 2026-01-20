"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ArrowLeft } from "lucide-react";

export default function PasswordResetPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="container py-8">
      <div className="max-w-md mx-auto">
        <Button variant="ghost" asChild className="mb-4">
          <Link href="/auth/login">
            <ArrowLeft className="h-4 w-4 mr-2" />
            ログインに戻る
          </Link>
        </Button>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">パスワードをリセット</CardTitle>
            <p className="text-muted-foreground">
              ご登録のメールアドレスにリセット用リンクを送信します
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="email"
                placeholder="メールアドレス"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
              />
            </div>

            <Button className="w-full" asChild>
              <Link href="/auth/password-reset-sent">リセットリンクを送信</Link>
            </Button>

            <div className="text-center text-sm text-muted-foreground">
              <p>
                メールアドレスが分からない場合は、
                <Link href="/contact" className="text-primary hover:underline">
                  お問い合わせ
                </Link>
                ください。
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
