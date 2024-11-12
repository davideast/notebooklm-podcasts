import { AuthButton } from "@/components/AuthButton"
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1>Audio Overviews for everyone</h1>
          <h3>NotebookLM podcasts in an easily discoverable feed</h3>
        </div>
        <div className={styles.cta}>
          <AuthButton />
        </div>
        <div>

        </div>
      </main>
    </div>
  );
}
