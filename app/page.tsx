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

export default function HomePage() {
  return (
    <>
    <HeaderAnimation />
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
