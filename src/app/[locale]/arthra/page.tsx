import Link from "next/link";
import Image from "next/image";
import { sanity } from "@/lib/sanity.client";
import { POSTS_LIST, NOTES_LIST } from "@/lib/sanity.queries";
import styles from "./arthra.module.css";

type PostListItem = {
  _id: string;
  title?: { el?: string; en?: string } | string;
  excerpt?: { el?: string; en?: string } | string;
  penName?: string;
  slug?: string;
  publishedAt?: string;
  coverImage?: {
    alt?: string;
    asset?: { url?: string };
  };
};

type NoteListItem = {
  _id: string;
  body?: string;
  publishedAt?: string;
  isPublished?: boolean;
};

export default async function ArticlesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang: "el" | "en" = locale === "en" ? "en" : "el";
  const p = (href: string) => `/${locale}${href}`;

  const [posts, notes]: [PostListItem[], NoteListItem[]] = await Promise.all([
    sanity.fetch(POSTS_LIST),
    sanity.fetch(NOTES_LIST),
  ]);

  const t = (v: any) => (typeof v === "string" ? v : v?.[lang] ?? v?.el ?? "");

  const copy = {
    el: {
      title: "Άρθρα",
      notesTitle: "Σημειώσεις",
      by: "Από",
      read: "Διάβασε",
      emptyPosts: "Δεν υπάρχουν άρθρα ακόμα.",
      emptyNotes: "Δεν υπάρχουν σημειώσεις ακόμα.",
    },
    en: {
      title: "Articles",
      notesTitle: "Notes",
      by: "By",
      read: "Read",
      emptyPosts: "No articles yet.",
      emptyNotes: "No notes yet.",
    },
  }[lang];

  return (
    <main style={{ padding: "28px 16px", maxWidth: 1100, margin: "0 auto" }}>
      <div className={styles.layout}>
        {/* LEFT: Articles */}
        <section className={styles.col}>
          <div className={styles.hrow}>
            <h1>{copy.title}</h1>
          </div>

          <div className={styles.list}>
            {posts?.length ? (
              posts.map((post) => {
                const title = t(post.title);
                const excerpt = t(post.excerpt);
                const penName = post.penName;

                return (
                  <article key={post._id} className={styles.card}>
                    {post.coverImage?.asset?.url ? (
                      <Image
                        className={styles.cover}
                        src={post.coverImage.asset.url}
                        alt={post.coverImage.alt || title || ""}
                        width={800}
                        height={160}
                        style={{ objectFit: "cover" }}
                      />
                    ) : null}

                    <h3 className={styles.title}>{title}</h3>

                    {penName ? (
                      <p className={styles.meta}>
                        {copy.by} {penName}
                      </p>
                    ) : null}

                    {excerpt ? <p className={styles.excerpt}>{excerpt}</p> : null}

                    {post.slug ? (
                      <Link className={styles.btn} href={p(`/arthra/${post.slug}`)}>
                        {copy.read} →
                      </Link>
                    ) : null}
                  </article>
                );
              })
            ) : (
              <p className={styles.empty}>{copy.emptyPosts}</p>
            )}
          </div>
        </section>

        {/* RIGHT: Notes */}
        <aside className={styles.col}>
          <div className={styles.hrow}>
            <h2>{copy.notesTitle}</h2>
          </div>

          <div className={`${styles.list} ${styles.notesScroll}`}>
            {notes?.length ? (
              notes.map((note) => (
                <div key={note._id} className={styles.noteItem}>
                  <p className={styles.noteBody}>{note.body || ""}</p>

                  {note.publishedAt ? (
                    <p className={styles.meta} style={{ marginTop: 10 }}>
                      {new Date(note.publishedAt).toLocaleDateString(
                        lang === "en" ? "en-US" : "el-GR"
                      )}
                    </p>
                  ) : null}
                </div>
              ))
            ) : (
              <p className={styles.empty}>{copy.emptyNotes}</p>
            )}
          </div>
        </aside>
      </div>
    </main>
  );
}
