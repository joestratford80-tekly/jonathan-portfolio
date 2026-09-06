"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import { socialLinks } from "@/data/socialLinks";
import { contactCopy } from "@/data/siteContent";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface FieldErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const nextErrors: FieldErrors = {};
    if (!name) nextErrors.name = "Please enter your name.";
    if (!EMAIL_RE.test(email)) nextErrors.email = "Please enter a valid email.";
    if (!subject) nextErrors.subject = "Please enter a subject.";
    if (!message) nextErrors.message = "Please enter a message.";
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("");
      return;
    }

    const mailTarget = socialLinks.email && socialLinks.email !== "#" ? socialLinks.email : "";
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    if (mailTarget) {
      window.location.href = `mailto:${mailTarget}?subject=${encodeURIComponent(subject)}&body=${body}`;
      setStatus("Opening your email client…");
    } else {
      setStatus("Add an email address in data/socialLinks.ts to activate this form.");
    }
  }

  return (
    <section id="contact" className="border-t border-line py-24 md:py-[150px]">
      <div className="mx-auto grid max-w-wrap grid-cols-1 gap-[70px] px-8 lg:grid-cols-[.9fr_1.1fr]">
        <Reveal>
          <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[.14em] text-ink-faint">
            <span className="h-px w-7 bg-accent-line" /> 07 / Contact
          </div>
          <h2 className="mt-3.5 font-display text-[clamp(2.4rem,5vw,4rem)] font-bold tracking-[-.01em]">
            Let&apos;s build something.
          </h2>
          <p className="mt-5 max-w-[44ch] text-ink-dim">{contactCopy}</p>
          <div className="mt-10 flex flex-col gap-3">
            <SocialLine label="Email" href={socialLinks.email} />
            <SocialLine label="LinkedIn" href={socialLinks.linkedin} />
            <SocialLine label="GitHub" href={socialLinks.github} />
            <SocialLine label="Kaggle" href={socialLinks.kaggle} />
            <SocialLine label="Behance" href={socialLinks.behance} />
          </div>
        </Reveal>

        <Reveal>
          <form onSubmit={handleSubmit} noValidate>
            <Field id="f-name" name="name" label="Name" type="text" autoComplete="name" error={errors.name} />
            <Field id="f-email" name="email" label="Email" type="email" autoComplete="email" error={errors.email} />
            <Field id="f-subject" name="subject" label="Subject" type="text" error={errors.subject} />
            <div className="mb-[22px]">
              <label htmlFor="f-message" className="mb-2 block text-[11.5px] uppercase tracking-[.1em] text-ink-faint">
                Message
              </label>
              <textarea
                id="f-message"
                name="message"
                required
                className="min-h-[100px] w-full resize-y border-b border-line bg-transparent py-2.5 text-[15px] transition-colors focus:border-accent focus:outline-none"
              />
              <div className="mt-1.5 min-h-[16px] text-xs text-[#F16A6A]">{errors.message}</div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2.5 rounded-sm bg-ink px-[26px] py-[15px] text-[13px] font-semibold uppercase tracking-[.06em] text-bg transition-all duration-[350ms] ease-site hover:-translate-y-0.5 hover:bg-accent hover:text-white"
            >
              Send Message →
            </button>
            <div role="status" className="mt-4 min-h-[18px] text-[13px] text-accent">
              {status}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function SocialLine({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="inline-flex w-fit items-center gap-2.5 border-b border-transparent text-[13px] uppercase tracking-[.06em] text-ink-dim transition-colors hover:border-accent-line hover:text-accent"
    >
      {label} — {href === "#" ? `[${label.toUpperCase()}]` : href}
    </a>
  );
}

function Field({
  id,
  name,
  label,
  type,
  autoComplete,
  error,
}: {
  id: string;
  name: string;
  label: string;
  type: string;
  autoComplete?: string;
  error?: string;
}) {
  return (
    <div className="mb-[22px]">
      <label htmlFor={id} className="mb-2 block text-[11.5px] uppercase tracking-[.1em] text-ink-faint">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required
        className="w-full border-b border-line bg-transparent py-2.5 text-[15px] transition-colors focus:border-accent focus:outline-none"
      />
      <div className="mt-1.5 min-h-[16px] text-xs text-[#F16A6A]">{error}</div>
    </div>
  );
}
