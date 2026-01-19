import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, ExternalLink } from "lucide-react";

const companies = [
  {
    id: 1,
    name: "ClassTech株式会社",
    service: "ClassTech Pro",
    location: "東京都",
    category: "学習管理",
    image: "https://placehold.co/200x200/fef3c7/ca8a04?text=CT",
  },
  {
    id: 2,
    name: "EduCollabo株式会社",
    service: "EduCollabo",
    location: "大阪府",
    category: "コミュニケーション",
    image: "https://placehold.co/200x200/fed7aa/ea580c?text=EC",
  },
  {
    id: 3,
    name: "SmartAssess株式会社",
    service: "SmartAssess",
    location: "愛知県",
    category: "評価・分析",
    image: "https://placehold.co/200x200/fecaca/dc2626?text=SA",
  },
  {
    id: 4,
    name: "LearnSpace株式会社",
    service: "LearnSpace",
    location: "福岡県",
    category: "学習環境",
    image: "https://placehold.co/200x200/d9f99d/65a30d?text=LS",
  },
  {
    id: 5,
    name: "TeamEdu株式会社",
    service: "TeamEdu",
    location: "北海道",
    category: "協働学習",
    image: "https://placehold.co/200x200/bfdbfe/2563eb?text=TE",
  },
  {
    id: 6,
    name: "EduAnalytics株式会社",
    service: "EduAnalytics",
    location: "宮城県",
    category: "評価・分析",
    image: "https://placehold.co/200x200/e9d5ff/9333ea?text=EA",
  },
];

export default function CompaniesPage() {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">掲載企業一覧</h1>
        <p className="text-muted-foreground">
          Edumatchに掲載されている企業一覧です
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company) => (
          <Card key={company.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <div className="relative h-16 w-16 rounded-md overflow-hidden border bg-muted">
                  <Image
                    src={company.image}
                    alt={company.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{company.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    提供サービス: {company.service}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4" />
                    {company.location}
                  </div>
                  <Badge variant="secondary">{company.category}</Badge>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <Button asChild variant="outline" size="sm" className="flex-1">
                  <Link href={`/services/${company.id}`}>
                    サービス詳細
                  </Link>
                </Button>
                <Button asChild size="sm" className="flex-1">
                  <Link href={`/services/${company.id}`}>
                    <ExternalLink className="h-4 w-4 mr-1" />
                    公式サイト
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
