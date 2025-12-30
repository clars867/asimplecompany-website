import Link from "next/link";
import React from "react";

type Cta = {
  label: string;
  href: string;
};

type HeroProps = {
  title: string;
  subtitle: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
};

export default function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-16">
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/60">
        <span className="h-px w-10 bg-gradient-to-r from-white/0 via-white/40 to-white/0" />
        <span>Strategy • Design • Build</span>
        <span className="h-px w-10 bg-gradient-to-r from-white/0 via-white/40 to-white/0" />
      </div>
      <div className="space-y-6">
        <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
          {title}
        </h1>
        <p className="max-w-2xl text-lg text-white/80">{subtitle}</p>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Link
          href={primaryCta.href}
          className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
        >
          {primaryCta.label}
        </Link>
        {secondaryCta ? (
          <Link
            href={secondaryCta.href}
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/60"
          >
            {secondaryCta.label}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
