"use client";

import Link from "next/link";

type ConnectionOption = {
  title: string;
  description: string;
  scope: string;
  href: string;
};

const connectionOptions: ConnectionOption[] = [
  {
    title: "Contact Us",
    description:
      "General inquiries, media requests, or questions not covered elsewhere.",
    scope: "Messages are reviewed and routed internally.",
    href: "/get-connected/contact",
  },
  {
    title: "Careers",
    description:
      "Explore opportunities to work with us on research, engineering, and operations.",
    scope: "Includes full-time, contract, and research collaboration roles.",
    href: "/get-connected/careers",
  },
  {
    title: "Partnership Inquiry",
    description:
      "For organizations exploring formal partnerships, teaming, or joint initiatives.",
    scope: "Structured intake for qualified partnership discussions.",
    href: "/get-connected/partnership-inquiry",
  },
  {
    title: "Free Consultation",
    description:
      "Schedule a short, exploratory discussion to assess fit and scope.",
    scope: "Time-boxed and non-obligatory.",
    href: "/get-connected/free-consultation",
  },
  {
    title: "Referral Network",
    description:
      "Refer opportunities, collaborators, or organizations aligned with our work.",
    scope: "Designed for trusted, values-aligned referrals.",
    href: "/get-connected/referral-network",
  },
];

export default function GetConnectedPage() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "96px 24px",
      }}
    >
      <header style={{ marginBottom: "48px" }}>
        <h1
          style={{
            fontSize: "36px",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Get Connected
        </h1>
        <p
          style={{
            marginTop: "12px",
            maxWidth: "640px",
            fontSize: "16px",
            color: "rgba(255,255,255,0.78)",
          }}
        >
          A Simple Company exists to analyze complex systems by understanding how they behave, evolve, and interact under real constraints.
        </p>
      </header>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "24px",
        }}
      >
        {connectionOptions.map((option) => (
          <article
            key={option.title}
            style={{
              borderRadius: "0px",
              border: "1px solid rgba(255,255,255,0.25)",
              padding: "40px 24px",
              background: "rgba(0,0,0,0.85)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              transition: "transform 200ms ease, box-shadow 200ms ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow =
                "0 0 0 1px rgba(255,255,255,0.6), 0 12px 32px rgba(255,255,255,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <h2
              style={{
                fontSize: "18px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#ffffff",
              }}
            >
              {option.title}
            </h2>

            <Link
              href={option.href}
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#ffffff",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              →
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}