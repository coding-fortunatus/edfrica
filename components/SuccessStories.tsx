import { testimonials } from "@/lib/content";
import { AvatarPlaceholder } from "@/components/AvatarPlaceholder";

export function SuccessStories() {
  return (
    <section id="success-stories" className="scroll-mt-24 bg-paper py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="font-mono text-xs tracking-[0.2em] text-green-deep uppercase">
          Success Stories
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold text-ink sm:text-4xl">
          Partnering for your growth
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
          What the organisations we deliver alongside say about working with
          Edfrica.
        </p>

        <div className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <figure
              key={index}
              className="flex min-w-[85%] shrink-0 snap-start flex-col rounded-3xl border border-ink/10 bg-parchment p-7 sm:min-w-0"
            >
              <blockquote className="font-display text-lg leading-relaxed text-ink italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 pt-7">
                <AvatarPlaceholder
                  name={testimonial.org}
                  size="sm"
                  className="h-11 w-11"
                />
                <div>
                  <p className="text-sm font-semibold text-ink">
                    {testimonial.name}
                  </p>
                  <p className="font-mono text-[11px] tracking-wider text-ink/50 uppercase">
                    {testimonial.role} · {testimonial.org}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
