import Head from "next/head";
import "antd/dist/antd.css";
import { Carousel } from "antd";

function Home({ tweets }) {
  const contentStyle = {
    height: "300px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <div>
      <Head>
        <title>Kanye Rest API</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Carousel autoplay>
          {tweets.map((tweet, i) => {
            return (
              <div key={i}>
                <h3 style={contentStyle}>{tweet.quote}</h3>
              </div>
            );
          })}
        </Carousel>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const tweets = [];

  for (let i = 0; i < 5; i++) {
    // Fetch data from external API
    const res = await fetch(`https://api.kanye.rest`);
    const data = await res.json();
    tweets.push(data);
  }

  // Pass data to the page via props
  return { props: { tweets } };
}

export default Home;
