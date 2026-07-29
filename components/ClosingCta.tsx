import { Button } from "@/components/ui/Button";
import { Pattern } from "@/components/Pattern";

export function ClosingCta() {
  return (
    <section className="relative overflow-hidden bg-indigo-soft py-20 text-white">
      <Pattern variant="chevron" tone="dark" anchor="center" />
      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          Let&rsquo;s build the next chapter together
        </h2>
        <p className="mt-4 text-base leading-relaxed text-white/70">
          Whether you&rsquo;re a donor, a corporate partner, or a government
          agency — there&rsquo;s a place for you in the Edfrica ecosystem.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/partner" variant="primary">
            Partner With Us
          </Button>
          <Button href="/contact" variant="outline-light">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
