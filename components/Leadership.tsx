import {
  executiveTeam,
  managementTeam,
  teamComposition,
  type SocialLinks,
} from "@/lib/content";
import { AvatarPlaceholder } from "@/components/AvatarPlaceholder";
import { Pattern } from "@/components/Pattern";
import {
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
  FacebookIcon,
} from "@/components/icons";

function CompositionBar() {
  const { total, femalePercent, pwdPercent } = teamComposition;
  const malePercent = 100 - femalePercent;

  return (
    <div className="mt-8 max-w-md">
      <div className="flex items-center justify-between font-mono text-xs tracking-wider text-ink/50 uppercase">
        <span>Female {femalePercent}%</span>
        <span>Male {malePercent}%</span>
      </div>
      <div className="mt-2 flex h-3 w-full overflow-hidden rounded-full border border-ink/10">
        <div className="bg-green-deep" style={{ width: `${femalePercent}%` }} />
        <div className="bg-indigo" style={{ width: `${malePercent}%` }} />
      </div>
      <p className="mt-3 text-sm leading-relaxed text-ink/60">
        <span className="font-semibold text-ink">{total} professionals</span>{" "}
        across the ecosystem, including{" "}
        <span className="font-semibold text-ink">{pwdPercent}%</span> living
        with a disability.
      </p>
    </div>
  );
}

const socialPlatforms: {
  key: keyof SocialLinks;
  label: string;
  Icon: typeof LinkedinIcon;
}[] = [
  { key: "linkedin", label: "LinkedIn", Icon: LinkedinIcon },
  { key: "twitter", label: "Twitter", Icon: TwitterIcon },
  { key: "instagram", label: "Instagram", Icon: InstagramIcon },
  { key: "facebook", label: "Facebook", Icon: FacebookIcon },
];

function SocialRow({ social }: { social: SocialLinks }) {
  return (
    <div className="mt-5 flex justify-center gap-2">
      {socialPlatforms.map(({ key, label, Icon }) => {
        const href = social[key];
        if (href) {
          return (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/15 text-ink/60 transition-colors hover:border-green-deep hover:text-green-deep"
            >
              <Icon />
            </a>
          );
        }
        return (
          <span
            key={key}
            title={`${label} — coming soon`}
            aria-label={`${label} — coming soon`}
            className="flex h-8 w-8 cursor-default items-center justify-center rounded-full border border-ink/10 text-ink/20"
          >
            <Icon />
          </span>
        );
      })}
    </div>
  );
}

export function Leadership() {
  return (
    <section className="relative overflow-hidden bg-paper py-20">
      <Pattern variant="grid" tone="light" anchor="top" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <p className="font-mono text-xs tracking-[0.2em] text-green-deep uppercase">
          Leadership
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl">
          The team behind the ecosystem
        </h1>
        <CompositionBar />

        <h2 className="mt-16 font-display text-2xl font-semibold text-ink">
          Executive team
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {executiveTeam.map((member, index) => (
            <div
              key={member.name}
              className="rounded-3xl border border-ink/10 bg-parchment/50 p-8 text-center"
            >
              <AvatarPlaceholder
                name={member.name}
                tone={index % 2 === 0 ? "green" : "indigo"}
                className="mx-auto"
              />
              <p className="mt-5 font-display text-lg font-semibold text-ink">
                {member.name}
              </p>
              <p className="mt-1 text-sm text-ink/60">{member.role}</p>
              <SocialRow social={member.social} />
            </div>
          ))}
        </div>

        <h2 className="mt-16 font-display text-2xl font-semibold text-ink">
          Management team
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {managementTeam.map((name) => (
            <div
              key={name}
              className="rounded-2xl border border-ink/10 bg-paper p-6 text-center"
            >
              <AvatarPlaceholder name={name} tone="parchment" size="sm" className="mx-auto" />
              <p className="mt-4 text-sm font-semibold text-ink">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
