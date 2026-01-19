import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Tag, ArrowRight } from "lucide-react";

const demoArticles = [
  {
    id: 1,
    title: "ICT活用で実現する授業改善の新しいカタチ",
    image: "https://placehold.co/600x360/e2e8f0/334155?text=Demo+Article+1",
    category: "教育ICT",
    date: "2024-01-12",
    tags: ["ICT", "授業改善"],
  },
  {
    id: 2,
    title: "導入事例：タブレット活用で学習効果が向上",
    image: "https://placehold.co/600x360/f1f5f9/0f172a?text=Demo+Article+2",
    category: "導入事例",
    date: "2024-01-10",
    tags: ["事例", "タブレット"],
  },
  {
    id: 3,
    title: "学校運営を効率化するクラウドツール活用術",
    image: "https://placehold.co/600x360/e2e8f0/334155?text=Demo+Article+3",
    category: "学校運営",
    date: "2024-01-08",
    tags: ["運営", "クラウド"],
  },
];

export default function ArticlesDemoPage() {
  return (
    <div className="container py-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">記事ページのデモ</h1>
          <p className="text-muted-foreground">
            記事の見せ方やレイアウトのサンプルです
          </p>
        </div>
        <Link
          href="/articles"
          className="text-sm text-primary hover:underline"
        >
          記事一覧を見る
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {demoArticles.map((article) => (
          <Card key={article.id} className="overflow-hidden">
            <div className="relative h-40 w-full">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <CardContent className="p-4">
              <Badge variant="secondary" className="mb-2">
                {article.category}
              </Badge>
              <h3 className="font-semibold mb-2 line-clamp-2">
                {article.title}
              </h3>
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                <Calendar className="h-3 w-3" />
                {new Date(article.date).toLocaleDateString("ja-JP")}
              </div>
              <div className="flex flex-wrap gap-1 mb-3">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
              <Link
                href={`/articles/${article.id}`}
                className="text-sm text-primary hover:underline inline-flex items-center gap-1"
              >
                記事を読む
                <ArrowRight className="h-3 w-3" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
