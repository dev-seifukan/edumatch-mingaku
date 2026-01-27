import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const { email, password, userType } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "メールアドレスとパスワードを入力してください" },
        { status: 400 }
      );
    }

    if (!userType || (userType !== "viewer" && userType !== "provider")) {
      return NextResponse.json(
        { error: "アカウントタイプを選択してください" },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 401 }
      );
    }

    if (!data.user) {
      return NextResponse.json(
        { error: "ログインに失敗しました" },
        { status: 500 }
      );
    }

    // Profileテーブルにレコードが存在するか確認
    let existingProfile = null;
    try {
      existingProfile = await prisma.profile.findUnique({
        where: { id: data.user.id },
      });
    } catch (dbError) {
      console.error("Profile lookup error:", dbError);
      // DB接続エラーでも続行（Profileなしとして扱う）
    }

    // Profileが存在しない場合は作成
    if (!existingProfile) {
      const userMetadata = data.user.user_metadata || {};
      const name = userMetadata.name || userMetadata.full_name || data.user.email?.split("@")[0] || "ユーザー";

      try {
        existingProfile = await prisma.profile.create({
          data: {
            id: data.user.id,
            name,
            email: data.user.email || "",
            role: "VIEWER",
            subscription_status: "INACTIVE",
            avatar_url: userMetadata.avatar_url || userMetadata.picture || null,
          },
        });
      } catch (profileError) {
        console.error("Profile creation error:", profileError);
        return NextResponse.json(
          { error: "プロフィールの作成に失敗しました" },
          { status: 500 }
        );
      }
    }

    // ロールチェック（必須）
    if (!existingProfile) {
      return NextResponse.json(
        { error: "プロフィールが見つかりませんでした" },
        { status: 404 }
      );
    }

    const expectedRole = userType === "provider" ? "PROVIDER" : "VIEWER";
    if (existingProfile.role !== expectedRole) {
      return NextResponse.json(
        { error: `このアカウントは${existingProfile.role === "PROVIDER" ? "投稿者" : "閲覧者"}アカウントです。正しいアカウントタイプでログインしてください。` },
        { status: 403 }
      );
    }

    return NextResponse.json({
      user: data.user,
      session: data.session,
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "ログインに失敗しました" },
      { status: 500 }
    );
  }
}
