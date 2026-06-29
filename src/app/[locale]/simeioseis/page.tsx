import { sanity } from "@/lib/sanity.client";
import { NOTES_LIST } from "@/lib/sanity.queries";

type Note = {
  _id: string;
  body?: string;
  publishedAt?: string;
  isPublished?: boolean;
};

export default async function NotesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = locale === "en" ? "en" : "el";

  const notes: Note[] = await sanity.fetch(NOTES_LIST);

  // Αν θες να δείχνεις μόνο published, ξεσχολίασε:
  // const visibleNotes = notes.filter((n) => n.isPublished);

  const visibleNotes = notes;

  return (
    <main className="page">
      <div className="page-inner">
        <h1 className="page-title">{lang === "en" ? "Notes" : "Σημειώσεις"}</h1>
        <p className="page-sub">
          {lang === "en"
            ? "Short notes and entries."
            : "Σημειώσεις και μικρές καταγραφές."}
        </p>

        <div className="page-content">
          {visibleNotes?.length ? (
            <div className="gridList">
              {visibleNotes.map((note) => (
                <div key={note._id} className="postCardLight">
                  <div className="cardExcerpt" style={{ whiteSpace: "pre-wrap" }}>
                    {note.body || ""}
                  </div>

                  {note.publishedAt ? (
                    <div className="cardDate">
                      {new Date(note.publishedAt).toLocaleDateString(
                        lang === "en" ? "en-US" : "el-GR"
                      )}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          ) : (
            <div className="article" style={{ opacity: 0.75 }}>
              {lang === "en" ? "No notes yet." : "Δεν υπάρχουν σημειώσεις ακόμα."}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
