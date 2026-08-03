import { timeline } from "@/lib/content";
import { SectionMark } from "@/components/about/SectionMark";

/**
 * The record set as an annal: years hanging in the left margin, entries
 * separated by rules. The dots, connector line and pill badges this replaces
 * decorated a sequence that already reads as one — the years are the
 * structure, so they carry the weight.
 */
export function Chronicle() {
  return (
    <section className="bg-paper px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionMark>The record</SectionMark>
        <h2 className="mt-4 max-w-2xl font-display text-3xl leading-[1.2] font-normal text-balance text-ink sm:text-4xl">
          From a leadership conference to a five-pillar ecosystem
        </h2>

        <ol className="mt-14 border-t border-ink/12">
          {timeline.map((entry) => (
            <li
              key={entry.year}
              className="grid gap-2 border-b border-ink/12 py-7 sm:grid-cols-[10rem_1fr] sm:items-baseline sm:gap-10"
            >
              <span className="font-mono text-3xl leading-none font-normal text-ink sm:text-4xl">
                {entry.year}
              </span>
              <p className="max-w-2xl text-base leading-relaxed text-ink/70">
                {entry.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
