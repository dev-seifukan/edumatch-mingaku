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
  Star,
  Calendar,
  Briefcase,
  LayoutDashboard,
  User,
  LogIn,
  Gift,
  Sparkles,
  Users,
  Scale,
} from "lucide-react";

const items = [
  { href: "/", label: "ホーム", icon: Home },
  { href: "/services", label: "サービスを探す", icon: Search },
  { href: "/articles", label: "記事一覧", icon: Newspaper },
  // { href: "/reviews", label: "レビュー一覧", icon: Star }, // Phase 2
  { href: "/cases", label: "導入事例", icon: Briefcase },
  // { href: "/events", label: "イベント", icon: Calendar }, // Phase 2
  { href: "/companies", label: "掲載企業一覧", icon: Building2 },
  { href: "/help", label: "ヘルプ", icon: HelpCircle },
];

const demos = [
  { href: "/articles/demo", label: "記事デモ", icon: FileText },
  { href: "/services/demo", label: "サービスデモ", icon: Search },
  { href: "/dashboard", label: "マイダッシュボード", icon: LayoutDashboard },
  { href: "/auth/login", label: "ログイン/登録", icon: LogIn },
  // { href: "/recommend", label: "レコメンド", icon: Sparkles }, // Phase 2
  { href: "/compare", label: "サービス比較", icon: Scale },
  { href: "/talent", label: "人材検索", icon: Users },
  { href: "/request-info", label: "資料請求", icon: FileBadge2 },
  { href: "/plans", label: "プラン選択", icon: CreditCard },
  // { href: "/articles/new", label: "記事投稿", icon: FilePlus2 }, // Phase 2
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
