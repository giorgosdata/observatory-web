import type { Metadata } from "next";
import Image from "next/image";
import { cache } from "react";
import { sanity } from "@/lib/sanity.client";
import { POST_BY_SLUG } from "@/lib/sanity.queries";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/lib/sanity.image";
import { notFound } from "next/navigation";

const getPost = cache((slug: string) => sanity.fetch(POST_BY_SLUG, { slug }));

type Post = {
  title?: { el?: string; en?: string } | string;
  excerpt?: { el?: string; en?: string } | string;
  body?: { el?: any[]; en?: any[] } | any[];
  metaTitle?: { el?: string; en?: string } | string;
  metaDescription?: { el?: string; en?: string } | string;
  publishedAt?: string;
  slug?: string;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const lang = locale === "en" ? "en" : "el";

  const post: Post | null = await getPost(slug);
  if (!post) return {};

  const title =
    typeof post.metaTitle === "string"
      ? post.metaTitle
      : post.metaTitle?.[lang] ??
        (typeof post.title === "string" ? post.title : post.title?.[lang] ?? post.title?.el ?? "");

  const description =
    typeof post.metaDescription === "string"
      ? post.metaDescription
      : post.metaDescription?.[lang] ??
        (typeof post.excerpt === "string" ? post.excerpt : post.excerpt?.[lang] ?? post.excerpt?.el ?? "");

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params; // ✅ ΜΕ await

  const lang = locale === "en" ? "en" : "el";

  if (!slug) return notFound();

  const post: Post | null = await getPost(slug);

  if (!post) return notFound();

  const title =
    typeof post.title === "string"
      ? post.title
      : post.title?.[lang] ?? post.title?.el ?? "";

  const excerpt =
    typeof post.excerpt === "string"
      ? post.excerpt
      : post.excerpt?.[lang] ?? post.excerpt?.el ?? "";

  const body = Array.isArray(post.body)
    ? post.body
    : post.body?.[lang] ?? post.body?.el ?? [];

  return (
    <main style={{ padding: "28px 16px", maxWidth: 920, margin: "0 auto" }}>
      <h1 style={{ marginBottom: 10, fontSize: 34, lineHeight: 1.15 }}>
        {title}
      </h1>

      {excerpt ? (
        <p style={{ opacity: 0.85, lineHeight: 1.9, maxWidth: 780 }}>
          {excerpt}
        </p>
      ) : null}

      <section className="article" style={{ marginTop: 18 }}>
        <PortableText
          value={body}
          components={{
            types: {
              image: ({ value }: any) => {
                // ✅ μην σκάει ποτέ αν έρθει image χωρίς asset
                if (!value?.asset) return null;

                const src = urlFor(value).width(1200).quality(80).url();
                const alt = value?.alt || "";

                return (
                  <figure style={{ margin: "18px 0" }}>
                    <Image
                      src={src}
                      alt={alt}
                      width={1200}
                      height={675}
                      sizes="(max-width: 920px) 100vw, 920px"
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: 16,
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    />
                    {alt ? (
                      <figcaption
                        style={{ marginTop: 8, opacity: 0.7, fontSize: 13 }}
                      >
                        {alt}
                      </figcaption>
                    ) : null}
                  </figure>
                );
              },
            },
          }}
        />
      </section>
    </main>
  );
}
