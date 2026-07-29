import { esoServices, isoServices } from "@/lib/content";
import { CheckIcon } from "@/components/icons";

export function EsoIsoSplit() {
  return (
    <div className="mt-2 grid gap-5 sm:grid-cols-2">
      <div className="rounded-2xl border border-green-deep/15 bg-mint p-6">
        <p className="font-mono text-xs tracking-wider text-green-deep uppercase">
          ESO · Entrepreneurship support
        </p>
        <ul className="mt-4 flex flex-col gap-3">
          {esoServices.map((item) => (
            <li
              key={item}
              className="flex gap-2.5 text-sm leading-relaxed text-ink/75"
            >
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-green-deep" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border border-white/10 bg-indigo p-6 text-white">
        <p className="font-mono text-xs tracking-wider text-green uppercase">
          ISO · Innovation support
        </p>
        <ul className="mt-4 flex flex-col gap-3">
          {isoServices.map((item) => (
            <li
              key={item}
              className="flex gap-2.5 text-sm leading-relaxed text-white/80"
            >
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-green" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
