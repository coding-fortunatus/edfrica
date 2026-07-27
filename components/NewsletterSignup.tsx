"use client";

import { useState } from "react";
import { contact } from "@/lib/content";

/**
 * There is no mailing-list backend wired up yet. Rather than fake a success
 * state, the form stays real and keyboard-accessible but routes people to the
 * contact address on submit. Replace the submit handler with a real endpoint
 * (Buttondown / Mailchimp / Resend) before launch.
 */
export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
      className="lg:justify-self-end"
    >
      <label
        htmlFor="newsletter-email"
        className="block font-mono text-xs tracking-wider text-white/40 uppercase"
      >
        Email address
      </label>
      <div className="mt-2 flex flex-col gap-3 sm:flex-row">
        <input
          id="newsletter-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="you@organisation.org"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/35 focus-visible:border-green focus-visible:outline-none sm:w-72"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-green-deep px-6 py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-white hover:text-indigo focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-indigo focus-visible:outline-none"
        >
          Subscribe
        </button>
      </div>
      <p
        aria-live="polite"
        className="mt-3 max-w-sm text-xs leading-relaxed text-white/50"
      >
        {submitted ? (
          <>
            Sign-up isn&rsquo;t live yet — email{" "}
            <a
              href={`mailto:${contact.email}?subject=Newsletter`}
              className="text-green underline"
            >
              {contact.email}
            </a>{" "}
            and we&rsquo;ll add you to the list.
          </>
        ) : (
          "No spam. Unsubscribe any time."
        )}
      </p>
    </form>
  );
}
