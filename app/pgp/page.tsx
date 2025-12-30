
import styles from "./Pgp.module.css";

export const metadata = {
  title: "PGP Public Key | A Simple Company",
  description:
    "PGP public key for secure communication with A Simple Company.",
  alternates: {
    canonical: "https://www.asimplecompany.org/pgp",
  },
};

export default function PgpPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>PGP Public Key</h1>

      <pre className={styles.key}>
{`+------------------------------------------------------------------------------------------+
| A SIMPLE COMPANY - SECURE CONTACT                                                        |
+------------------------------------------------------------------------------------------+
|  A   | A Simple Company is a systems research and development firm focused               |
|  S   | on understanding and improving how information flows                              |
|  C   | through people, machines, and organizations.                                      |
+-----------+------------------------------------------------------------------------------+
| EMAIL: security@asimplecompany.org                                                       |
| WEBSITE: https://www.asimplecompany.org                                                  |
+------------------------------------------------------------------------------------------+

(!) SEND SECURE MESSAGES BY SIGNING EMAILS USING OUR PUBLIC KEY BELOW (!)

-----BEGIN PGP PUBLIC KEY BLOCK-----

mDMEaSTkdhYJKwYBBAHaRw8BAQdAkviCPyWNw0e0zKk20hUKv8fdO0phfIyW+2TS
inHT4d+0N0EgU2ltcGxlIENvbXBhbnkgU2VjdXJpdHkgPHNlY3VyaXR5QGFzaW1w
bGVjb21wYW55Lm9yZz6ImQQTFgoAQRYhBCj78fEr2o51Ebz6O9masHEFHQOHBQJp
JOR2AhsDBQkB4TOABQsJCAcCAiICBhUKCQgLAgQWAgMBAh4HAheAAAoJENmasHEF
HQOH9TEA/RLyc+1hmjhBEhegddPxSpxrkcgQ4FC9PzCLxkjq1qkGAQClnMTmr2vH
M8K9nX9SvFm/x8Cwi+A64/CeaC9IWlouC7g4BGkk5HYSCisGAQQBl1UBBQEBB0Ar
Pv3ur44SaZhACAcsKjZCEBlkEDWoxyJ1Ww8vni4QQwMBCAeIfgQYFgoAJhYhBCj7
8fEr2o51Ebz6O9masHEFHQOHBQJpJOR2AhsMBQkB4TOAAAoJENmasHEFHQOH8HgB
AO+mSJVBRb5fXuN3K2aywJM3g59hbbteWJFg5+YVhfPiAQDSzWtK605NLSE0Dw9r
XOjtZZpa8XOM36dGVKzIEjpKDw==
=i0sH

-----END PGP PUBLIC KEY BLOCK-----`}
      </pre>
    </main>
  );
}