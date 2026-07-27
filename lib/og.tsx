import { ImageResponse } from "next/og";

/** 1200×630 is the size Facebook, LinkedIn, WhatsApp and X all crop cleanly. */
export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const INDIGO = "#16114b";
const GREEN = "#2f8f3c";

type OgImageInput = {
  /** Small uppercase label above the title, e.g. the section name. */
  eyebrow: string;
  title: string;
  /** One short supporting line. Keep it under ~110 characters. */
  subtitle?: string;
};

/**
 * Shared social card. Every route's `opengraph-image.tsx` calls this so the
 * cards stay one visual family, and copy changes never require re-exporting
 * artwork from a design tool.
 */
export function renderOgImage({ eyebrow, title, subtitle }: OgImageInput) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: INDIGO,
          padding: "72px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Soft green bloom, echoing the site's ambient backdrop. */}
        <div
          style={{
            position: "absolute",
            top: -220,
            right: -160,
            width: 620,
            height: 620,
            borderRadius: 620,
            background: GREEN,
            opacity: 0.28,
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 18,
              background: GREEN,
              display: "flex",
            }}
          />
          <div
            style={{
              color: "white",
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: 6,
            }}
          >
            EDFRICA
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <div
            style={{
              color: GREEN,
              fontSize: 24,
              fontWeight: 600,
              letterSpacing: 4,
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              color: "white",
              fontSize: title.length > 46 ? 62 : 76,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: -1.5,
            }}
          >
            {title}
          </div>
          {subtitle ? (
            <div
              style={{
                color: "rgba(255,255,255,0.72)",
                fontSize: 28,
                lineHeight: 1.4,
                marginTop: 24,
                maxWidth: 820,
              }}
            >
              {subtitle}
            </div>
          ) : null}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.18)",
            paddingTop: 28,
          }}
        >
          <div style={{ color: "rgba(255,255,255,0.72)", fontSize: 24 }}>
            edfrica.org
          </div>
          <div style={{ color: "rgba(255,255,255,0.72)", fontSize: 24 }}>
            Abeokuta · Nigeria · ECOWAS &amp; AES
          </div>
        </div>
      </div>
    ),
    ogSize,
  );
}
