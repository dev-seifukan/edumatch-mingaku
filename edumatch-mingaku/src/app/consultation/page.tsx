"use client";

import { useState } from "react";
import Link from "next/link";
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
import {
  Calendar,
  Clock,
  Video,
  Phone,
  MessageSquare,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";

const consultationTypes = [
  { value: "general", label: "一般相談", icon: MessageSquare },
  { value: "online", label: "オンライン相談", icon: Video },
  { value: "phone", label: "電話相談", icon: Phone },
];

const timeSlots = [
  "10:00", "10:30", "11:00", "11:30",
  "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30",
];

const topics = [
  { value: "introduction", label: "EdTech導入相談" },
  { value: "comparison", label: "サービス比較・選定" },
  { value: "budget", label: "予算・コスト相談" },
  { value: "implementation", label: "導入・運用サポート" },
  { value: "other", label: "その他" },
];

export default function ConsultationPage() {
  const [consultationType, setConsultationType] = useState("online");
  const [topic, setTopic] = useState("");
  const [date1, setDate1] = useState("");
  const [time1, setTime1] = useState("");
  const [date2, setDate2] = useState("");
  const [time2, setTime2] = useState("");
  const [date3, setDate3] = useState("");
  const [time3, setTime3] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="container py-8">
      <Button variant="ghost" asChild className="mb-4">
        <Link href="/">
          <ArrowLeft className="h-4 w-4 mr-2" />
          戻る
        </Link>
      </Button>

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">無料相談予約</h1>
          <p className="text-muted-foreground">
            EdTech導入のプロが、あなたの課題解決をサポートします
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>予約フォーム</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 相談形式 */}
            <div className="space-y-2">
              <label className="text-sm font-medium">
                相談形式 <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-3 gap-4">
                {consultationTypes.map((type) => {
                  const Icon = type.icon;
                  return (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() => setConsultationType(type.value)}
                      className={`p-4 rounded-lg border-2 text-center transition-colors ${
                        consultationType === type.value
                          ? "border-primary bg-primary/5"
                          : "border-muted hover:border-muted-foreground/30"
                      }`}
                    >
                      <Icon className="h-6 w-6 mx-auto mb-2" />
                      <span className="text-sm font-medium">{type.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 相談内容 */}
            <div className="space-y-2">
              <label className="text-sm font-medium">
                相談内容 <span className="text-red-500">*</span>
              </label>
              <Select value={topic} onValueChange={setTopic}>
                <SelectTrigger>
                  <SelectValue placeholder="相談内容を選択してください" />
                </SelectTrigger>
                <SelectContent>
                  {topics.map((t) => (
                    <SelectItem key={t.value} value={t.value}>
                      {t.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* 希望日時 */}
            <div className="space-y-4">
              <label className="text-sm font-medium">
                希望日時 <span className="text-red-500">*</span>
                <span className="text-muted-foreground font-normal ml-2">
                  （第3希望まで）
                </span>
              </label>

              {/* 第1希望 */}
              <div className="p-4 rounded-lg bg-muted/50">
                <div className="flex items-center gap-2 mb-3">
                  <Badge>第1希望</Badge>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs text-muted-foreground">日付</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="date"
                        value={date1}
                        onChange={(e) => setDate1(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-muted-foreground">時間</label>
                    <Select value={time1} onValueChange={setTime1}>
                      <SelectTrigger>
                        <Clock className="h-4 w-4 mr-2" />
                        <SelectValue placeholder="時間を選択" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* 第2希望 */}
              <div className="p-4 rounded-lg bg-muted/30">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">第2希望</Badge>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs text-muted-foreground">日付</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="date"
                        value={date2}
                        onChange={(e) => setDate2(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-muted-foreground">時間</label>
                    <Select value={time2} onValueChange={setTime2}>
                      <SelectTrigger>
                        <Clock className="h-4 w-4 mr-2" />
                        <SelectValue placeholder="時間を選択" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* 第3希望 */}
              <div className="p-4 rounded-lg bg-muted/30">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline">第3希望</Badge>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs text-muted-foreground">日付</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="date"
                        value={date3}
                        onChange={(e) => setDate3(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-muted-foreground">時間</label>
                    <Select value={time3} onValueChange={setTime3}>
                      <SelectTrigger>
                        <Clock className="h-4 w-4 mr-2" />
                        <SelectValue placeholder="時間を選択" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>

            {/* 連絡先 */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="山田太郎"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="email"
                    placeholder="example@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">学校名・組織名</label>
                <Input
                  placeholder="○○学校"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  事前に伝えておきたいこと（任意）
                </label>
                <Textarea
                  placeholder="相談内容の詳細や、現在の課題などを教えてください"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>

            {/* 注意事項 */}
            <div className="p-4 rounded-lg bg-green-50 border border-green-200">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-green-700">
                  <p className="font-medium mb-1">無料相談について</p>
                  <ul className="space-y-1">
                    <li>・相談時間は30分〜1時間程度です</li>
                    <li>・オンライン相談はZoomを使用します</li>
                    <li>・予約確定後、詳細をメールでお送りします</li>
                  </ul>
                </div>
              </div>
            </div>

            <Button className="w-full" size="lg">
              予約を申し込む
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
