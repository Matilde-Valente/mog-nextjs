import Head from "next/head";
import "antd/dist/antd.css";

function Home({ data }) {

  const stories = data.slice(0, 5)
  console.log(stories)

  return (
    <div>
      <Head>
        <title>TOP Stories</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}


export default Home;
