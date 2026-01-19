import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const heroNews = {
  id: 1,
  title: "2024年度、教育現場で注目のICTツール5選を徹底解説",
  image: "https://placehold.co/800x450/e0f2fe/0369a1?text=Hero%20News",
  category: "特集",
  date: "2024-01-15 12:30",
};

const relatedNews = [
  {
    id: 2,
    title: "GIGAスクール構想の最新動向と今後の展望",
    date: "2024-01-15 10:00",
  },
  {
    id: 3,
    title: "オンライン授業を効果的にする3つのポイント",
    date: "2024-01-14 18:30",
  },
  {
    id: 4,
    title: "小学校プログラミング教育の実践例",
    date: "2024-01-14 15:00",
  },
];

export function HeroNews() {
  return (
    <div className="border rounded-lg bg-card overflow-hidden">
      {/* メインニュース */}
      <Link href={`/articles/${heroNews.id}`} className="block group">
        <div className="relative h-64 w-full bg-muted">
          <Image
            src={heroNews.image}
            alt={heroNews.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 55vw"
            priority
            unoptimized
          />
          <Badge className="absolute top-3 left-3 bg-[#ef4444] hover:bg-[#dc2626] text-white">
            {heroNews.category}
          </Badge>
        </div>
        <div className="p-4 border-b">
          <h2 className="text-lg font-bold mb-2 group-hover:text-[#1d4ed8] transition-colors line-clamp-2">
            {heroNews.title}
          </h2>
          <p className="text-xs text-muted-foreground">{heroNews.date}</p>
        </div>
      </Link>

      {/* 関連ニュース */}
      <div className="p-3">
        <ul className="space-y-2">
          {relatedNews.map((news) => (
            <li key={news.id} className="flex items-start gap-2">
              <span className="text-muted-foreground mt-1 flex-shrink-0">•</span>
              <div className="flex-1 min-w-0">
                <Link
                  href={`/articles/${news.id}`}
                  className="text-sm hover:text-[#1d4ed8] transition-colors line-clamp-2"
                >
                  {news.title}
                </Link>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {news.date}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
