import Hero from "../components/Hero";
import PillButton from "../components/PillButton";
import MissionSection from "../components/MissionSection";
import HeaderAnimation from "../components/HeaderAnimation";

export const metadata = {
  title: "A Simple Company | Systems Research & Development",
  description:
    "A Simple Company is a systems research and development firm focused on artificial intelligence, modeling, applied data analytics, and cloud infrastructure.",
  alternates: {
    canonical: "https://www.asimplecompany.org/",
  },
  openGraph: {
    title: "A Simple Company",
    description:
      "Systems research and development across AI, applied data analytics, and cloud infrastructure.",
    url: "https://www.asimplecompany.org/",
    siteName: "A Simple Company",
    images: [
      {
        url: "/og/og-default.png",
        width: 1200,
        height: 630,
        alt: "A Simple Company — Systems Research & Development",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A Simple Company",
    description:
      "Systems research and development across AI, applied data analytics, and cloud infrastructure.",
    images: ["/og/og-default.png"],
  },
};

const announcements = [
  {
    title: "NEW PAGE! Explore our Referral Network",
    date: "February 9, 2026",
    href: "/get-connected/referral-network",
    tag: "New",
  },
  {
    title: "NEW PAGE! Explore the SoulOS Project",
    date: "January 5, 2026",
    href: "/research/soulos",
  },
];

export default function HomePage() {
  return (
    <>
    <div
  style={{
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
  }}
>
  <HeaderAnimation />

  <aside
    style={{
      position: "absolute",
      top: "120px",
      right: "48px",
      width: "360px",
      maxHeight: "70vh",
      overflowY: "auto",
      zIndex: 20,
      background: "rgba(0, 0, 0, 0.7)",
      backdropFilter: "blur(8px)",
      borderRadius: "16px",
      border: "2px solid rgba(255, 255, 255, 0.29)",
      padding: "16px",
    }}
  >
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
      <h2 style={{ fontSize: "18px", fontWeight: 600 }}>Announcements</h2>
    </div>

    <div style={{ marginTop: "12px", display: "grid", gap: "12px" }}>
      {announcements.map((item) => (
        <article
          key={`${item.title}-${item.date}`}
          style={{
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            padding: "12px",
            background: "rgba(62, 62, 62, 0.91)",
          }}
        >
          <div style={{ fontSize: "12px", color: "#88baf6", display: "flex", gap: "8px" }}>
            <span>{item.date}</span>
            {item.tag ? (
              <span
                style={{
                  background: "#0f172a",
                  color: "#fff",
                  borderRadius: "999px",
                  padding: "2px 8px",
                  fontSize: "10px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                }}
              >
                {item.tag}
              </span>
            ) : null}
          </div>

          <h3 style={{ marginTop: "6px", fontSize: "15px", fontWeight: 600 }}>
            {item.href ? <a href={item.href}>{item.title}</a> : item.title}
          </h3>

          <p style={{ marginTop: "4px", fontSize: "13px", color: "#475569" }}>
            {item.summary}
          </p>
        </article>
      ))}
    </div>
    <div
      style={{
        marginTop: "16px",
        paddingTop: "12px",
        borderTop: "1px solid rgba(15,23,42,0.12)",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <a
        href="get-connected/announcements"
        style={{
          fontSize: "13px",
          fontWeight: 600,
          color: "#ffffff",
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        SEE ALL ANNOUNCEMENTS
        <span aria-hidden="true">→</span>
      </a>
    </div>
</aside>
</div>
      <main className="space-y-12">

        <section className="mx-auto max-w-5xl px-6">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "-200px",
              position: "relative",
              zIndex: 10,
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
              <PillButton href="/policy" label="Policy & Compliance" />
              <PillButton href="/simulation" label="Simulation & Modeling" />
              <PillButton href="/ai" label="Artificial Intelligence" />
            </div>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
              <PillButton href="/cloud" label="Cloud Infrastructure" />
              <PillButton href="/analytics" label="Applied Data Analytics" />
            </div>
          </div>
        </section>

        <MissionSection />
      </main>
    </>
  );
}
