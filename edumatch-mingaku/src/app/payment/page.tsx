"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  CreditCard,
  Building2,
  Lock,
  Check,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [cardName, setCardName] = useState("");

  const selectedPlan = {
    name: "スタンダード",
    price: 2980,
    period: "月額",
  };

  return (
    <div className="container py-8">
      <Button variant="ghost" asChild className="mb-4">
        <Link href="/plans">
          <ArrowLeft className="h-4 w-4 mr-2" />
          プラン選択に戻る
        </Link>
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 決済フォーム */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>お支払い方法</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* 支払い方法選択 */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setPaymentMethod("credit")}
                  className={`p-4 rounded-lg border-2 text-left transition-colors ${
                    paymentMethod === "credit"
                      ? "border-primary bg-primary/5"
                      : "border-muted hover:border-muted-foreground/30"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <CreditCard className="h-5 w-5" />
                    <span className="font-medium">クレジットカード</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    VISA, Mastercard, JCB, AMEX
                  </p>
                </button>
                <button
                  onClick={() => setPaymentMethod("invoice")}
                  className={`p-4 rounded-lg border-2 text-left transition-colors ${
                    paymentMethod === "invoice"
                      ? "border-primary bg-primary/5"
                      : "border-muted hover:border-muted-foreground/30"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="h-5 w-5" />
                    <span className="font-medium">請求書払い</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    法人のお客様向け
                  </p>
                </button>
              </div>

              {/* クレジットカード入力 */}
              {paymentMethod === "credit" && (
                <div className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">カード番号</label>
                    <div className="relative">
                      <Input
                        placeholder="1234 5678 9012 3456"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="pl-10"
                      />
                      <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">有効期限</label>
                      <Input
                        placeholder="MM/YY"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        セキュリティコード
                      </label>
                      <Input
                        placeholder="123"
                        value={cvc}
                        onChange={(e) => setCvc(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">カード名義</label>
                    <Input
                      placeholder="TARO YAMADA"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                    />
                  </div>
                </div>
              )}

              {/* 請求書払い */}
              {paymentMethod === "invoice" && (
                <div className="space-y-4 pt-4">
                  <div className="p-4 rounded-lg bg-muted/50">
                    <p className="text-sm text-muted-foreground">
                      請求書払いをご希望の場合は、以下の情報が必要です。
                      お申し込み後、担当者よりご連絡いたします。
                    </p>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">会社名</label>
                    <Input placeholder="株式会社〇〇" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">部署名</label>
                    <Input placeholder="経理部" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">担当者名</label>
                    <Input placeholder="山田太郎" />
                  </div>
                </div>
              )}

              <div className="flex items-center gap-2 p-4 rounded-lg bg-green-50 border border-green-200">
                <Lock className="h-5 w-5 text-green-600" />
                <p className="text-sm text-green-700">
                  お支払い情報はSSLで暗号化され、安全に処理されます。
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>ご請求先情報</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">姓</label>
                  <Input placeholder="山田" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">名</label>
                  <Input placeholder="太郎" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">メールアドレス</label>
                <Input type="email" placeholder="example@email.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  郵便番号（任意）
                </label>
                <Input placeholder="123-4567" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 注文サマリー */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>ご注文内容</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{selectedPlan.name}プラン</p>
                  <p className="text-sm text-muted-foreground">
                    {selectedPlan.period}
                  </p>
                </div>
                <Badge>選択中</Badge>
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">小計</span>
                  <span>¥{selectedPlan.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">消費税（10%）</span>
                  <span>¥{Math.floor(selectedPlan.price * 0.1).toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2 border-t">
                  <span>合計</span>
                  <span>
                    ¥{Math.floor(selectedPlan.price * 1.1).toLocaleString()}
                  </span>
                </div>
              </div>

              <Button className="w-full" size="lg" asChild>
                <Link href="/payment/complete">
                  お支払いを確定する
                </Link>
              </Button>

              <div className="text-center">
                <p className="text-xs text-muted-foreground">
                  「お支払いを確定する」をクリックすると、
                  <Link href="/terms" className="text-primary hover:underline">
                    利用規約
                  </Link>
                  に同意したものとみなされます。
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="h-5 w-5 text-green-600" />
                <span className="font-medium">安心の保証</span>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  いつでもキャンセル可能
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  14日間の返金保証
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  セキュアな決済処理
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
