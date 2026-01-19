import Link from "next/link";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const allArticles = [
  {
    id: 1,
    title: "EdTechツール選びの完全ガイド",
    image: "https://placehold.co/80x80/fef3c7/ca8a04?text=1",
    date: "01/15 12:00",
    category: "教育ICT",
    isNew: true,
  },
  {
    id: 2,
    title: "学校DX推進のためのステップ",
    image: "https://placehold.co/80x80/fed7aa/ea580c?text=2",
    date: "01/15 10:30",
    category: "導入事例",
    isNew: true,
  },
  {
    id: 3,
    title: "保護者とのコミュニケーション改善術",
    image: "https://placehold.co/80x80/fecaca/dc2626?text=3",
    date: "01/14 18:00",
    category: "学校運営",
    isNew: false,
  },
  {
    id: 4,
    title: "クラウド活用で実現する働き方改革",
    image: "https://placehold.co/80x80/d9f99d/65a30d?text=4",
    date: "01/14 15:30",
    category: "教育ICT",
    isNew: false,
  },
  {
    id: 5,
    title: "データドリブンな教育改善の実践",
    image: "https://placehold.co/80x80/bfdbfe/2563eb?text=5",
    date: "01/14 12:00",
    category: "導入事例",
    isNew: false,
  },
  {
    id: 6,
    title: "セキュリティ対策のベストプラクティス",
    image: "https://placehold.co/80x80/e9d5ff/9333ea?text=6",
    date: "01/13 16:00",
    category: "教育ICT",
    isNew: false,
  },
  {
    id: 7,
    title: "オンライン授業の効果的な進め方",
    image: "https://placehold.co/80x80/f0f9ff/0284c7?text=7",
    date: "01/13 14:00",
    category: "学校運営",
    isNew: false,
  },
  {
    id: 8,
    title: "AIを活用した個別最適化学習",
    image: "https://placehold.co/80x80/fff7ed/f59e0b?text=8",
    date: "01/13 10:00",
    category: "導入事例",
    isNew: false,
  },
];

const ictArticles = allArticles.filter((a) => a.category === "教育ICT");
const caseArticles = allArticles.filter((a) => a.category === "導入事例");
const managementArticles = allArticles.filter((a) => a.category === "学校運営");

function ArticleListItem({
  article,
}: {
  article: (typeof allArticles)[0];
}) {
  return (
    <Link
      href={`/articles/${article.id}`}
      className="flex gap-3 py-2.5 px-2 -mx-2 border-b last:border-b-0 hover:bg-muted/50 transition-colors"
    >
      <div className="relative h-16 w-16 flex-shrink-0 rounded overflow-hidden border bg-muted">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          sizes="64px"
          unoptimized
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start gap-2 mb-1">
          {article.isNew && (
            <Badge className="bg-[#ef4444] hover:bg-[#dc2626] text-white text-xs px-1.5 py-0">
              NEW
            </Badge>
          )}
          <h3 className="font-medium text-sm hover:text-[#1d4ed8] transition-colors line-clamp-2 flex-1">
            {article.title}
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>{article.date}</span>
          <span>•</span>
          <span className="text-[#ef4444]">{article.category}</span>
        </div>
      </div>
    </Link>
  );
}

export function TopicsSection() {
  return (
    <div className="border rounded-lg bg-card">
      <div className="p-3 border-b">
        <h2 className="text-sm font-bold">トピックス</h2>
      </div>
      <Tabs defaultValue="all" className="w-full">
        <div className="border-b">
          <TabsList className="w-full justify-start rounded-none h-auto bg-transparent p-0">
            <TabsTrigger
              value="all"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#1d4ed8] data-[state=active]:bg-transparent px-4 py-2 text-sm"
            >
              すべて
            </TabsTrigger>
            <TabsTrigger
              value="ict"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#1d4ed8] data-[state=active]:bg-transparent px-4 py-2 text-sm"
            >
              教育ICT
            </TabsTrigger>
            <TabsTrigger
              value="case"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#1d4ed8] data-[state=active]:bg-transparent px-4 py-2 text-sm"
            >
              導入事例
            </TabsTrigger>
            <TabsTrigger
              value="management"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#1d4ed8] data-[state=active]:bg-transparent px-4 py-2 text-sm"
            >
              学校運営
            </TabsTrigger>
          </TabsList>
        </div>
        <div className="p-3">
          <TabsContent value="all" className="mt-0 space-y-0">
            {allArticles.map((article) => (
              <ArticleListItem key={article.id} article={article} />
            ))}
          </TabsContent>
          <TabsContent value="ict" className="mt-0 space-y-0">
            {ictArticles.map((article) => (
              <ArticleListItem key={article.id} article={article} />
            ))}
          </TabsContent>
          <TabsContent value="case" className="mt-0 space-y-0">
            {caseArticles.map((article) => (
              <ArticleListItem key={article.id} article={article} />
            ))}
          </TabsContent>
          <TabsContent value="management" className="mt-0 space-y-0">
            {managementArticles.map((article) => (
              <ArticleListItem key={article.id} article={article} />
            ))}
          </TabsContent>
        </div>
      </Tabs>
      <div className="border-t p-3 text-center">
        <Link
          href="/articles"
          className="text-sm text-[#1d4ed8] hover:underline font-medium"
        >
          記事一覧を見る
        </Link>
      </div>
    </div>
  );
}
