import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { getDog } from "@/actions/dogs";
import { DogCard, Title } from "@/components";

export default async function Home() {
  const dog = await getDog();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Title title="POC Postcss" />
        <DogCard dog={dog} />
        <ol>
          <li>
            Images from{" "}
            <a href="https://dog.ceo/dog-api/" target="_blank">
              <code>https://dog.ceo/dog-api/</code>
            </a>
          </li>
        </ol>
        <div className={styles.ctas}>
          <Link className={styles.primary} href="client-side-rendering">
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Go to the client render page
          </Link>
        </div>
      </main>
      <footer className={styles.footer}>Oscar</footer>
    </div>
  );
}
