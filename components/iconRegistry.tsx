import {
  BriefcaseIcon,
  Building2Icon,
  ChartIcon,
  ClipboardIcon,
  CompassIcon,
  GlobeIcon,
  GraduationCapIcon,
  HeartIcon,
  LandmarkIcon,
  MapPinIcon,
  MegaphoneIcon,
  PersonIcon,
  SealIcon,
  ShieldIcon,
  StarIcon,
} from "@/components/icons";

/**
 * Content in lib/content.ts refers to icons by name so the data stays free of
 * JSX. Components resolve the name through this map — unknown names fall back
 * to StarIcon rather than crashing the render.
 */
const icons = {
  briefcase: BriefcaseIcon,
  building: Building2Icon,
  chart: ChartIcon,
  clipboard: ClipboardIcon,
  compass: CompassIcon,
  globe: GlobeIcon,
  graduation: GraduationCapIcon,
  heart: HeartIcon,
  landmark: LandmarkIcon,
  mapPin: MapPinIcon,
  megaphone: MegaphoneIcon,
  person: PersonIcon,
  seal: SealIcon,
  shield: ShieldIcon,
  star: StarIcon,
} as const;

export function getIcon(name: string) {
  return icons[name as keyof typeof icons] ?? StarIcon;
}

/**
 * Render-safe wrapper for cases where the icon is resolved in a component
 * body rather than inside a `.map` callback. Dispatches explicitly rather
 * than assigning a component to a local, which the lint rule reads as
 * declaring a component during render.
 */
export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  switch (name) {
    case "briefcase":
      return <BriefcaseIcon className={className} />;
    case "building":
      return <Building2Icon className={className} />;
    case "chart":
      return <ChartIcon className={className} />;
    case "clipboard":
      return <ClipboardIcon className={className} />;
    case "compass":
      return <CompassIcon className={className} />;
    case "globe":
      return <GlobeIcon className={className} />;
    case "graduation":
      return <GraduationCapIcon className={className} />;
    case "heart":
      return <HeartIcon className={className} />;
    case "landmark":
      return <LandmarkIcon className={className} />;
    case "mapPin":
      return <MapPinIcon className={className} />;
    case "megaphone":
      return <MegaphoneIcon className={className} />;
    case "person":
      return <PersonIcon className={className} />;
    case "seal":
      return <SealIcon className={className} />;
    case "shield":
      return <ShieldIcon className={className} />;
    default:
      return <StarIcon className={className} />;
  }
}
