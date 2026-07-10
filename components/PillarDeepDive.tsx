import Image from "next/image";
import type { ReactNode } from "react";
import { Chip } from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import type { Pillar } from "@/lib/content";

type PillarDeepDiveProps = {
  pillar: Pillar;
  reversed?: boolean;
  tinted?: boolean;
  extra?: ReactNode;
};

export function PillarDeepDive({
  pillar,
  reversed = false,
  tinted = false,
  extra,
}: PillarDeepDiveProps) {
  const textBlock = (
    <div>
      <span className="font-mono text-xs text-ink/40">{pillar.number}</span>
      <p className="mt-2 font-mono text-xs tracking-[0.2em] text-green-deep uppercase">
        {pillar.role}
      </p>
      <h2 className="mt-2 font-display text-3xl font-semibold text-ink">
        {pillar.name}
      </h2>
      <p className="mt-1 text-base text-ink/60">{pillar.tagline}</p>
      <p className="mt-5 text-base leading-relaxed text-ink/75">
        {pillar.description}
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        {pillar.bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex gap-2.5 text-sm leading-relaxed text-ink/75"
          >
            <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-green-deep" />
            {bullet}
          </li>
        ))}
      </ul>
      <div className="mt-7">
        <Chip tone="green">
          {pillar.stat.value} · {pillar.stat.label}
        </Chip>
      </div>
      <div className="mt-7">
        <Button href={pillar.href} external variant="primary">
          Visit {pillar.name}
          <ArrowRightIcon />
        </Button>
      </div>
    </div>
  );

  const imageBlock = (
    <div className="relative aspect-3/2 overflow-hidden rounded-2xl">
      <Image
        src={pillar.photo}
        alt={pillar.photoAlt}
        fill
        sizes="(min-width: 1024px) 40vw, 90vw"
        className="object-cover"
      />
    </div>
  );

  return (
    <div
      id={pillar.id}
      className={`scroll-mt-24 py-16 ${tinted ? "bg-parchment/30" : "bg-paper"}`}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {reversed ? (
            <>
              {imageBlock}
              {textBlock}
            </>
          ) : (
            <>
              {textBlock}
              {imageBlock}
            </>
          )}
        </div>
        {extra && <div className="mt-10">{extra}</div>}
      </div>
    </div>
  );
}
