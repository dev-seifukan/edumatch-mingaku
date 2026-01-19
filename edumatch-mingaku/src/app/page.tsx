import { HeroNews } from "@/components/home/hero-news";
import { TopicsSection } from "@/components/home/topics-section";
import { LeftSidebar } from "@/components/home/left-sidebar";
import { RightSidebar } from "@/components/home/right-sidebar";

export default function HomePage() {
  return (
    <div className="bg-muted/30">
      <div className="container py-6">
        {/* 3カラムレイアウト (PC) / 1カラム (モバイル) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* 左サイドバー (約20%) - PCのみ表示 */}
          <aside className="lg:col-span-2 hidden lg:block">
            <LeftSidebar />
          </aside>

          {/* メインコンテンツ (約55%) */}
          <main className="lg:col-span-7 space-y-4">
            {/* トップニュース */}
            <section>
              <HeroNews />
            </section>

            {/* トピックス */}
            <section>
              <TopicsSection />
            </section>
          </main>

          {/* 右サイドバー (約25%) - PCのみ表示 */}
          <aside className="lg:col-span-3 hidden lg:block">
            <RightSidebar />
          </aside>
        </div>

        {/* タブレット・スマホ用: サイドバーを下に配置 */}
        <div className="lg:hidden mt-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-1">
              <LeftSidebar />
            </div>
            <div className="md:col-span-1">
              <RightSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
