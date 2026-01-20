import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, HelpCircle, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "フリー",
    price: "¥0",
    period: "永久無料",
    description: "基本機能を無料で利用できます",
    features: [
      { name: "記事閲覧（一部制限あり）", included: true },
      { name: "サービス検索", included: true },
      { name: "お気に入り登録（10件まで）", included: true },
      { name: "会員限定記事", included: false },
      { name: "詳細レポート", included: false },
      { name: "優先サポート", included: false },
      { name: "API連携", included: false },
    ],
    cta: "現在のプラン",
    ctaVariant: "outline" as const,
    popular: false,
    current: true,
  },
  {
    name: "スタンダード",
    price: "¥2,980",
    period: "月額",
    description: "すべての機能を利用できる標準プラン",
    features: [
      { name: "記事閲覧（無制限）", included: true },
      { name: "サービス検索", included: true },
      { name: "お気に入り登録（無制限）", included: true },
      { name: "会員限定記事", included: true },
      { name: "詳細レポート", included: true },
      { name: "優先サポート", included: false },
      { name: "API連携", included: false },
    ],
    cta: "このプランを選択",
    ctaVariant: "default" as const,
    popular: true,
    current: false,
  },
  {
    name: "プレミアム",
    price: "¥9,800",
    period: "月額",
    description: "大規模導入や高度な機能が必要な方へ",
    features: [
      { name: "記事閲覧（無制限）", included: true },
      { name: "サービス検索", included: true },
      { name: "お気に入り登録（無制限）", included: true },
      { name: "会員限定記事", included: true },
      { name: "詳細レポート", included: true },
      { name: "優先サポート", included: true },
      { name: "API連携", included: true },
    ],
    cta: "このプランを選択",
    ctaVariant: "outline" as const,
    popular: false,
    current: false,
  },
];

const faqs = [
  {
    question: "プランはいつでも変更できますか？",
    answer:
      "はい、いつでもプランの変更が可能です。アップグレードは即時反映、ダウングレードは次の請求サイクルから適用されます。",
  },
  {
    question: "解約した場合、データはどうなりますか？",
    answer:
      "解約後もデータは30日間保持されます。その間に再契約いただければ、データを復元できます。",
  },
  {
    question: "法人での一括契約は可能ですか？",
    answer:
      "はい、法人向けの一括契約プランをご用意しています。詳細はお問い合わせください。",
  },
];

export default function PlansPage() {
  return (
    <div className="container py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">プラン選択</h1>
        <p className="text-lg text-muted-foreground">
          あなたに最適なプランをお選びください
        </p>
      </div>

      {/* プラン比較 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`relative ${
              plan.popular ? "border-2 border-primary shadow-lg" : ""
            }`}
          >
            {plan.popular && (
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                人気No.1
              </Badge>
            )}
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-xl">{plan.name}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">/{plan.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                {plan.description}
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature.name} className="flex items-center gap-2">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground/30 flex-shrink-0" />
                    )}
                    <span
                      className={
                        feature.included ? "" : "text-muted-foreground/50"
                      }
                    >
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                className="w-full"
                variant={plan.ctaVariant}
                disabled={plan.current}
                asChild={!plan.current}
              >
                {plan.current ? (
                  <span>{plan.cta}</span>
                ) : (
                  <Link href="/payment">{plan.cta}</Link>
                )}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 年間契約の案内 */}
      <Card className="mb-12 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-2">
                年間契約で2ヶ月分お得に！
              </h3>
              <p className="text-muted-foreground">
                年間契約にすると、月額換算で約17%お得になります。
              </p>
            </div>
            <Button size="lg" className="gap-2">
              年間契約を見る
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* FAQ */}
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <HelpCircle className="h-6 w-6" />
          よくある質問
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <Card key={faq.question}>
              <CardContent className="p-4">
                <h3 className="font-bold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-6">
          <Button variant="link" asChild>
            <Link href="/faq">その他のFAQを見る</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
