"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  X,
  Star,
  Download,
  FileSpreadsheet,
  ArrowLeft,
  Plus,
  Trash2,
} from "lucide-react";

const allServices = [
  {
    id: "1",
    name: "ClassTech Pro",
    category: "学習管理",
    image: "https://placehold.co/100x60/fef3c7/ca8a04?text=CT",
    rating: 4.8,
    reviews: 125,
    price: "¥5,000/月〜",
    features: {
      lessonManagement: true,
      progressTracking: true,
      autoGrading: true,
      parentComm: false,
      analytics: true,
      api: true,
      support247: false,
      mobileApp: true,
    },
  },
  {
    id: "2",
    name: "EduCollabo",
    category: "コミュニケーション",
    image: "https://placehold.co/100x60/fed7aa/ea580c?text=EC",
    rating: 4.6,
    reviews: 89,
    price: "¥3,000/月〜",
    features: {
      lessonManagement: false,
      progressTracking: false,
      autoGrading: false,
      parentComm: true,
      analytics: false,
      api: false,
      support247: true,
      mobileApp: true,
    },
  },
  {
    id: "3",
    name: "SmartAssess",
    category: "評価・分析",
    image: "https://placehold.co/100x60/fecaca/dc2626?text=SA",
    rating: 4.9,
    reviews: 156,
    price: "¥8,000/月〜",
    features: {
      lessonManagement: false,
      progressTracking: true,
      autoGrading: true,
      parentComm: false,
      analytics: true,
      api: true,
      support247: false,
      mobileApp: false,
    },
  },
  {
    id: "4",
    name: "LearnSpace",
    category: "学習環境",
    image: "https://placehold.co/100x60/d9f99d/65a30d?text=LS",
    rating: 4.7,
    reviews: 102,
    price: "¥6,000/月〜",
    features: {
      lessonManagement: true,
      progressTracking: true,
      autoGrading: false,
      parentComm: true,
      analytics: false,
      api: true,
      support247: true,
      mobileApp: true,
    },
  },
];

const featureLabels: Record<string, string> = {
  lessonManagement: "授業管理",
  progressTracking: "進捗管理",
  autoGrading: "自動採点",
  parentComm: "保護者連携",
  analytics: "分析レポート",
  api: "API連携",
  support247: "24時間サポート",
  mobileApp: "モバイルアプリ",
};

export default function ComparePage() {
  const [selectedIds, setSelectedIds] = useState(["1", "2", "3"]);

  const selectedServices = allServices.filter((s) =>
    selectedIds.includes(s.id)
  );

  const toggleService = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((sid) => sid !== id));
    } else if (selectedIds.length < 4) {
      setSelectedIds([...selectedIds, id]);
    }
  };

  return (
    <div className="container py-8">
      <Button variant="ghost" asChild className="mb-4">
        <Link href="/services">
          <ArrowLeft className="h-4 w-4 mr-2" />
          サービス一覧に戻る
        </Link>
      </Button>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">サービス比較表</h1>
        <p className="text-muted-foreground">
          複数のサービスを比較して、最適なものを見つけましょう
        </p>
      </div>

      {/* サービス選択 */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-lg">比較するサービスを選択</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {allServices.map((service) => (
              <button
                key={service.id}
                onClick={() => toggleService(service.id)}
                className={`px-3 py-2 rounded-lg border-2 text-sm font-medium transition-colors ${
                  selectedIds.includes(service.id)
                    ? "border-primary bg-primary/5"
                    : "border-muted hover:border-muted-foreground/30"
                }`}
              >
                {selectedIds.includes(service.id) ? (
                  <Check className="h-4 w-4 inline mr-1" />
                ) : (
                  <Plus className="h-4 w-4 inline mr-1" />
                )}
                {service.name}
              </button>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            {selectedIds.length}/4 サービスを選択中
          </p>
        </CardContent>
      </Card>

      {/* エクスポートボタン */}
      <div className="flex gap-2 mb-6">
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          PDFで出力
        </Button>
        <Button variant="outline" className="gap-2">
          <FileSpreadsheet className="h-4 w-4" />
          Excelで出力
        </Button>
      </div>

      {/* 比較表 */}
      <div className="overflow-x-auto">
        <Card>
          <CardContent className="p-0">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b">
                  <th className="p-4 text-left font-medium text-muted-foreground w-40">
                    項目
                  </th>
                  {selectedServices.map((service) => (
                    <th key={service.id} className="p-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <Image
                          src={service.image}
                          alt={service.name}
                          width={60}
                          height={36}
                          className="rounded"
                          unoptimized
                        />
                        <span className="font-bold">{service.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {service.category}
                        </Badge>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* 基本情報 */}
                <tr className="border-b bg-muted/30">
                  <td className="p-4 font-medium" colSpan={selectedServices.length + 1}>
                    基本情報
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 text-muted-foreground">評価</td>
                  {selectedServices.map((service) => (
                    <td key={service.id} className="p-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-bold">{service.rating}</span>
                        <span className="text-sm text-muted-foreground">
                          ({service.reviews})
                        </span>
                      </div>
                    </td>
                  ))}
                </tr>
                <tr className="border-b">
                  <td className="p-4 text-muted-foreground">価格</td>
                  {selectedServices.map((service) => (
                    <td
                      key={service.id}
                      className="p-4 text-center font-semibold text-primary"
                    >
                      {service.price}
                    </td>
                  ))}
                </tr>

                {/* 機能比較 */}
                <tr className="border-b bg-muted/30">
                  <td className="p-4 font-medium" colSpan={selectedServices.length + 1}>
                    機能比較
                  </td>
                </tr>
                {Object.keys(featureLabels).map((featureKey) => (
                  <tr key={featureKey} className="border-b">
                    <td className="p-4 text-muted-foreground">
                      {featureLabels[featureKey]}
                    </td>
                    {selectedServices.map((service) => (
                      <td key={service.id} className="p-4 text-center">
                        {service.features[featureKey as keyof typeof service.features] ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground/30 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}

                {/* アクション */}
                <tr>
                  <td className="p-4"></td>
                  {selectedServices.map((service) => (
                    <td key={service.id} className="p-4 text-center">
                      <div className="space-y-2">
                        <Button asChild className="w-full">
                          <Link href={`/services/${service.id}`}>
                            詳細を見る
                          </Link>
                        </Button>
                        <Button variant="outline" className="w-full" asChild>
                          <Link href="/request-info">資料請求</Link>
                        </Button>
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>

      {selectedServices.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">
            比較するサービスを選択してください
          </p>
          <Button asChild>
            <Link href="/services">サービスを探す</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
