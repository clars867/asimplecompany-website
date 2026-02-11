"use client";

import Image from "next/image";
import Link from "next/link";

type ReferralEntity = {
  name: string;
  title: string;
  company: string;
  summary: string;
  profileImage: string;
  linkedin?: string;
  website?: string;
};

const referralNetwork: ReferralEntity[] = [
  {
    name: "Michael Larson",
    title: "Founder & Executive Director",
    company: "Humans for Housing",
    summary:
      "Humans for Housing is a nonprofit committed to affirming the dignity of all people and their right to safe, stable housing. Our initiative, Humanizing Portland, uses documentary storytelling to shed light on chronic homelessness in Portland, Oregon. Through authentic narratives, we aim to foster empathy, mobilize advocacy, and drive systemic change—ensuring everyone has a place to call home.",
    profileImage: "/images/referrals/ML_Image.png",
    linkedin: "https://www.linkedin.com/in/michaelplarson23/",
    website: "http://humansforhousing.org/",
  },
  {
    name: "Andres Jimenez",
    title: "Financial Advisor",
    company: "Edward Jones",
    summary:
      "Andres Jimenez is a dedicated Financial Advisor at Edward Jones, specializing in comprehensive financial planning, investment strategies, and retirement solutions tailored to his clients’ unique goals. With a strong foundation in wealth management, tax planning, and estate considerations, he takes a personalized approach to helping individuals and families build financial security. His experience as a Premier Banker and Branch Manager at Wells Fargo has honed his expertise in full-service banking, customer relationship management, and strategic financial solutions. As a CERTIFIED FINANCIAL PLANNER™, Andres is committed to ethics, integrity, and delivering client-centered strategies that foster long-term financial success.",
    profileImage: "/images/referrals/AJ_Image.png",
    linkedin: "https://www.linkedin.com/in/andres-jimenez-cfp%C2%AE-aams%C2%AE-64656b8a/",
    website: "https://www.edwardjones.com/us-en/financial-advisor/andres-jimenez",
  },
  {
    name: "Shameka Seals-Adjei",
    title: "Revenue Cycle Manager",
    company: "TrisisRCM",
    summary:
      "TrisisRCM is a trusted partner in Behavioral Health Revenue Cycle Management, dedicated to helping healthcare providers streamline billing, optimize revenue, and navigate the complexities of practice management. Founded by Shameka Seals-Adjei, a Certified Professional Coder with a passion for supporting healthcare professionals, TrisisRCM has grown from a single client in 2017 to serving multiple behavioral health facilities. The company is HIPAA-compliant and adheres to CMS standards, ensuring secure, efficient, and accurate revenue cycle management. With a team of billing specialists, coding professionals, and credentialing experts, TrisisRCM delivers comprehensive solutions tailored to the unique needs of behavioral health providers.",
    profileImage: "/images/referrals/SS_Image.png",
    linkedin: "https://www.linkedin.com/in/shameka-sealsadjei-07295b119/",
    website: "https://trisisrcm.com/",
  },
  {
    name: "Amanda Vezetinski Young",
    title: "Managing Director",
    company: "Theseus Consulting",
    summary:
      "Amanda Young is an experienced Operations Manager with 20 years of expertise in the aerospace industry, specializing in lean manufacturing, quality systems, and continuous improvement. With a strong background in engineering, supply chain management, procurement, and project consulting, she has successfully led manufacturing transformations across production lines, shop floor layouts, and work centers. Amanda is well-versed in AS9100 compliance, PFMEA, APQP, root cause analysis, and Quality Management Systems, making her a valuable asset for organizations looking to streamline operations, enhance efficiency, and drive excellence.",
    profileImage: "/images/referrals/AVY_Image.png",
    linkedin: "https://www.linkedin.com/in/amanda-vezetinski-young-523b9923/",
    website: "https://www.theseusconsultingllc.com/",
  },
  {
    name: "Donna Langford",
    title: "Real Estate Agent",
    company: "Lark + Fir Realty",
    summary:
      "When it comes to buying and selling real estate in Portland, no one does it better than Donna Langford. At Lark + Fir Realty, she is known for her sharp market insight, unmatched negotiation skills, and relentless commitment to getting her clients the best results. Donna doesn’t just assist buyers and sellers—she strategizes, advocates, and delivers the best outcomes. Her deep-rooted knowledge of Portland’s most competitive neighborhoods and ability to anticipate market trends make her the go-to expert for those looking to come out ahead. In real estate, who you work with matters—work with the best.",
    profileImage: "/images/referrals/DL_Image.jpg",
    linkedin: "https://www.linkedin.com/in/donna-langford-a82a45167/",
    website: "https://larkandfir.com/donna-langford/",
  },
];

export default function ReferralNetworkPage() {
  return (
    <main
      style={{
        maxWidth: "1200px",
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
            color: "#ffffff",
          }}
        >
          Referral Network
        </h1>

        <p
          style={{
            marginTop: "12px",
            maxWidth: "720px",
            fontSize: "16px",
            color: "rgba(255,255,255,0.78)",
          }}
        >
         Connecting Mission-Driven Organizations for Greater Impact
        </p>
      </header>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "32px",
        }}
      >
        {referralNetwork.map((entity) => (
          <article
            key={entity.name}
            style={{
              background: "rgba(0,0,0,0.85)",
              border: "1px solid rgba(255,255,255,0.25)",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              transition: "transform 200ms ease, box-shadow 200ms ease",
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
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <Image
                src={entity.profileImage}
                alt={entity.name}
                width={80}
                height={80}
                style={{ objectFit: "cover" }}
              />

              <div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#ffffff",
                  }}
                >
                  {entity.name}
                </div>

                <div
                  style={{
                    marginTop: "4px",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  {entity.title}
                </div>

                <div
                  style={{
                    marginTop: "2px",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  {entity.company}
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: "8px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              {/* LINKS LABEL */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "12px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#d3af37",
                  whiteSpace: "nowrap",
                }}
              >
                <Image
                  src="/icons/link.svg"
                  alt=""
                  width={16}
                  height={16}
                />
                <span>Links</span>
              </div>

              {/* DIVIDER */}
              <div
                style={{
                  width: "1px",
                  height: "16px",
                  backgroundColor: "rgba(255,255,255,0.3)",
                }}
              />

              {/* LINK TARGETS */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  fontSize: "13px",
                }}
              >
                {entity.linkedin && (
                  <Link
                    href={entity.linkedin}
                    target="_blank"
                    style={{
                      color: "#ffffff",
                      textDecoration: "none",
                      letterSpacing: "0.08em",
                    }}
                  >
                    LINKEDIN
                  </Link>
                )}

                {entity.website && (
                  <Link
                    href={entity.website}
                    target="_blank"
                    style={{
                      color: "#ffffff",
                      textDecoration: "none",
                      letterSpacing: "0.08em",
                    }}
                  >
                    WEBSITE
                  </Link>
                )}
              </div>
            </div>

            <div
              style={{
                marginTop: "2px",
                paddingTop: "8px",
                borderTop: "1px solid rgba(255,255,255,0.15)",
                fontSize: "13px",
                lineHeight: "1.5",
                color: "rgba(255,255,255,0.75)",
              }}
            >
              {entity.summary}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}