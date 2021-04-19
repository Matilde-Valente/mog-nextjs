import Head from "next/head";
import "antd/dist/antd.css";
import styles from "../../styles/Home.module.css";
import { Badge } from "antd";

function storyDisplay({ storyData }) {
  return (
    <div>
      <Head>
        <title>Top Story - {storyData.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.title}>
          <h1>{storyData.title}</h1>
        </div>
        <h3>Authored by: {storyData.by}</h3>
        <Badge
          count={storyData.score}
          style={{ backgroundColor: checkBadgeColor(storyData.score) }}
          className={styles.badge}
        />
        <div className={styles.link}>
          <p>For more information visit: </p>
          <a href={storyData.url} target="_blank">
            {storyData.url}
          </a>
        </div>
      </main>
    </div>
  );
}

function checkBadgeColor(score) {
  let badgeColor = "";

  if (score <= 20) {
    badgeColor = "#ff4d4f";
  } else if (score > 20 && score <= 70) {
    badgeColor = "#faad14";
  } else {
    badgeColor = "#52c41a";
  }

  return badgeColor;
}

export async function getServerSideProps(context) {
  const api = "https://hacker-news.firebaseio.com/v0";
  const storyId = context.params.slug;

  async function fetchStoryData() {
    const res = await fetch(`${api}/item/${storyId}.json?print=pretty`);
    return await res.json();
  }

  return {
    props: {
      storyData: await fetchStoryData(),
    },
  };
}

export default storyDisplay;
