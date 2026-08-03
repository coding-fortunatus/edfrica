import { missionVision, orgName } from "@/lib/content";

/**
 * The page opens as a title page — centred type between two rules, no
 * photograph above the fold. The readers this page is written for are partners
 * doing due diligence, and a title page is the most institutional opening
 * available. The building plate follows immediately below.
 */
export function AboutTitlePage() {
  return (
    <section className="bg-paper px-6 pt-20 pb-14 lg:px-8 lg:pt-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-xs tracking-[0.2em] text-ink/50 uppercase">
          {orgName}
        </p>

        <hr className="mt-8 border-t border-ink/15" />

        <h1 className="mt-10 font-display text-4xl leading-[1.14] font-normal text-balance text-ink sm:text-5xl lg:text-6xl">
          A social enterprise turning African ambition{" "}
          <em className="text-green-deep italic">into impact</em>
        </h1>

        <hr className="mt-10 border-t border-ink/15" />

        <p className="mt-6 font-mono text-xs tracking-[0.2em] text-ink/50 uppercase">
          Established 2017 &middot; Abeokuta, Ogun State
        </p>
      </div>

      {/* The lead runs at a book measure, opening on a drop cap. */}
      <div className="mx-auto mt-16 max-w-2xl">
        <p className="text-lg leading-[1.8] text-ink/75 first-letter:float-left first-letter:mr-3 first-letter:pt-1 first-letter:text-[3.5rem] first-letter:leading-[0.82] first-letter:font-normal first-letter:text-ink">
          {missionVision.intro}
        </p>
      </div>
    </section>
  );
}
