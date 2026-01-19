import Link from "next/link";
import {
  Home,
  Search,
  Newspaper,
  MessageCircle,
  FileText,
  Building2,
  HelpCircle,
  CreditCard,
  FilePlus2,
  FileBadge2,
} from "lucide-react";

const items = [
  { href: "/", label: "ホーム", icon: Home },
  { href: "/services", label: "サービスを探す", icon: Search },
  { href: "/articles", label: "記事一覧", icon: Newspaper },
  { href: "/communication", label: "コミュニケーション", icon: MessageCircle },
  { href: "/assessment", label: "評価・分析", icon: FileText },
  { href: "/companies", label: "掲載企業一覧", icon: Building2 },
  { href: "/help", label: "ヘルプ", icon: HelpCircle },
];

const demos = [
  { href: "/request-info", label: "資料請求（デモ）", icon: FileBadge2 },
  { href: "/billing", label: "課金（デモ）", icon: CreditCard },
  { href: "/articles/new", label: "記事投稿（デモ）", icon: FilePlus2 },
  { href: "/articles/demo", label: "記事ページ（デモ）", icon: FileText },
];

export function SideMenu() {
  return (
    <aside className="border rounded-lg bg-card overflow-hidden">
      <div className="p-3 border-b">
        <h2 className="text-sm font-bold">メニュー</h2>
      </div>
      <nav>
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2 px-3 py-2.5 text-sm hover:bg-muted transition-colors ${
                index !== items.length - 1 ? "border-b" : ""
              }`}
            >
              <Icon className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <span className="hover:text-[#1d4ed8] transition-colors">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="p-3 border-y bg-muted/30">
        <h3 className="text-xs font-semibold text-muted-foreground">
          デモ / 管理
        </h3>
      </div>
      <nav>
        {demos.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2 px-3 py-2.5 text-sm hover:bg-muted transition-colors ${
                index !== demos.length - 1 ? "border-b" : ""
              }`}
            >
              <Icon className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <span className="hover:text-[#1d4ed8] transition-colors">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
