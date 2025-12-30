import styles from "./Privacy.module.css";

export const metadata = {
  title: "Privacy Policy | A Simple Company",
  description:
    "Learn how A Simple Company collects, uses, and protects information.",
  alternates: {
    canonical: "https://www.asimplecompany.org/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Privacy Policy</h1>

      <section className={styles.content}>
        <p>
          Understand how your data is collected, used, and protected as you explore a
          partnership with A Simple Company or learn more about our services.
        </p>

        <h2>1. When You Visit the Site</h2>
        <p>
          We respect your privacy and do not collect any data from visitors who view this site. You can explore our content without the need to provide any personal information.
        </p>

        <h2>2. When You Submit a "Contact" Form</h2>
        <p>
          When you submit a “Contact” form, we collect the information you provide to establish a connection with you and explore a potential partnership. This data will only be used to respond to your inquiry and facilitate communication regarding our services.
        </p>

        <h2>3. When you Accept an Invitation ot Our Partnership Portal</h2>
        <p>
          If you accept an invitation to join our partnership portal, we will collect and store the information you provide. This data will be securely stored and maintained for up to 5 years to ensure we can effectively support our partnership and meet any legal or contractual obligations.
        </p>

        <h2>4. Interaction with A Simple Company on Third-Party Websites</h2>
        <p>
          A Simple Company may interact with you on third-party platforms such as Google or LinkedIn. These platforms have their own privacy policies that govern how your data is collected and used. We encourage you to review Google’s Privacy Policy and LinkedIn’s Privacy Policy for more information.
        </p>

        <h2>Still Have Questions?</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy or how your data is handled, please reach out at contact-us@asimplecompany.org
        </p>
      </section>
    </main>
  );
}