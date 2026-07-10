import { regionalNetwork } from "@/lib/content";

export function RegionalNetworkGrid() {
  return (
    <div className="mt-2">
      <p className="font-mono text-xs tracking-wider text-ink/50 uppercase">
        15-country network — ECOWAS + Alliance of Sahel States
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {regionalNetwork.map((country) => (
          <span
            key={country.name}
            className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
              country.bloc === "AES"
                ? "border-indigo/25 bg-indigo/5 text-indigo"
                : "border-green-deep/20 bg-mint text-green-deep"
            }`}
          >
            {country.name}
          </span>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-4 text-xs text-ink/50">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full border border-green-deep/30 bg-mint" />
          ECOWAS (12)
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full border border-indigo/30 bg-indigo/10" />
          Alliance of Sahel States (3)
        </span>
      </div>
    </div>
  );
}
