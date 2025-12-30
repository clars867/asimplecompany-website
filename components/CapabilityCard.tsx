import React from "react";

type CapabilityCardProps = {
  title: string;
  description: string;
  badge?: string;
};

export default function CapabilityCard({
  title,
  description,
  badge,
}: CapabilityCardProps) {
  return (
    <article className="flex h-full flex-col gap-3 rounded-xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/10">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        {badge ? (
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
            {badge}
          </span>
        ) : null}
      </div>
      <p className="text-sm text-white/75">{description}</p>
    </article>
  );
}
