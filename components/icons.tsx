type IconProps = {
  className?: string;
};

export function ArrowRightIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3.5 8h9m0 0L8.5 4m4 4L8.5 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ExternalLinkIcon({ className = "h-3.5 w-3.5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6.5 3.5h-3v9h9v-3M9.5 2.5h4v4M13.2 2.8 7 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronDownIcon({ className = "h-3.5 w-3.5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MenuIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CloseIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PersonIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="3.75" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M4.75 19c1.2-3.4 4-5 7.25-5s6.05 1.6 7.25 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SealIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8.25 12.25l2.5 2.5 5-5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ClipboardIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="5.75"
        y="4.75"
        width="12.5"
        height="15.5"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M9 4.75V4a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 4v.75M9 11h6M9 15h6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ShieldIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 3.5l6.5 2.5v5c0 4.2-2.7 7.4-6.5 9.5-3.8-2.1-6.5-5.3-6.5-9.5v-5L12 3.5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9.25 12l1.9 1.9 3.6-3.9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeartIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 20s-7.5-4.6-7.5-10.2C4.5 6.7 6.7 4.5 9.5 4.5c1.4 0 2.6.7 3.5 1.8.9-1.1 2.1-1.8 3.5-1.8 2.8 0 5 2.2 5 5.3C21.5 15.4 12 20 12 20z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CompassIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M14.8 9.2l-1.6 4.4-4.4 1.6 1.6-4.4 4.4-1.6z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChartIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M5 19.5V11m6.5 8.5V4.5M18 19.5v-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MapPinIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 21.5s-6.75-5.9-6.75-11A6.75 6.75 0 0 1 12 3.75a6.75 6.75 0 0 1 6.75 6.75c0 5.1-6.75 11-6.75 11z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10.5" r="2.25" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function LinkedinIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.94 8.5H4.06V19.9h2.88V8.5zM5.5 4.1a1.67 1.67 0 1 0 0 3.34 1.67 1.67 0 0 0 0-3.34zM19.94 19.9h-2.87v-5.98c0-1.43-.03-3.26-1.99-3.26-1.99 0-2.3 1.55-2.3 3.16v6.08H9.92V8.5h2.76v1.56h.04c.38-.73 1.32-1.5 2.72-1.5 2.91 0 3.5 1.92 3.5 4.4v6.94z" />
    </svg>
  );
}

export function TwitterIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.6 10.6L20 4h-2.1l-5.6 5.7L7.9 4H3l6.7 9.6L3 20h2.1l5.9-6 4.7 6H21l-7.4-9.4zM11.5 12.9l-.7-1L5.8 5.5h2l4.4 6.2.7 1 5.7 8h-2l-4.7-6.6z" />
    </svg>
  );
}

export function InstagramIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.75" y="3.75" width="16.5" height="16.5" rx="4.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16.85" cy="7.15" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function CheckIcon({ className = "h-3.5 w-3.5" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path
        d="M3.5 8.5l3 3 6-7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MegaphoneIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M3.75 10.5v3a1.5 1.5 0 0 0 1.5 1.5h1.1l1 5 2-.4-.9-4.6h1.05l7 3.5v-13l-7 3.5h-4.75a1.5 1.5 0 0 0-1.5 1.5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M19.75 9.5a3.5 3.5 0 0 1 0 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function LandmarkIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M3.5 9.5 12 4.5l8.5 5M4.75 9.5v9M9.25 9.5v9M14.75 9.5v9M19.25 9.5v9M3 19h18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GraduationCapIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M2.75 9.5 12 5l9.25 4.5-9.25 4.5-9.25-4.5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 11.6v4c0 1.3 2.5 2.4 5.5 2.4s5.5-1.1 5.5-2.4v-4M20.25 9.5v5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Building2Icon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4.75 20.25V5.75a1 1 0 0 1 1-1h6.5a1 1 0 0 1 1 1v14.5M13.25 20.25h6v-9a1 1 0 0 0-1-1h-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 8.25h1.5M7.5 11.25h1.5M7.5 14.25h1.5M10.75 8.25h1.5M10.75 11.25h1.5M10.75 14.25h1.5M16 13.25h1.25M16 16.25h1.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M3.75 20.25h16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function GlobeIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3.5 12h17M12 3.5c2.4 2.3 3.7 5.3 3.7 8.5s-1.3 6.2-3.7 8.5c-2.4-2.3-3.7-5.3-3.7-8.5S9.6 5.8 12 3.5z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function BriefcaseIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.75" y="7.75" width="16.5" height="11.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8.5 7.75V6a1.5 1.5 0 0 1 1.5-1.5h4A1.5 1.5 0 0 1 15.5 6v1.75M3.75 12.5h16.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StarIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.5l2.5 5.6 6 .6-4.5 4 1.3 5.9-5.3-3.1-5.3 3.1 1.3-5.9-4.5-4 6-.6 2.5-5.6z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FacebookIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M14.5 21v-7.6h2.55l.38-3h-2.93V8.4c0-.87.24-1.46 1.5-1.46h1.6V4.24C17.3 4.16 16.3 4 15.15 4c-2.4 0-4.05 1.47-4.05 4.15v2.25H8.5v3h2.6V21h3.4z" />
    </svg>
  );
}
