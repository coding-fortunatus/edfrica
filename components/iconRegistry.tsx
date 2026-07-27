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
