"use client";

import { useEffect, useSyncExternalStore } from "react";
import { MoonIcon, SunIcon, SystemIcon } from "@/components/icons";

export type ThemePreference = "light" | "dark" | "system";

const options: { value: ThemePreference; label: string }[] = [
  { value: "light", label: "Light" },
  { value: "system", label: "System" },
  { value: "dark", label: "Dark" },
];

/** Kept in sync with the inline bootstrap script in app/layout.tsx. */
export const THEME_STORAGE_KEY = "edfrica-theme";
const CHANGE_EVENT = "edfrica-theme-change";

function isPreference(value: string | null): value is ThemePreference {
  return value === "light" || value === "dark" || value === "system";
}

/* localStorage is external state, so it's read through useSyncExternalStore
   rather than mirrored into React state inside an effect. */
function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

function getSnapshot(): ThemePreference {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return isPreference(stored) ? stored : "system";
  } catch {
    return "system";
  }
}

/** The server can't know the visitor's choice; the bootstrap script fixes the
 *  class before paint and this resolves on hydration. */
const getServerSnapshot = (): ThemePreference => "system";

function apply(preference: ThemePreference) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const dark = preference === "dark" || (preference === "system" && prefersDark);
  document.documentElement.classList.toggle("dark", dark);
}

/** `onDark` styles the control for sitting over the dark hero. */
export function ThemeToggle({ onDark = false }: { onDark?: boolean }) {
  const preference = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  // Follow the OS while the preference is "system".
  useEffect(() => {
    if (preference !== "system") return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => apply("system");
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, [preference]);

  function choose(value: ThemePreference) {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, value);
    } catch {
      // Storage can be unavailable (private mode); the theme still applies
      // for this page view.
    }
    apply(value);
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }

  return (
    <div
      role="radiogroup"
      aria-label="Colour theme"
      className={`inline-flex items-center gap-0.5 rounded-full border p-0.5 backdrop-blur ${
        onDark ? "border-white/25 bg-white/5" : "border-ink/15 bg-paper/60"
      }`}
    >
      {options.map((option) => {
        const selected = preference === option.value;
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={selected}
            title={`${option.label} theme`}
            onClick={() => choose(option.value)}
            className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors ${
              selected
                ? "bg-green-deep text-white dark:text-indigo"
                : onDark
                  ? "text-white/55 hover:text-white"
                  : "text-ink/45 hover:text-ink"
            }`}
          >
            <span className="sr-only">{option.label} theme</span>
            {option.value === "light" && <SunIcon className="h-3.5 w-3.5" />}
            {option.value === "system" && <SystemIcon className="h-3.5 w-3.5" />}
            {option.value === "dark" && <MoonIcon className="h-3.5 w-3.5" />}
          </button>
        );
      })}
    </div>
  );
}
