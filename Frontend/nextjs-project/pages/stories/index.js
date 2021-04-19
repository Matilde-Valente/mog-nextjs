import Head from "next/head";
import Link from "next/link";
import "antd/dist/antd.css";
import styles from "../../styles/Home.module.css";
import { Card, Col, Row } from "antd";
import { useRouter } from "next/router";

function CardItem(props) {
  return (
    <div>
      <Col>
        <Card className={styles.card} title={props.title} bordered={false}>
          {props.type}
        </Card>
      </Col>
    </div>
  );
}

function Home({ topStories }) {
  const { pathname } = useRouter();

  return (
    <div>
      <Head>
        <title>TOP Stories</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Row>
          {topStories.map((story) => {
            return (
              <Link
                href={`${pathname}/${story.id}`}
                key={`topStories_${story.id}`}
              >
                <a>
                  <CardItem title={story.title} type={story.type}></CardItem>
                </a>
              </Link>
            );
          })}
        </Row>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const api = "https://hacker-news.firebaseio.com/v0";

  async function fetchTopStoriesIds() {
    const res = await fetch(`${api}/topstories.json?print=pretty`);
    const allStoriesIds = await res.json();

    return allStoriesIds.slice(0, 5);
  }

  async function fetchTopStories() {
    const topStoriesIds = await fetchTopStoriesIds();
    return await Promise.all(
      topStoriesIds.map(async (storyId) => {
        const res = await fetch(`${api}/item/${storyId}.json?print=pretty`);
        return await res.json();
      })
    );
  }

  return {
    props: {
      topStories: await fetchTopStories(),
    },
  };
}

export default Home;
