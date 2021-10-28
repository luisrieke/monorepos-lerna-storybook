import Head from "next/head";
import { Button } from "components";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Lerna App with Storybook Components</title>
        <meta
          name="description"
          content="Learn how to use Storybook Components within Lerna"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="https://spacifik.de">Projects created by Spacifik</a>
        </h1>
        <Button onClick={() => console.log("button clicked!")}>Click me</Button>
      </main>

      <footer className={styles.footer}>
        <a href="https://spacifik.de" target="_blank" rel="noopener noreferrer">
          Ask for webdesign by Spacifik
        </a>
      </footer>
    </div>
  );
}
