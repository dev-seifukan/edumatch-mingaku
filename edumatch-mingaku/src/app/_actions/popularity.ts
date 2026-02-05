"use server";

import { prisma } from "@/lib/prisma";

/**
 * サービスのお気に入り数をインクリメント
 */
export async function incrementServiceFavoriteCount(serviceId: string) {
  try {
    await prisma.service.update({
      where: { id: serviceId },
      data: { favorite_count: { increment: 1 } },
    });
  } catch (error) {
    console.error("Failed to increment service favorite count:", error);
  }
}

/**
 * サービスのお気に入り数をデクリメント
 */
export async function decrementServiceFavoriteCount(serviceId: string) {
  try {
    await prisma.service.update({
      where: { id: serviceId },
      data: { favorite_count: { decrement: 1 } },
    });
  } catch (error) {
    console.error("Failed to decrement service favorite count:", error);
  }
}

/**
 * 記事のお気に入り数をインクリメント
 */
export async function incrementArticleFavoriteCount(articleId: string) {
  try {
    await prisma.post.update({
      where: { id: articleId },
      data: { favorite_count: { increment: 1 } },
    });
  } catch (error) {
    console.error("Failed to increment article favorite count:", error);
  }
}

/**
 * 記事のお気に入り数をデクリメント
 */
export async function decrementArticleFavoriteCount(articleId: string) {
  try {
    await prisma.post.update({
      where: { id: articleId },
      data: { favorite_count: { decrement: 1 } },
    });
  } catch (error) {
    console.error("Failed to decrement article favorite count:", error);
  }
}

/**
 * サービスの資料請求リスト追加数をインクリメント
 */
export async function incrementServiceRequestCount(serviceId: string) {
  try {
    await prisma.service.update({
      where: { id: serviceId },
      data: { request_count: { increment: 1 } },
    });
  } catch (error) {
    console.error("Failed to increment service request count:", error);
  }
}

/**
 * サービスの資料請求リスト追加数をデクリメント
 */
export async function decrementServiceRequestCount(serviceId: string) {
  try {
    await prisma.service.update({
      where: { id: serviceId },
      data: { request_count: { decrement: 1 } },
    });
  } catch (error) {
    console.error("Failed to decrement service request count:", error);
  }
}

/**
 * 人気のサービスを取得（お気に入り数 + 資料請求数の合計でソート）
 */
export async function getPopularServicesByEngagement(limit: number = 10) {
  try {
    const services = await prisma.service.findMany({
      where: {
        OR: [{ status: "APPROVED" }, { is_published: true }],
      },
      select: {
        id: true,
        title: true,
        thumbnail_url: true,
        category: true,
        favorite_count: true,
        request_count: true,
      },
      take: limit * 2, // 多めに取得してソート
    });

    // お気に入り数 + 資料請求数でソート
    return services
      .sort((a, b) => {
        const scoreA = a.favorite_count + a.request_count;
        const scoreB = b.favorite_count + b.request_count;
        return scoreB - scoreA;
      })
      .slice(0, limit);
  } catch (error) {
    console.error("Failed to get popular services:", error);
    return [];
  }
}

/**
 * 人気の記事を取得（お気に入り数でソート）
 */
export async function getPopularArticlesByEngagement(limit: number = 10) {
  try {
    const articles = await prisma.post.findMany({
      where: {
        OR: [{ status: "APPROVED" }, { is_published: true }],
      },
      select: {
        id: true,
        title: true,
        thumbnail_url: true,
        content: true,
        favorite_count: true,
      },
      orderBy: {
        favorite_count: "desc",
      },
      take: limit,
    });

    return articles.map((article) => ({
      id: article.id,
      title: article.title,
      thumbnail_url: article.thumbnail_url,
      category: article.content.includes("ICT") || article.content.includes("デジタル") ? "教育ICT" :
                article.content.includes("事例") || article.content.includes("実践") ? "導入事例" :
                article.content.includes("運営") || article.content.includes("保護者") ? "学校運営" : "教育ICT",
    }));
  } catch (error) {
    console.error("Failed to get popular articles:", error);
    return [];
  }
}
