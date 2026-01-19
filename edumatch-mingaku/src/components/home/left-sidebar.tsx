import Link from "next/link";
import {
  Search,
  BookOpen,
  MessageCircle,
  FileText,
  Users,
  HelpCircle,
  Newspaper,
  Building2,
} from "lucide-react";

const navigationItems = [
  {
    href: "/services",
    label: "サービスを探す",
    icon: Search,
  },
  {
    href: "/articles",
    label: "記事一覧",
    icon: Newspaper,
  },
  {
    href: "/services?category=learning",
    label: "学習管理",
    icon: BookOpen,
  },
  {
    href: "/services?category=communication",
    label: "コミュニケーション",
    icon: MessageCircle,
  },
  {
    href: "/services?category=assessment",
    label: "評価・分析",
    icon: FileText,
  },
  {
    href: "/services?category=collaboration",
    label: "協働学習",
    icon: Users,
  },
  {
    href: "/companies",
    label: "掲載企業一覧",
    icon: Building2,
  },
  {
    href: "/help",
    label: "ヘルプ",
    icon: HelpCircle,
  },
];

export function LeftSidebar() {
  return (
    <aside className="border rounded-lg bg-card">
      <div className="p-3 border-b">
        <h2 className="text-sm font-bold">メニュー</h2>
      </div>
      <nav>
        {navigationItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2 px-3 py-2.5 text-sm hover:bg-muted transition-colors ${
                index !== navigationItems.length - 1 ? "border-b" : ""
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
