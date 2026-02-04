"use client";

import Image from "next/image";
import { useMemo } from "react";

type ContentBlock = {
  type: "text" | "image";
  content: string;
};

/**
 * 本文コンテンツをパースして、画像URLを検出
 */
function parseContent(content: string): ContentBlock[] {
  const blocks: ContentBlock[] = [];
  
  // 画像URLのパターン（http/httpsで始まり、画像拡張子で終わる）
  const imageUrlPattern = /(https?:\/\/[^\s]+\.(?:jpg|jpeg|png|gif|webp|svg)(?:\?[^\s]*)?)/gi;
  
  let lastIndex = 0;
  let match;
  
  // 正規表現でマッチするすべての画像URLを検出
  const regex = new RegExp(imageUrlPattern);
  
  while ((match = regex.exec(content)) !== null) {
    // マッチ前のテキストを追加
    if (match.index > lastIndex) {
      const textBefore = content.substring(lastIndex, match.index);
      if (textBefore.trim()) {
        blocks.push({ type: "text", content: textBefore });
      }
    }
    
    // 画像URLを追加
    blocks.push({ type: "image", content: match[0] });
    lastIndex = regex.lastIndex;
  }
  
  // 最後の残りのテキストを追加
  if (lastIndex < content.length) {
    const textAfter = content.substring(lastIndex);
    if (textAfter.trim()) {
      blocks.push({ type: "text", content: textAfter });
    }
  }
  
  // 画像が見つからなかった場合は、全体をテキストとして扱う
  if (blocks.length === 0) {
    blocks.push({ type: "text", content });
  }
  
  return blocks;
}

type ContentRendererProps = {
  content: string;
  className?: string;
};

/**
 * コンテンツをレンダリングするコンポーネント
 * テキストと画像URLを自動的に判別して表示
 */
export function ContentRenderer({ content, className }: ContentRendererProps) {
  const blocks = useMemo(() => parseContent(content), [content]);
  
  return (
    <div className={className}>
      {blocks.map((block, index) => {
        if (block.type === "image") {
          return (
            <div
              key={index}
              className="my-6 relative w-full rounded-lg overflow-hidden bg-muted"
            >
              <div className="relative aspect-video w-full">
                <Image
                  src={block.content}
                  alt={`コンテンツ画像 ${index + 1}`}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          );
        }
        
        return (
          <div
            key={index}
            className="whitespace-pre-wrap text-foreground leading-relaxed"
          >
            {block.content}
          </div>
        );
      })}
    </div>
  );
}
