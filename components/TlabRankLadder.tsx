import { tlabRanks } from "@/lib/content";
import { ArrowRightIcon } from "@/components/icons";

export function TlabRankLadder() {
  return (
    <div className="mt-2">
      <p className="font-mono text-xs tracking-wider text-ink/50 uppercase">
        XP rank progression
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {tlabRanks.map((rank, index) => (
          <div key={rank} className="flex items-center gap-2">
            <span className="flex items-center gap-2 rounded-full border border-green-deep/20 bg-mint py-2 pr-4 pl-2 text-xs font-semibold text-green-deep">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-deep text-[10px] text-white">
                {index + 1}
              </span>
              {rank}
            </span>
            {index < tlabRanks.length - 1 && (
              <ArrowRightIcon className="h-3.5 w-3.5 text-ink/25" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
