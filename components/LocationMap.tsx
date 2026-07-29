import { Button } from "@/components/ui/Button";
import { MapPinIcon } from "@/components/icons";

const address =
  "The Edfrica Hub, Sokenu, off Nawarudeen Road, Abeokuta South LGA, Ogun State, Nigeria";
const encodedAddress = encodeURIComponent(address);
const mapEmbedSrc = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;
const directionsHref = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

/**
 * The Google embed plus its floating address card. Shared by /contact and
 * /hub, where it closes the page rather than opening it.
 */
export function LocationMap() {
  return (
    <section className="relative bg-indigo">
      <div className="relative h-85 w-full sm:h-105">
        <iframe
          src={mapEmbedSrc}
          className="absolute inset-0 h-full w-full border-0 grayscale-15"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map showing the location of The Edfrica Hub in Abeokuta"
        />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center px-6 pb-6 sm:justify-start sm:pl-12">
        {/* `bg-paper` rather than a hardcoded white: the card carries `text-ink`
            and a secondary Button, both of which invert with the theme. */}
        <div className="pointer-events-auto flex flex-col gap-4 rounded-2xl border border-ink/10 bg-paper/95 p-5 shadow-xl backdrop-blur sm:flex-row sm:items-center sm:gap-6">
          <div className="flex items-start gap-3">
            <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-green-deep" />
            <div>
              <p className="text-sm font-bold text-ink">The Edfrica Hub</p>
              <p className="max-w-xs text-sm text-ink/60">{address}</p>
            </div>
          </div>
          <Button
            href={directionsHref}
            external
            variant="secondary"
            className="shrink-0"
          >
            Get directions
          </Button>
        </div>
      </div>
    </section>
  );
}
