import { missionVision } from "@/lib/content";
import { SectionMark } from "@/components/about/SectionMark";

/**
 * Mission and vision as a facing-page spread, divided by a single rule. The
 * tinted cards and icon medallions this replaces were the page's loudest
 * generic gesture, and the statements read better without anything around them.
 */
export function MissionVision() {
  return (
    <section
      id="mission-vision"
      className="scroll-mt-24 bg-paper px-6 py-20 lg:px-8"
    >
      <div className="mx-auto grid max-w-5xl border-t border-ink/12 pt-14 md:grid-cols-2">
        <div className="md:pr-14">
          <SectionMark>Our mission</SectionMark>
          <p className="mt-5 font-display text-2xl leading-[1.45] font-normal text-ink sm:text-[1.75rem]">
            {missionVision.mission}
          </p>
        </div>

        <div className="mt-12 border-t border-ink/12 pt-12 md:mt-0 md:border-t-0 md:border-l md:border-l-ink/12 md:pt-0 md:pl-14">
          <SectionMark>Our vision</SectionMark>
          <p className="mt-5 font-display text-2xl leading-[1.45] font-normal text-ink sm:text-[1.75rem]">
            {missionVision.vision}
          </p>
        </div>
      </div>
    </section>
  );
}
