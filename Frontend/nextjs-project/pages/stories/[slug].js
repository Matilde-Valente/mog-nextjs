import Head from "next/head";
import "antd/dist/antd.css";
import styles from "../../styles/Home.module.css";
import { Card, Col, Row } from "antd";

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
  return (
    <div>
      <Head>
        <title>TOP Stories</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Row>
          {topStories.map((story) => {
            // console.log(story);
            return (
              <CardItem
                key={story.id}
                title={story.title}
                type={story.type}
              ></CardItem>
            );
          })}
        </Row>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const api = "https://hacker-news.firebaseio.com/v0";

  const res = await fetch(`${api}/topstories.json?print=pretty`);
  const data = await res.json();

  const stories = data.slice(0, 5);

  const topStories = await Promise.all(
    stories.map(async (story) => {
      const response = await fetch(`${api}/item/${story}.json?print=pretty`);
      const data2 = await response.json();

      return data2;
    })
  );

  // console.log(topStories);
  return { props: { topStories } };
}

export default Home;
