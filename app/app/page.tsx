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

          <div className={styles.container}>
            {/* Author and Date Header */}
            <div className={styles.header}>
              <div className={styles.author}>
                <div className={styles.avatar}>
                  <img
                    src="https://pbs.twimg.com/profile_images/1691627325794725888/voQFcYjY_400x400.jpg"
                    alt="David East"
                  />
                </div>
                <span className={styles.authorName}>David East</span>
              </div>
              <span className={styles.date}>11/07/2024</span>
            </div>
            <div className={styles.content}>
              <div className={styles.description}>


                {/* Title and Description */}
                <h2 className={styles.title}>Fundamentals of Geometry</h2>
                <p className={styles.description}>
                  This text presents a fictional story about a stolen Crystal Pyramid in the Museum of...
                </p>
              </div>

              {/* Featured Image */}
              <div className={styles.imageWrapper}>
                <img
                  src="/image.png"
                  alt="Featured"
                />
              </div>
            </div>
            {/* Metrics */}
            <div className={styles.metrics}>
              {/* Duration */}
              <div className={styles.playMetric}>
              
              <svg width="16" height="16" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M27.4987 53.6667C42.2263 53.6667 54.1654 41.7276 54.1654 27C54.1654 12.2724 42.2263 0.333374 27.4987 0.333374C12.7711 0.333374 0.832031 12.2724 0.832031 27C0.832031 41.7276 12.7711 53.6667 27.4987 53.6667ZM24.0147 37.2555L36.6019 29.824C38.6865 28.5931 38.6865 25.4069 36.6019 24.1761L24.0147 16.7445C21.9886 15.5483 19.4987 17.1053 19.4987 19.5685V34.4316C19.4987 36.8948 21.9886 38.4518 24.0147 37.2555Z" fill="black"/>
              </svg>

                <span>21 min</span>
              </div>

              {/* Upvotes */}
              <div className={styles.upvoteMetric}>
              <svg width="36" height="36" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5001 38.4998C11.7011 32.7009 11.7011 23.2989 17.5001 17.4999C23.299 11.701 32.701 11.701 38.4999 17.4999C44.2989 23.2989 44.2989 32.7009 38.4999 38.4998C32.701 44.2988 23.299 44.2988 17.5001 38.4998Z" stroke="black" strokeWidth="2.47486" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M28 33.3621V22.6377M28 22.6377L32.1248 26.7625M28 22.6377L23.8752 26.7625" stroke="black" strokeWidth="2.47486" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
                <span>52</span>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
